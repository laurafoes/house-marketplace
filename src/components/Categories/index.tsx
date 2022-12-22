import Link from 'next/link'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import Button from '../Button'
import { CategoriesContainer, CategoriesWrapper, ExploreWrapper, LabelContainer, OptionsWrapper, Rentals, Sales } from './CategoriesElements'

function Categories() {
  return (
    <>
    <CategoriesContainer>
        <CategoriesWrapper>
            <h2>Categorias</h2>
            <ExploreWrapper>
                <Link href='/explorar'>Explore já</Link>
                <FiArrowUpRight size={20} />
            </ExploreWrapper>
        </CategoriesWrapper>
        <OptionsWrapper>
            <Rentals>
                <LabelContainer>
                    <h2>Propriedades
                        <br />
                        para alugar
                    </h2>
                    <Link href='/explorar'>
                        <Button variant='primary'>
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
                    <Link href='/explorar'>
                        <Button variant='primary'>
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
