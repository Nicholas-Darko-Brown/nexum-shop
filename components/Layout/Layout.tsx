import React from 'react'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
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
        <Footer />
    </>
  )
}

export default Layout