import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../common/header/Header'
import Home from '../home/Home'
import Footer from '../common/footer/Footer'
import About from '../about/About'
import Service from '../services/Service'
import Blog from '../Blog/Blog'
import Pricing from '../Price/Pricing'
import Contact from '../contact/Contact'


const Pages = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/about' Component={About} />
                <Route path='/services' Component={Service} />
                <Route path='/blog' Component={Blog} />
                <Route path='/pricing' Component={Pricing} />
                <Route path='/contact' Component={Contact} />
            </Routes>
            <Footer />
        </>
    )
}

export default Pages