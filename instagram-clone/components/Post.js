import React, { useEffect, useState } from 'react'

import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    HeartIcon,
    EmojiHappyIcon,
    PaperAirplaneIcon
} from "@heroicons/react/outline"

import {
    HeartIcon as HeartIconFilled
} from "@heroicons/react/solid"
import { comment } from 'postcss'
import { addDoc, collection, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from '@firebase/firestore'
import { db } from '../firebase'
import { useSession } from 'next-auth/react'
import Moment from 'react-moment';

function Post({ id, username, userImg, img, caption }) {

    const [comment, setComment] = useState('')
    const [comments, setComments] = useState([])
    const [likes, setLikes] = useState([])

    const { data: sessionData } = useSession()

    //comments
    useEffect(
        () =>
            onSnapshot(
                query(
                    collection(db, 'posts', id, 'comments'),
                    orderBy('timestamp', 'desc')
                ),
                (snapshot) =>
                    setComments(snapshot.docs)
            )
        , [db]
    )

    //likes
    useEffect(
        () =>
            onSnapshot(collection(db, 'posts', id, 'likes'), snapshot =>
                setLikes(snapshot.docs)
            ),
        [db, id]
    )

    const likePost = async () => {
        await setDoc(doc(db, 'posts', id, 'likes', sessionData.user.uid), {
            username: sessionData.user.username
        })
    }


    const sendComment = async (e) => {
        e.preventDefault()

        const commentToSend = comment
        setComment('');

        //adding it to the backend
        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: commentToSend,
            username: sessionData.user.username,
            userImage: sessionData.user.image,
            timestamp: serverTimestamp()
        })
    }



    return (
        <div className='bg-white my-7 border rounded-sm'>
            {/* Header */}
            <div className='flex items-center p-5'>
                <img className='rounded-full h-12 w-12 object-contain border p-1 mr-3' src={userImg} alt="" />
                <p className='flex-1 font-bold'>{username}</p>
                <DotsHorizontalIcon className='h-5' />
            </div>

            {/* img */}
            <img src={img} className='object-cover w-full' alt="" />

            {/* Buttons */}
            <div className='flex justify-between px-4 pt-4'>
                <div className='flex space-x-4'>
                    <HeartIcon
                        onClick={likePost}
                        className='postButton' />
                    <ChatIcon className='postButton' />
                    <PaperAirplaneIcon className='postButton' />
                </div>
                <BookmarkIcon className='postButton' />
            </div>
            {/* caption */}
            <p className=' p-5 truncate'>
                <span className='font-bold mr-1'>{username} </span>
                {caption}
            </p>

            {/* comments */}
            <div className='ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
                {comments.map((comment) => (
                    <div className='flex items-center space-x-2 mb-3' key={comment.id}>
                        <img className='h-7 rounded-full' src={comment.data().userImage} alt="" />
                        <p className='text-sm flex-1'>
                            <span className='font-bold'>{comment.data().username}</span>
                            {comment.data().comment}
                        </p>
                        <Moment fromNow className='pr-5 text-xs'>
                            {comment.data().timestamp?.toDate()}
                        </Moment>
                    </div>
                ))}
            </div>



            {/* input */}
            <form className='flex items-center p-4'>
                <EmojiHappyIcon className='h-7' />
                <input
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    type='text'
                    className='border-none flex-1 focus:ring-0 outline-none'
                    placeholder='Add A Comment...' />
                <button
                    type='submit'
                    disabled={!comment.trim()}
                    onClick={sendComment}
                    className='font-semibold text-blue-400'>POST</button>
            </form>


        </div>
    )
}

export default Post