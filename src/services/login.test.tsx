import { login } from "./login"


describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'mene@dio.bank'

    it('Deve exibir um alert com boas vindas caso email seja valido',async () => {
        await login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`)
    })

    it('Não deve exibir a mensagem boa vinda sem email', async() => {
        await login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo!')
    })

    it('Deve exibir um erro caso email seja inválido',async() => {
        await login('email@invalido.com')
        expect(mockAlert).toHaveBeenCalledWith('Email inválido!')
    })
})