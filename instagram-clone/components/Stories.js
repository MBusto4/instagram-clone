import React, { useEffect } from 'react'
import faker from 'faker'

function Stories() {

    //basically component did mount
    useEffect(() => {
        const fakeUsers = [...Array(20)].map((_, i) => ({

            //generates fake info
            ...faker.helpers.contextualCard(),
            id: i
        }))
        console.log('FakeUsers--->', fakeUsers)
    }, [])


    return (
        <div>
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}


        </div>
    )
}

export default Stories
