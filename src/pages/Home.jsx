import React from 'react'
import HeroSlider from '../components/HeroSlider'
import Hero from '../components/Hero'
import Category from '../components/Category'
import HotNewsSlider from '../components/HotNewsSlider'
import Category3 from '../components/Category3'
import Category4 from '../components/Category4'
import Strip from '../components/Strip'
import LatestNewsSection from '../components/LatestNewsSection'

export default function Home() {
  return (
    <>
    <div id="wrapper" className="wrap overflow-hidden-x">
    <HeroSlider/>
    <Hero/>
    <Category/>
    <HotNewsSlider/>
    <Category3/>
    <Category4/>
    <Strip/>
    <LatestNewsSection/>
    </div>
    </>
  )
}
