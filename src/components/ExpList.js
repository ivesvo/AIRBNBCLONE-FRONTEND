import React, { useState, useEffect } from 'react';
import axios from "axios";
import ExpList from './ExpList';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron'
// import Pagination from "react-pagination-library";


export default function ExperienceList(){
    const [experience, setExperience ] = useState([]);
    let [pageNumber, setPageNumber] = useState(1);
    let [total, setTotalPages] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/test').then((res) => {
            console.log(res.data)
            setExperience(res.data)
            
           
        })
    },[]); //stop updating every seconds 
    
    if (experience == null){
        return (
            <div>Error Getting Experiences</div>
        )
    }else{
             return (
            <div>
                <Navbar/>
                <Jumbotron/>
                <h1>Cook With Awards Winning Chef</h1>
                {experience.map((e,index) => (<Experience key={index} {...e} />))}
            </div>

        )
    }
   
}
const Experience = ({ title, description, duration, groupsize, pictureURL }) => {
    return (

        <div>
           
            <h2>{title}</h2>
            <h3>{description}</h3>
            <h3>{duration} hour</h3>
            <h3>{groupsize} people</h3>
            
            <img src={pictureURL[0]}/>
        </div>
    )
}