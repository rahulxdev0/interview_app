import React from 'react'

const Child = ({ userInfo }) => {
    console.log('Child component rendered with userInfo:', userInfo)
  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {userInfo.name}</p>
      <p>Age: {userInfo.age}</p>
      <p>Email: {userInfo.email}</p>
    </div>
  )
}

export default Child