import React from 'react'
import Nav from './Nav'
import Delimeter from './Delimeter'
import Description from './Description'

const Layout = () => {
  return (
    <div className=''>
        <div>
          <Nav/>
          <Description/>
          <Delimeter/>
        </div>
    </div>
  )
}

export default Layout