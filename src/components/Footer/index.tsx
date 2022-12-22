import Link from 'next/link'
import React from 'react'
import { ColTitle, ColWrapper, FooterContainer, Item, ItemsWrapper, SocialMediaLink, SocialMediaWrapper } from './FooterElements'

function Footer() {
  return (
    <FooterContainer>
        <ColWrapper>
            <ColTitle>o lar.</ColTitle>
            <p>Nossa missão é garantir a compra sem burocraria, acessível e justa do próximo lar da sua família.</p>
        </ColWrapper>
        <ColWrapper>
            <ColTitle>Links Úteis</ColTitle>
            <ItemsWrapper>
                <Item>
                   <Link href='/'>Home</Link>
                </Item>
                <Item>
                   <Link href='/'>Sobre nós</Link>
                </Item>
                <Item>
                   <Link href='/'>Explorar</Link>
                </Item>
                <Item>
                   <Link href='/'>Destaques</Link>
                </Item>
            </ItemsWrapper>
        </ColWrapper>
        <ColWrapper>
        <ColTitle>Mapa do Site</ColTitle>
            <ItemsWrapper>
                <Item>
                   <Link href='/'>Nosso app</Link>
                </Item>
                <Item>
                   <Link href='/'>Perguntas frequentes</Link>
                </Item>
                <Item>
                   <Link href='/'>Central de atendimento</Link>
                </Item>
                <Item>
                   <Link href='/'>Política de privacidade</Link>
                </Item>
                <Item>
                   <Link href='/'>Termos e condições</Link>
                </Item>
            </ItemsWrapper>
        </ColWrapper>
        <ColWrapper>
        <ColTitle>Contate-nos</ColTitle>
            <SocialMediaWrapper>
                <SocialMediaLink href='/' target='_blank' rel='noreferrer'>
                    <img src='/FACEBOOK.svg' />
                </SocialMediaLink>
                <SocialMediaLink href='/' target='_blank' rel='noreferrer'>
                    <img src='/TWITTER.svg' />
                </SocialMediaLink>
                <SocialMediaLink href='/' target='_blank' rel='noreferrer'>
                    <img src='/INSTAGRAM.svg' />
                </SocialMediaLink>
                <SocialMediaLink href='/' target='_blank' rel='noreferrer'>
                    <img src='/LINKEDIN.svg' />
                </SocialMediaLink>
            </SocialMediaWrapper>
            <p>contato@olar.com.br</p>
        </ColWrapper>


    </FooterContainer>
  )
}

export default Footer
