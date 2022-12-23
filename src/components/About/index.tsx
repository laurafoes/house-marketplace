import React from 'react'
import { HeroContainer, HeroContent } from '../Hero/HeroElements'
import { AboutBanner, AboutContainer, Subtitle, Title } from './AboutElements'

function About() {
  return (
    <AboutContainer>
      <HeroContent>
        <Subtitle>
        A SUA FELICIDADE É O NOSSO PROPÓSITO.
        </Subtitle>
        <Title>
            missão.
        </Title>
        <p>
        O nosso objetivo é oferecer uma curadoria selecionada de imóveis escolhidos a dedo para que você encontre o melhor lar possível para a sua família.
        </p>
        <Title>
            visão.
        </Title>
        <p>
        Nosso time acredita que a oferta justa e acessível de moradias para nossos clientes é o caminho para fortalecer o senso de comunidade nas nossas cidades. Sabemos que pessoas felizes geram vizinhanças alegres e unidas.
        </p>
      </HeroContent>
      <AboutBanner />
    </AboutContainer>
  )
}

export default About
