import React, { useEffect, useState } from 'react'
import faker from 'faker'
import Story from './Story'
function Stories() {

    //creating state
    const [fakeUsers, setFakeUsers] = useState([])

    //basically component did mount
    useEffect(() => {
        const fakeUsers = [...Array(20)].map((_, i) => ({

            //generates fake info
            ...faker.helpers.contextualCard(),
            id: i
        }))
        setFakeUsers(fakeUsers)
    }, [])

    return (
        <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-20
        border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
            {fakeUsers.map(user => (
                <Story
                    key={user.id}
                    img={user.avatar}
                    username={user.username}
                />
            ))}
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}


        </div>
    )
}

export default Stories
