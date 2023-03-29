import React from 'react'
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'

interface ILayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
        <Banner />
        <Navbar />
        <main> {children} </main>
    </>
  )
}

export default Layout