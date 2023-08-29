import React from 'react'

function User(props) {

const {data} =props

  return (
    <>
   <div>User</div>
   <h1>{data.name}</h1>
   <h1>{data.age}</h1>
    </>
  )
}

export default User