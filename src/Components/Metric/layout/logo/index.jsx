import React from 'react'
import { Link } from 'react-router-dom'
import coloredLogo from '../../../../Assets/img/logo_colored.png'
import plainLogo from '../../../../Assets/img/logo_white.png'

import './Logo.scss'

const Logo = ({transBG = true }) => {
  return (
    <div className='logo'>
        <Link to='/comingsoon' className='logoLink'>
            <img src={ transBG ? plainLogo : coloredLogo} alt="logo" />
        </Link>
    </div>
  )
}

export {Logo}