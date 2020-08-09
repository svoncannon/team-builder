import React from 'react'
import Member from './Member'

function Members({ members }) {

    if (members.length === 0) {
        return <h2>No members added yet</h2>
    }

    const memberList = members.map(item => {
        return <Member key={item.id} item={item} />
    })

    return (
        <>
            {memberList}
        </>
    )
}

export default Members