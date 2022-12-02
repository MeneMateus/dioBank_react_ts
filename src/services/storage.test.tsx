import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"

const dioBank = {
    login: false,
}

describe('storage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    const getItem = jest.spyOn(Storage.prototype, 'getItem')
    it('Deve retornar o objeto no localStorage', () => {
        getAllLocalStorage()
        expect(getItem).toHaveBeenCalledWith('dioBank')
    })

    it('Deve criar o objeto no localStorage', () => {
        
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('dioBank', JSON.stringify(dioBank))
    })

    it('Deve alterar o valor do objeto no localStorage', () => {
        changeLocalStorage(dioBank)
        expect(mockSetItem).toHaveBeenCalledWith('dioBank', JSON.stringify(dioBank))    
    })
})