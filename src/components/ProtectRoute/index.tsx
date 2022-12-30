import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { app } from "../../firebase.config";
import Spinner from "../Spinner";

interface ProtectRoute {
    children: React.ReactNode
}

const ProtectRoute = ({ children }: ProtectRoute) => {
    const [ autenticado, setAutenticado ] = useState(false)
    const [ carregando, setCarregando ] = useState(true)

    const auth = getAuth(app)
    const route = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setAutenticado(true)
                setCarregando(false)
            } else {
                route.push('/signin')
            }
        })
    })

    if (!autenticado && carregando) {
        return(
            <> <Spinner /> </>
        )
    } return (
        <> { children } </>
    )
  };

export default ProtectRoute
