import React from 'react'
import Profile from '../components/Profile'
import ProtectRoute from '../components/ProtectRoute'

function perfil() {
    return (
        <ProtectRoute>
            <Profile />
        </ProtectRoute>
    )
}

export default perfil
