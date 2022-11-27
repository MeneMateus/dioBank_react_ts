const conta = {
    email: 'mene@dio.bank',
    password: '123456',
    name: 'Mene'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})