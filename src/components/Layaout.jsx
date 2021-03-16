import React from 'react'
import Header from './Header'


export default function Layaout({children}) {
    return (
        <>
            <Header></Header>
            {children}
        </>
    )
}
