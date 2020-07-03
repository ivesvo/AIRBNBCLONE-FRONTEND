import React, { useState, useEffect } from 'react';
import axios from "axios";



export default function ExperienceList(){
    const [experience, setExperience ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/experiences').then((res) => {
            console.log(res.data)
            setExperience(res.data.data)
        })
    },[]); //stop updating every seconds 
    if (experience == null){
        return (
            <div>Error Getting Experiences</div>
        )
    }else{
             return (
            <div>
                <h1>Cook With Awards Winning Chef</h1>
                {experience.map((e,index) => (<Experience key={index} {...e} />))}
            </div>

        )
    }
   
}
const Experience = ({ title, description, duration, groupsize }) => {
    return (

        <div>
            <h2>Cook With Award Winning Chefs</h2>
            <h2>{title}</h2>
            <h3>{description}</h3>
            <h3>{duration} hour</h3>
            <h4>{groupsize} people</h4>
        </div>
    )
}