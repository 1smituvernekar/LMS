import React from 'react'
import Hero from '../Components/Hero'
import Companies from '../Components/Companies'
import Products from '../Components/Products'

import Footer from '../Components/Footer'
import Form from '../Components/Form'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Companies/>
        <Products/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default Home