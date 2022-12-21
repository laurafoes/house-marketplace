import Link from 'next/link'
import React from 'react'
import Button from '../Button'
import { Banner, ButtonsWrapper, HeroContainer, HeroContent } from './HeroElements'

function Hero() {
  return (
    <HeroContainer>
        <HeroContent>
            <p>ENCONTRE AQUI</p>
            <h1>seu próximo lar</h1>
            <ButtonsWrapper>
                <Link href='/explorar'>
                    <Button variant='primary'>
                        Explore o Marketplace
                    </Button>
                </Link>
                <Link href='/ofertas'>
                    <Button variant='secondary'>
                        Nossas ofertas
                    </Button>
                </Link>
            </ButtonsWrapper>
        </HeroContent>
        <Banner />
    </HeroContainer>
  )
}

export default Hero
