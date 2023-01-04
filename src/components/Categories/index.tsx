import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Button from '../Button'
import { CategoriesContainer, CategoriesWrapper, ExploreWrapper, LabelContainer, OptionsWrapper, Rentals, Sales } from './CategoriesElements'
import { FiArrowUpRight } from 'react-icons/fi'

function Categories() {
    const route = useRouter()
    const [ explorePage, setExplorePage ] = useState(false)

    useEffect(() => {
        if(route.pathname === '/explorar') {
            setExplorePage(true)
        }
    })

  return (
    <>
    <CategoriesContainer explorePage={explorePage}>
        { !explorePage ?
            <CategoriesWrapper>
                <h2>Categorias</h2>
                <ExploreWrapper>
                    <Link href='/explorar'>Explore já</Link>
                    <FiArrowUpRight size={20} />
                </ExploreWrapper>
            </CategoriesWrapper>
            : <CategoriesWrapper>
                    <h2>selecione a categoria desejada</h2>
                </CategoriesWrapper>
        }
        <OptionsWrapper>
            <Rentals>
                <LabelContainer>
                    <h2>Propriedades
                        <br />
                        para alugar
                    </h2>
                    <Link href='/explorar/categoria/aluguel'>
                        <Button variant='primary' type='button'>
                            Ver propriedades
                        </Button>
                    </Link>
                </LabelContainer>
            </Rentals>
            <Sales>
            <LabelContainer>
                    <h2>Propriedades
                        <br />
                        à venda
                    </h2>
                    <Link href='/explorar/categoria/venda'>
                        <Button variant='primary' type='button'>
                            Ver propriedades
                        </Button>
                    </Link>
                </LabelContainer>
            </Sales>
        </OptionsWrapper>


    </CategoriesContainer>
    </>
  )
}

export default Categories
