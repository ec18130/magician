import React from 'react'


//maps all the card objects stored.
const ShowCards = (props) => {
  return (
    <div>
        {props.showcards.map((item) => item)}
    </div>
  )
}

export default ShowCards