import React from 'react'
import { Hero, Partners } from './components'
import { partners } from './data'

const Home = () => {
  return (
    <>
      <Hero />
      <Partners data={partners} />
    </>
  )
}

export default Home
