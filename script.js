'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
}

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

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

//Interação com o usuario

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value="")
}

const salveClient = () => {
    if (isValidFields()) {
        const client = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value,
        }
        createClient(client) 
        closeModal()
    }
}

//Eventos

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', salveClient)

     