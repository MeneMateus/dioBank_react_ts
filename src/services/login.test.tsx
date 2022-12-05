import { login } from "./login"

// const mockSetIsLoggedIn = jest.fn()
// const mockNavigate = jest.fn()

// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useContext: () => ({
//         setIsLoggedIn: mockSetIsLoggedIn
//     })
// }))

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom') as any,
//     useNavigate: () => mockNavigate
// }))

describe('login', () => {

    const mockEmail = 'mene@dio.bank'
    const mockPassword = '123456'

    it('Deve exibir um alert com boas vindas caso email seja valido',async () => {
        const response = await login(mockEmail,mockPassword)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso email seja inválido',async() => {
        const response = await login('email@invalido.com','1212121')
        expect(response).toBeFalsy()
    })
})