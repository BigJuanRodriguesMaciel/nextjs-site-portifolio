import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import React from 'react'

interface Props {
    icon: ReactJSXElement,
    quantity: any,
    label: String
}

export default function CardData({icon, quantity, label}:Props) {
  return (
    <div id="card-data">
        <div id="icon">{icon}</div>
        <h3>{quantity}</h3>
        <h4>{label}</h4>
    </div>
  )
}