
export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Hola que tal como va la cosa, dentro de esto que estamos viendo es un texto de prueba. Es un parrafo sin decir nada en concreto.',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'que tal como va la cosa Hola , estamos viendo es un texto de prueba. dentro de nada en concreto. esto que. Es un parrafo sin decir ',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Hola viendo es un texto de que tal como va la cosa, dentro   prueba. Es un parrafo sin decir nada en concreto.de esto que estamos',
            picture: null
        },
    ]
})
