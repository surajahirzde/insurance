import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()

  return (
    <div> {
        error.message || error.details || error.title }
     </div>
  )
}

export default Error