import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  status: PropTypes.string.isRequired
}

const Status = ({status}) => {
  return (
    <div>
      <p>{status}</p>
    </div>
  )
}

Status.propTypes = propTypes

export default Status
