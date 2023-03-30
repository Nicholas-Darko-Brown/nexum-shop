import React from 'react'
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'
import Navlink from '../Navlinks/Navlink'

interface ILayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
        <Banner />
        <Navbar />
        <Navlink />
        <main> {children} </main>
    </>
  )
}

export default Layout