import React from 'react'
import Post from './Post'

const posts = [
    {
        id: '123',
        username: 'MBusto4',
        userImg: 'https://pkimgcdn.peekyou.com/aa27a6431e751f6deaf283dd7551f015.jpeg',
        img: 'https://fancycrave.com/wp-content/uploads/2017/05/Dark-Forest.jpg',
        caption: 'This Is Dope you are so coooooool!'
    },
    {
        id: '123',
        username: 'MBusto4',
        userImg: 'https://pkimgcdn.peekyou.com/aa27a6431e751f6deaf283dd7551f015.jpeg',
        img: 'https://fancycrave.com/wp-content/uploads/2019/02/Deep-Sunset-over-the-Sea-in-Thailand.jpg',
        caption: 'This Is Dope you are so coooooool!'
    },
    {
        id: '123',
        username: 'MBusto4',
        userImg: 'https://pkimgcdn.peekyou.com/aa27a6431e751f6deaf283dd7551f015.jpeg',
        img: 'https://fancycrave.com/wp-content/uploads/2019/02/Secret-Beach-in-Thailand-Seen-Through-Tropical-Leaves.jpg',
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
