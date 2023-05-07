import React from 'react'

const SingleUser = (props) => {
  return (
    <div>
        <h1>User name : {props.name}</h1>
        <p>User age : {props.age}</p>
    </div>
  )
}

export default SingleUser