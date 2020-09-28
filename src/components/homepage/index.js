import React, { useEffect, useState } from 'react'
import { companiesAPI } from '../../containers/companiesApi'
import Navigation from '../utils/navbar'
export default function HomePage(){
    const [res,setRes] = useState({data:[],count:0});
    const [frm,setFrm] = useState(0);
    const [load,setLoad] = useState(false)
    useEffect(()=>{
        console.log(window.innerHeight, document.documentElement.scrollTop,window.innerHeight+document.documentElement.scrollTop, document.documentElement.offsetHeight)

        window.addEventListener('scroll',handleScroll)
companiesAPI(res,setRes,frm,setFrm);


    },[])
    // 
    const handleScroll = () => { 
// console.log(window.innerHeight, document.documentElement.scrollTop,window.innerHeight+document.documentElement.scrollTop, document.documentElement.offsetHeight-20)

if(window.innerHeight+document.documentElement.scrollTop>document.documentElement.offsetHeight-20){
    setLoad(true)
}
      };      
    // 

    useEffect(()=>{
        if(document.documentElement.offsetHeight<window.innerHeight&&!load)
        companiesAPI(res,setRes,frm,setFrm)
        if(load){
            companiesAPI(res,setRes,frm,setFrm)
            setLoad(false)
        }
    },[load,res])

    return(
        <>
        <Navigation/>
        <table>
            <tr style={{border: '1px solid black'}}>
                <th style={{border: '1px solid black'}}>Serial no</th>
                <th style={{border: '1px solid black'}}>Id</th>
                <th style={{border: '1px solid black'}}>Name</th>
                <th style={{border: '1px solid black'}}>Domain</th>
                <th style={{border: '1px solid black'}}>Location (primary Country)</th>
                <th style={{border: '1px solid black'}}>Founded year</th>
            </tr>
        {res&&res.data.map((f,i)=>{return  <tr key = {i} style={{border: '1px solid black'}}>
        <td style={{border: '1px solid black'}}>{i+1}</td>
            <td style={{border: '1px solid black'}}>{f.id}</td>
        <td style={{border: '1px solid black'}}>{f.name}</td>
        <td style={{border: '1px solid black'}}>{f.domain}</td>
        <td style={{border: '1px solid black'}}>{f.location&&f.location.country}</td>
        <td style={{border: '1px solid black'}}>{f.foundedYear}</td>
            </tr>

        })}
        </table>
        </>
    )
}