import React from 'react'
import { useRouter } from "next/router"

interface Props {
    overTitle?: String,
    title?: String
}

export default function PageTitle({overTitle, title}: Props) {
    const route = useRouter()
    const textToUppercase = (text) => {
        return text.toUpperCase().replaceAll('/','')
    }
    return (
        <div id="page-title">
            <h2>{textToUppercase(overTitle || route.asPath)}</h2>
            <h1 className="medium-title f-w-700">{title?.toUpperCase()}</h1>
        </div>
    )
}