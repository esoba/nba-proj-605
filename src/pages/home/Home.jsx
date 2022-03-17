import React from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./home.css"

export default function Home() {
  return (
    <div className='home'>
        <h3 className="HomepageTitle">Todays Predicted Winners</h3>
        <FeaturedInfo/>
    </div>
  )
}
