const conta = {
    id: '1',
    email: 'mene@dio.bank',
    password: '123456',
    name: 'Mene',
    balance: 200.00
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})