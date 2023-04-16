import React from 'react'
import Header from '../../components/header/Header'
import Education from '../../components/Education/Education'
import './Education.css'
//import "//home/Home.css"


const Edu = () => {
  return (
    <div>
    <Header/>

    <div className='card-div'>
        <Education/>
        <Education/>
        <Education/>
    </div>
    <div className='card-div'>
        <Education/>
        <Education/>
        <Education/>
    </div>
    </div>
  )
}

//style the card div in css to have multiple cards in a grid


export default Edu
