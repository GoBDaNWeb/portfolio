import React, {useState} from 'react'
import AppContext from './AppContext'

const AppProvider = (props) => {

    const [isOpenContactsModal, handleIsOpenContactsModal] = useState(false)
    const [isOpenMobileMenu, handleIsOpenMobileMenu] = useState(false)

    const handleContactsModal = () => {
        handleIsOpenContactsModal(!isOpenContactsModal)
    }
    const handleMobileMenu = () => {
        handleIsOpenMobileMenu(!isOpenMobileMenu)
    }

    return (
        <AppContext.Provider value={{handleContactsModal, handleMobileMenu, isOpenContactsModal, isOpenMobileMenu}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider
