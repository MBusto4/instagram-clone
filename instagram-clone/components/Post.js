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
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from '@firebase/firestore'
import { db } from '../firebase'
import { useSession } from 'next-auth/react'

function Post({ id, username, userImg, img, caption }) {

    const [comment, setComment] = useState('')
    const [comments, setComments] = useState([])

    const { data: sessionData } = useSession()

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
        , [db])

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
                    <HeartIcon className='postButton' />
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