import React from 'react'
import PriceCard from '../home/Price/PriceCard'
import img from '../images/pricing.jpg'
import Back from '../common/Back'

const Pricing = () => {
    return (
        <>
            <section className="blog-out mb">
                <Back name='30 days money back guarantee' title='No Extra Fees. Friendly Support' cover={img} />
                <div className="container price">
                    <PriceCard />
                </div>
            </section>
        </>
    )
}

export default Pricing