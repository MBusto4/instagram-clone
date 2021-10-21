import React from 'react'
import Post from './Post'

const posts = [
    {
        id: '123',
        username: 'MBusto4',
        userImg: 'https://media-exp1.licdn.com/dms/image/C4E03AQG5LSCpjfG0jA/profile-displayphoto-shrink_200_200/0/1615845650471?e=1634774400&v=beta&t=RR_qNwmKQ8uGymldmunIkXZZsO4SOZ3Gf1YyvYbEsbQ',
        img: 'https://media-exp1.licdn.com/dms/image/C4E03AQG5LSCpjfG0jA/profile-displayphoto-shrink_200_200/0/1615845650471?e=1634774400&v=beta&t=RR_qNwmKQ8uGymldmunIkXZZsO4SOZ3Gf1YyvYbEsbQ',
        caption: 'This Is Dope you are so coooooool!'
    },
    {
        id: '123',
        username: 'MBusto4',
        userImg: 'https://media-exp1.licdn.com/dms/image/C4E03AQG5LSCpjfG0jA/profile-displayphoto-shrink_200_200/0/1615845650471?e=1634774400&v=beta&t=RR_qNwmKQ8uGymldmunIkXZZsO4SOZ3Gf1YyvYbEsbQ',
        img: 'https://media-exp1.licdn.com/dms/image/C4E03AQG5LSCpjfG0jA/profile-displayphoto-shrink_200_200/0/1615845650471?e=1634774400&v=beta&t=RR_qNwmKQ8uGymldmunIkXZZsO4SOZ3Gf1YyvYbEsbQ',
        caption: 'This Is Dope you are so coooooool!'
    },
    {
        id: '123',
        username: 'MBusto4',
        userImg: 'https://media-exp1.licdn.com/dms/image/C4E03AQG5LSCpjfG0jA/profile-displayphoto-shrink_200_200/0/1615845650471?e=1634774400&v=beta&t=RR_qNwmKQ8uGymldmunIkXZZsO4SOZ3Gf1YyvYbEsbQ',
        img: 'https://media-exp1.licdn.com/dms/image/C4E03AQG5LSCpjfG0jA/profile-displayphoto-shrink_200_200/0/1615845650471?e=1634774400&v=beta&t=RR_qNwmKQ8uGymldmunIkXZZsO4SOZ3Gf1YyvYbEsbQ',
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
