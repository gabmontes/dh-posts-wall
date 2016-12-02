import React from 'react'

export default function Post({ id, text, up, down, onVote }) {
  return (
    <div style={{ margin: 10 }}>
      <div>
        {text}
      </div>
      <button
        onClick={() => onVote(id, 'up')}
        disabled={id < 0}>
        {`Me gusta (${up})`}
      </button>
      <button
        onClick={() => onVote(id, 'down')}
        disabled={id < 0}>
        {`No me gusta (${down})`}
      </button>
    </div>
  )
}
