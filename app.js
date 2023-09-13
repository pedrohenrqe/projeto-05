'use strict'

const pessoas = [

    {
        nome: 'Pedro',
        imagem: 'pedro.jpg',
        mensagem: 'Vem pro Mengão!!',
        contato: 'Liso',
        tempo: 'Há 1 hora',
        quantidade: '2'
    },

    {
        nome: 'Gustavo',
        imagem: 'gustavo.jpg',
        mensagem: 'Quer quanto?',
        contato: 'Cantor',
        tempo: 'Há 2 horas',
        quantidade: '5'
    },

    {
        nome: 'Alok',
        imagem: 'alok.png',
        mensagem: 'Rave hoje?',
        contato: 'Dj',
        tempo: 'Há 3 horas',
        quantidade: '7'
    },

    {
        nome: 'Jõao Gomes',
        imagem: 'joao.jpg',
        mensagem: 'Gostei da sanfona!',
        contato: 'Jõao Gomes Cantor',
        tempo: 'Há 4 horas',
        quantidade: '5'
    },

    {
        nome: 'Marilia Mendonça',
        imagem: 'marilia.jpg',
        mensagem: 'Vamos cantar?',
        contato: 'Cantora',
        tempo: 'Há 6 horas',
        quantidade: '1'
    },

]

const criarCard = (pessoa) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = `./img/${pessoa.imagem}`
    img.alt = pessoa.nome

    const info = document.createElement('div')
    info.classList.add('info')

    const nomeContainer = document.createElement('div')
    nomeContainer.classList.add('nome-container')

    const nome = document.createElement('h3')
    nome.classList.add('nome')
    nome.textContent = pessoa.nome

    const qntMsg = document.createElement('span')
    qntMsg.classList.add('qnt-msg')
    qntMsg.textContent = pessoa.quantidade

    const mensagem = document.createElement('p')
    mensagem.classList.add('mensagem')
    mensagem.textContent = pessoa.mensagem

    const tempo = document.createElement('p')
    tempo.classList.add('tempo')
    tempo.textContent = pessoa.tempo

    const contatoCard = document.createElement('div')
    contatoCard.classList.add('contato')

    const contato = document.createElement('p')
    contato.textContent = pessoa.contato

    card.appendChild(img)
    card.appendChild(info)
    card.appendChild(tempo)
    card.appendChild(contatoCard)
    info.appendChild(nomeContainer)
    info.appendChild(mensagem)
    nomeContainer.appendChild(nome)
    nomeContainer.appendChild(qntMsg)
    contatoCard.appendChild(contato)

    return card

}

const mostrarCards = (pessoa) => {

    const containerChat = document.getElementById('container-chat')
    const card = criarCard(pessoa)
    containerChat.appendChild(card)

} 

pessoas.forEach(mostrarCards)
