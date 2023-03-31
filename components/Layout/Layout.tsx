import React from 'react'
import Banner from '../Banner/Banner'
import Hero from '../Hero/Hero'
import Navbar from '../Navbar/Navbar'
import Navlink from '../Navlinks/Navlink'
import ProductSection from '../ProductSection/ProductSection'

interface ILayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
        <Banner />
        <Navbar />
        <Navlink />
        <Hero />
        <ProductSection />
        <main> {children} </main>
    </>
  )
}

export default Layout