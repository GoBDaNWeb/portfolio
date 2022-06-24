import React, {useState} from 'react'
import AppContext from './AppContext'

const CartProvider = (props) => {

    const [isOpenModal, handleIsOpenModal] = useState(false)

    const handleModal = () => {
        handleIsOpenModal(!isOpenModal)
    }

    return (
        <AppContext.Provider value={{handleModal, isOpenModal}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default CartProvider
