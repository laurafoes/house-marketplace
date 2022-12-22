import React, { ReactNode } from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
        <Navbar />
            <main>
                { children }
            </main>
        <Footer />
    </>
  )
}

export default Layout
