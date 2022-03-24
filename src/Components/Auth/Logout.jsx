import React from 'react'

export default function Logout() {
    localStorage.removeItem('user_id')
    localStorage.removeItem('email')
    localStorage.removeItem('token')
  return (
    <div>
      <h3>Logout</h3>
    </div>
  )
}
