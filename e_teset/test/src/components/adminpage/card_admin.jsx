import React from 'react'

function card_admin(props) {
  return (
    <>
        <div>{props.name}</div>
    <div>{props.phonename}</div>
    <div>{props.color}</div>
    <div>{props.price}</div>
    <div>{props.instok}</div>
    </>
  )
}

export default card_admin