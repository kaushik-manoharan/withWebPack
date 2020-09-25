import React from 'react'
import { useSelector } from 'react-redux'
import Navigation from '../utils/navbar'
export default function Faculty(){
    const course = useSelector(s=>s.selected)
    console.log(course);
    return(
        <>
        <Navigation/>
        <h1>Faculty page</h1>
        You have selected the Course:  {course.course}
        <h3>Faculty Details: </h3>
        <p>Name: {course.master}</p>
        <p>Handling course: {course.course}</p>
        </>
    )
}