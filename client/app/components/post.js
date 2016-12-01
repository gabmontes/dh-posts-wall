import React from 'react'

export default function Post({ id, text, up, down, onVote }) {
  return (
    <div style={{ margin: 10 }}>
      <div>
        {text}
      </div>
      <button onClick={() => onVote(id, 'up')} >{`Me gusta (${up})`}</button>
      <button onClick={() => onVote(id, 'down')}>{`No me gusta (${down})`}</button>
    </div>
  )
}
