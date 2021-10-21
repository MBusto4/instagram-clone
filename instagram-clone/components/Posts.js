import React from 'react'
import Post from './Post'

const posts = [
    {
        id: '123',
        username: 'MBusto4',
        userImg: 'https://pkimgcdn.peekyou.com/aa27a6431e751f6deaf283dd7551f015.jpeg',
        img: 'https://pkimgcdn.peekyou.com/aa27a6431e751f6deaf283dd7551f015.jpeg',
        caption: 'This Is Dope you are so coooooool!'
    },
    {
        id: '123',
        username: 'MBusto4',
        userImg: 'https://pkimgcdn.peekyou.com/aa27a6431e751f6deaf283dd7551f015.jpeg',
        img: 'https://pkimgcdn.peekyou.com/aa27a6431e751f6deaf283dd7551f015.jpeg',
        caption: 'This Is Dope you are so coooooool!'
    },
    {
        id: '123',
        username: 'MBusto4',
        userImg: 'https://pkimgcdn.peekyou.com/aa27a6431e751f6deaf283dd7551f015.jpeg',
        img: 'https://pkimgcdn.peekyou.com/aa27a6431e751f6deaf283dd7551f015.jpeg',
        caption: 'This Is Dope you are so coooooool!'
    },
]

function Posts() {
    return (
        <div>
            {posts.map(post => (
                <Post key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
                />
            ))}
            {/*Post */}
            {/*Post */}
            {/*Post */}

        </div>
    )
}

export default Posts
