'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: "Vadão da esfiha",
    email:"ronaldo@gmail.com",
    celular:"(19) 000000000",
    cidade:"Batatais",

}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

//CRUD - create read updade delete

//CRUD - DELETE
const deleteClient= (index) =>{
    const dbClient = readClient()
    dbClient.splice(index,1)
    setLocalStorage(dbClient)
}

//CRUD - UPDATE
const updadeClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client 
    setLocalStorage(dbClient)
}

//CRUD - READ
const readClient = () => getLocalStorage( )

//CRUD - CREATE
const createClient = (client) => {
    const dbClient = getLocalStorage()     
    dbClient.push (client)
    setLocalStorage(dbClient)
}

//Eventos

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

    