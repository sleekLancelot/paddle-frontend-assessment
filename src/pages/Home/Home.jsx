import React from 'react'
import { useEffect } from 'react'
import { getRepos } from '../../actions'
import { Repo } from '../../Components'
import './Home.scss'

const Home = () => {

    useEffect( () => {
        getRepos()
    },[])

  return (
    <div className='home'>
        daddy's home!
        <Repo />
    </div>
  )
}

export default Home