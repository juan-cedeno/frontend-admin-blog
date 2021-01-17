import { types } from "../types/types";

export const uiOpenModal = () => ({type : types.openModal})
export const uiCloseModal = () => ({type : types.closeModal})

export const uiSetMessage = (message) => ({
    type: types.uiSetMessage,
    payload : message
})
export const uiSetRemoveMessage = () => ({type : types.uiRemoveSetMessage})

export const uiSetLoading = () => ({type : types.uiSetLoading})
export const uiRemoveSetLoading = () => ({type : types.uiRemoveSetLoading})
