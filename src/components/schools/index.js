import React from 'react'
import { useParams } from 'react-router'
import Navigation from '../utils/navbar'
export default function Schools(){
    let params = useParams()
    return(
        <>
        <Navigation/>
        school {params.id}
        </>
    )
}