import React from 'react'
import Hero from './Hero/Hero'
import Featured from './Featured/Featured'
import Recent from './Recent/Recent'
import Award from './Awards/Award'
import Location from './Location/Location'
import Team from './Team/Team'
import Price from './Price/Price'

const Home = () => {
    return (
        <>
            <Hero />
            <Featured />
            <Recent />
            <Award />
            <Location />
            <Team />
            <Price />
        </>
    )
}

export default Home