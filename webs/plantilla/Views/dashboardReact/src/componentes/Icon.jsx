import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Icon({css,icon}) {
  return (
    <FontAwesomeIcon className={css} icon={icon} />
  )
}
