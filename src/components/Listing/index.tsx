import { DocumentData } from 'firebase/firestore'
import Link from 'next/link'
import React from 'react'
import { BathroomIcon, BedroomIcon, ExtraInfo, InfoWrapper, ListingContainer, ListingImg, ListingInfo, ListingPrice } from './ListingElements'

interface Propriedade {
    id: string,
    propriedade: DocumentData,
    delete?: boolean
}

function Listing({ propriedade, id }: Propriedade) {
  return (
    <ListingContainer>
        <Link href={`/categoria/${ propriedade.type }/${id}`}>
            <ListingImg src={ propriedade.imageUrls[0] } alt={ propriedade.nome } />
        </Link>
        <ListingInfo>
            { propriedade.endereço }
            <h3>{ propriedade.nome }</h3>
            <ListingPrice>
                R$ { propriedade.oferta
                        ? propriedade.precoOferta
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                        : propriedade.precoNormal
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                }
                { propriedade.type === 'aluguel' ? ' / mês' : null}
            </ListingPrice>
            <ExtraInfo>
                <InfoWrapper>
                    <BedroomIcon />
                    { propriedade.quartos > 1 ? `${ propriedade.quartos} Quartos` : '1 Quarto'}
                </InfoWrapper>
                <InfoWrapper>
                    <BathroomIcon />
                    { propriedade.banheiros > 1 ? `${ propriedade.banheiros} Banheiros` : '1 Banheiro'}
                </InfoWrapper>
            </ExtraInfo>
        </ListingInfo>
    </ListingContainer>
  )
}

export default Listing
