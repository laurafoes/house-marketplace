import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import {
    collection,
    getDocs,
    query,
    where,
    orderBy,
    limit,
    startAfter,
    serverTimestamp,
    DocumentData
} from 'firebase/firestore'
import { db } from '../../../firebase.config'
import { toast } from 'react-toastify'
import { CategoriesContainer, CategoriesWrapper, ListingsWrapper } from '../../../components/Categories/CategoriesElements'
import { Loader } from '../../../components/Spinner/SpinnerElements'
import Listing from '../../../components/Listing'

function Categoria() {
    const router = useRouter()

        interface Propriedades {
            id: string,
            data: DocumentData,
        }

    const [ propriedades, setPropriedades ] = useState<Propriedades[]>([])
    const [ carregando, setCarregando ] = useState(true)

    const tipoCategoria = router.query.tipoCategoria

    console.log(tipoCategoria)
    useEffect(() => {
        const obtemPropriedades = async () => {
            try {
                const refPropriedades = collection(db, 'listings')

                if(tipoCategoria){
                    const q = query(
                        refPropriedades,
                        where('type', '==', tipoCategoria),
                        orderBy('timestamp', 'desc'),
                        limit(10)
                    )

                    const querySnap = await getDocs(q)
                    let propriedades: Propriedades[] = []


                    querySnap.forEach((doc) => {
                        return propriedades.push({
                            id: doc.id,
                            data: doc.data()
                        })
                    })

                    setPropriedades(propriedades)
                    setCarregando(false)
                }

            } catch(error) {
                toast.error('Não foi possível carregar as propriedades.')
            }
        }
        obtemPropriedades()
    }, [])

    console.log(propriedades)
  return (
    <>
        <CategoriesContainer>
            <CategoriesWrapper>
                <h2>Propriedades: {tipoCategoria}</h2>
            </CategoriesWrapper>
            <ListingsWrapper>

            { carregando ? <Loader /> : propriedades.length > 0 ?
            <main>
                <ul>
                    { propriedades.map((propriedade) => (
                       <Listing
                        propriedade={propriedade.data}
                        id={propriedade.id}
                        key={propriedade.id}
                       />
                    ))}
                </ul>
            </main> : <p>Não temos propriedades de {tipoCategoria} disponíveis no momento</p>}
            </ListingsWrapper>


        </CategoriesContainer>

    </>


    // <div>
    //     a categoria escolhida é:
    //   { tipoCategoria }
    // </div>
  )
}

export default Categoria
