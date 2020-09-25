import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { setDet } from '../../redux/actions/action1';
import Navigation from '../utils/navbar';
export default function Courses(){
    const [course,setCourse] = useState({selected: '',courses: [
        {name: 'Full Course on Restoration Magic', master: 'Colette Marence'},
        {name: 'Full Course on Destruction Magic', master: 'Faralda'},
        {name: 'Full Course on Alteration Magic', master: 'Tolfdir'},
        {name: 'Full Course on Illusion Magic', master: 'Drevis Neloren'},
        {name: 'Full Course on Necromancy', master: 'Phinis Gestor'},
        {name: 'Full Course on Alchemy', master: 'Enthir'},
        {name: 'Full Course on Enchantments', master: 'Sergius Turrianus '},
    ]})
    const dispatch = useDispatch()
    const [redir,setRedir] = useState(false)
  function changeHandler(e){
var inputValue = document.getElementById("course").value;
var data = inputValue.split('-by ')
setCourse(i=>{return{...i,selected: {course: data[0], master: data[1]}}})
dispatch(setDet({course: data[0], master: data[1]}))

    }
    console.log(course.selected)
    return(
        <>
        <Navigation/>
        Course page:
        Select the course: <input list='courses' id='course' name='course' onChange={(e)=>changeHandler(e)} style={{width:'30%'}}/>
        <datalist id='courses' >


            {course.courses.map((f,i)=>{
                // return <option id = {i} >{f.name} by {f.master}</option>

                return <option id = {i} value={`${f.name} -by ${f.master}`} />
            })}
        </datalist>
        <p><span onClick={()=>setRedir(true)} style={{color:'red',cursor:'pointer'}}>Click here</span> to learn more about the faculty</p>
        {redir?<Redirect to='/faculty'/>:null}
        </>
    )
}