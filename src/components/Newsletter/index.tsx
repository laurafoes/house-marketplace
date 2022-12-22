import React from 'react'
import { Input, InputButton, InputContainer, NewsletterContainer, NewsletterSubtitle, NewsletterTitle } from './NewsletterElements'

function Newsletter() {
  return (
    <NewsletterContainer>
        <NewsletterTitle>
            Se inscreva na nossa newsletter
        </NewsletterTitle>
        <NewsletterSubtitle>
            Não perca as nossas melhores oportunidades
        </NewsletterSubtitle>
        <InputContainer>
            <Input
                placeholder='Insira o seu melhor e-mail'
            />
            <InputButton>
                Inscrever
            </InputButton>
        </InputContainer>
    </NewsletterContainer>
  )
}

export default Newsletter
