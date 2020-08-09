import React from 'react'
import Member from './Member'
import styled from "styled-components";

const Team = styled.div`
display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  `
  
function Members({ members }) {

    if (members.length === 0) {
        return <h3>No members added yet</h3>
    }

    const memberList = members.map(item => {
        return <Member key={item.id} item={item} />
    })

    return (
        <Team>
            {memberList}
        </Team>
    )
}

export default Members