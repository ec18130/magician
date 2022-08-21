import React from 'react'

const ShowCards = (props) => {
  return (
    <div>
        {props.showcards.map((item) => item)}
    </div>
  )
}

export default ShowCards