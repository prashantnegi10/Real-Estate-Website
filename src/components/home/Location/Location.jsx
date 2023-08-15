import React from 'react'
import './location.css'
import Heading from '../../common/Heading'
import { location } from '../../data/Data'

const Location = () => {
    return (
        <>
            <div className="location padding">
                <div className="container">
                    <Heading title='Explore By Location' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />

                    <div className="content grid3 mtop">
                        {
                            location.map((items, ind) => (
                                <div className="box" key={ind}>
                                    <img src={items.cover} alt="" />
                                    <div className="overlay">
                                        <h5>{items.name}</h5>
                                        <p>
                                            <label>{items.Villas}</label>
                                            <label>{items.Offices}</label>
                                            <label>{items.Apartments}</label>
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Location