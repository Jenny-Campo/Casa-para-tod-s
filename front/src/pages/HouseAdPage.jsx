import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import HouseAdList from '../components/HouseAdList';
import { useNavigate } from 'react-router-dom'

function HouseAdPage() {

const navigate = useNavigate()
  return (
    <div>
        <Header/>
        <HouseAdList/>
        <Footer/>
    </div>
  )
}

export default HouseAdPage