const container = document.createElement('div') //Criando a div central ou container de todos os elementos
container.className = 'container'//Adicionando nome ao container
document.body.appendChild(container)//adicionando o body ao html para ser mostrado na pagina

const header = document.createElement('header')//Criando uma header, seria um container dentro do container central
container.appendChild(header) // adicionando a header a div central / container

// const box = document.createElement('input')  //Funçao darkMode
// box.type = 'checkbox'
// //box.inner = 'DarkMode'
// box.addEventListener('change', () => {
//     document.querySelector('html').classList.toggle('dark')
// })
// header.appendChild(box)

const divTitle = document.createElement('div')//Criando um elemento div para logo do site (divtitle = titulo)
divTitle.className = 'divTitle'
header.appendChild(divTitle)// adicionando o titulo/logo a header "corpo"

const logoText = document.createElement('h1')//criando um elemento h1 que seria o nome da logo
logoText.className = 'logoText'//Adicionando nome ao logotext, para usar no css
logoText.innerText = 'ReiAnimes'//InnerText serve para escrever o que deseja aparecer no titulo do site
divTitle.appendChild(logoText)//add logo para a divtitle(titulo)

const divMenu = document.createElement('div')//Criando um elemento div para o menu onde estaram os botoes inicio, sobre, categorias
divMenu.className = 'divMenu'//Nome da div
header.appendChild(divMenu)//Adicionando divMenu ao header

const navbar = document.createElement('nav')//Criando um elemento nav(para usar os links de acesso a outras paginas)
header.appendChild(navbar)//Adicionando navbar ao header

const listMenu = document.createElement('ul')//Necessario a criação do elemento ul para utilizar a função nav - dropdown
listMenu.className = 'listMenu'// nome criado
navbar.appendChild(listMenu)//Adicionando listMenu ao navbar

const liHome = document.createElement('li')// criando a tag li para alocar as categorias
listMenu.appendChild(liHome)//

const aHome = document.createElement('a')//essa tag a serve para adicionar o elemento "inicio" ao dropdown
aHome.innerText = 'Inicio'//
aHome.addEventListener('click', () => {
    let divCard = document.querySelector('.divCard')
    let divSobre = document.querySelector('.divSobre')
    if (divCard.style.display == 'grid'){
        divSobre.style.display = 'none'
    } else {
        divCard.style.display = 'grid'
        divSobre.style.display = 'none'
    }

})
aHome.className = 'inicio'
liHome.appendChild(aHome)//adicionando a tag aHome para o elemento li chamado de liHome

const liSobre = document.createElement('li')//Criando outra tag li que recebera mais uma tag a para o dropdown
listMenu.appendChild(liSobre)// adicionando a tag listMenu o elemento liSobre

const aSobre = document.createElement('a')//criando outra tag a para adicionar o elemento "Sobre" ao dropdown
aSobre.innerText = 'Sobre'//dando o nome a essa classe
aSobre.className = 'inicio'
aSobre.addEventListener('click', () => {// PAra trocar a tela pra Sobre
    let divCard = document.querySelector('.divCard')
    let divSobre = document.querySelector('.divSobre')
    divCard.style.display = 'none'
    if (divSobre.style.display == 'flex'){
        divCard.style.display = 'none'
    } else {
        divSobre.style.display = 'flex'
        divCard.style.display = 'none'
    }

})
liSobre.appendChild(aSobre)//adicionando a tag a 'Sobre' ao elemento li 'liSobre'

//*** Criando um link para Assitir naruto***/
const liNaruto = document.createElement('li')//link = (https://gogoanime.tel///category/naruto-dub)
listMenu.appendChild(liNaruto)

const naruto = document.createElement('a')
naruto.innerText = 'Assista Naruto'
naruto.className = 'inicio'  // link para os videos ('https://gogoanime.tel///category/naruto-dub)
listMenu.appendChild(naruto) //link API para assistir naruto(https://gogoanime.herokuapp.com/search?keyw=naruto)

const linkNaruto = 'https://gogoanime.tel///category/naruto-dub'
// * Função que gera o link para assistir videos do naruto *
function openInNewTab(url){
    const win = window.open(linkNaruto)
    win.focus()
}
    naruto.addEventListener('click', () => {
    openInNewTab(linkNaruto)
})

const liCategory = document.createElement('li')//Criando outra constante com a tag 'li' para a categoria que utilizara o dropdown
liCategory.className = 'content-dropdown'//Nome
liCategory.innerHTML = 'Categoria'//texto que aparecera
liCategory.addEventListener('click', showCategory)// Adicionando um tipo de evento com click para mostrar a categoria 
listMenu.appendChild(liCategory)//adicionando a liCategory dentro do li'listMenu'

const divCategory = document.createElement('div')//criando o elemento div para a divCategory= categoria
divCategory.className = 'list-itens'//dando nome a essa classe
liCategory.appendChild(divCategory)//adicinando a div'divCategory' a tag li 'liCategory'

const ancoryRomance = document.createElement('a')//criando um elemento tag a para criar o ancoryRomance
ancoryRomance.className = 'category'//dando o nome
ancoryRomance.innerHTML = 'Romance'//texto que será mostrado no html
divCategory.appendChild(ancoryRomance)//adicionando a tag a ancoryRomance a div 'divCategory'

const ancoryAcao = document.createElement('a')//criando um elemento tag a para criar o ancoryAcao
ancoryAcao.className = 'category'//dando nome
ancoryAcao.innerHTML = 'Ação'//texto que será mostrado no html
divCategory.appendChild(ancoryAcao)

const ancoryAventura = document.createElement('a')//criando um elemento tag a para criar o ancoryAventura
ancoryAventura.className = 'category'//dando nome
ancoryAventura.innerHTML = 'Aventura'//texto que será mostrado no html
divCategory.appendChild(ancoryAventura)//adicionando a tag a ancoryAventura a div 'divCategory'

const ancoryTerror = document.createElement('a')//criando um elemento tag a para criar o ancoryTerror
ancoryTerror.className = 'category'//dando nome
ancoryTerror.innerHTML = 'Terror'//texto que será mostrado no html
divCategory.appendChild(ancoryTerror)

function showCategory() {      // Criando função que levará o click do mouse a aparecer as subcategorias dentro da category
    let click = document.querySelector('.list-itens')//
    if (click.style.display==='none'){//comparação'se o click-style for do mesmo valor que nada"none" entao'
        click.style.display = 'block'//se a condição acima estiver correta entao click.style.display recebe o list-itens"As categorias"
    }
    else {//Comparação"Se não"
        click.style.display = 'none'//O click.style.display não mostra nada
    }
}
//Criando uma div para adicionar o campo de busca e o botao de busca
const divSearch = document.createElement('div')
divSearch.className = 'divSearch'
header.appendChild(divSearch)

const input = document.createElement('input')//criando o elemento campo de busca
input.type = 'text'
input.id = 'search'
divSearch.appendChild(input)


const bottom = document.createElement('button')//craindo o elemento botao buscar
bottom.className = 'bottom'
bottom.innerText = 'Buscar'
bottom.addEventListener('click', () => {
    let divCard1 = document.querySelector('.divCard')
    let divSobre = document.querySelector('.divSobre')
    let divAnimeFound1 = document.querySelector('.divAnimeFound')
    let inputSearch = document.querySelector('#search')
    divCard1.style.display = "none"
    divSobre1.style.display = 'none'
    divAnimeFound1.style.display = 'block'
    fetch('https://gogoanime.herokuapp.com/popular')
    .then(respostas => respostas.json())
    .then(dados => {
        if (inputSearch.value !== ''){
            dados.filter(el => el.animeTitle.startsWith(inputSearch.value.toLowerCase()))
            .forEach(console.log(getAnimeFound))
        } 
    })   
}) 
divSearch.appendChild(bottom)

const box = document.createElement('input')  //Funçao darkMode
box.className = 'box'
box.type = 'checkbox'
box.id = 'darkmode'
box.addEventListener('change', () => {
    document.querySelector('html').classList.toggle('dark')
})
header.appendChild(box)

const darkCheckbox = document.createElement('label')
darkCheckbox.innerText = 'DarkMode'
darkmode.appendChild(darkCheckbox)

const mainCard = document.createElement('div')
mainCard.className = 'mainCard'
container.appendChild(mainCard)

const divCard = document.createElement('div')//card 
divCard.className = 'divCard'
mainCard.appendChild(divCard)

const divSobre = document.createElement('div')
divSobre.style.display = 'none'
divSobre.className = 'divSobre'
mainCard.appendChild(divSobre)

function sobre(){
    const headerSobre = document.createElement('div')
    headerSobre.className = 'headerSobre'
    divSobre.appendChild(headerSobre)

    const sobreTitle = document.createElement('h1')
    sobreTitle.innerText = 'oh oakhsov '
    headerSobre.appendChild(sobreTitle)

    const sobreNos = document.createElement('div')
    sobreNos.className = 'sobreNos'
    divSobre.appendChild(sobreNos)

    const titleSobre = document.createElement('h1')
    titleSobre.innerText = 'Sobre Nos'
    sobreNos.appendChild(titleSobre)

}
const divAnimeFound = document.createElement('div')
divAnimeFound.style.display = 'none'
divAnimeFound.className = 'divAnimeFound'
mainCard.appendChild(divAnimeFound)

const cardNovo = document.createElement('div')
cardNovo.className = 'cardNovo'
container.appendChild(cardNovo)

// const mainCard = document.createElement('div')
// mainCard.className = 'mainCard'
// container.appendChild(mainCard)

// const divCard = document.createElement('div')//card 
// divCard.className = 'divCard'
// mainCard.appendChild(divCard)

//Função pegar a url do anime para converter em json e 
fetch('https://gogoanime.herokuapp.com/popular')// pega a url do anime
  .then(respostas => respostas.json())          //transforma em json
  .then(data => {console.log(data)              //variavel data recebe o json
    data.map(el => generateCard(el))})         //percorre o array jogano para dentro do elemento generatCard


function generateCard(data){
    const cardItem = document.createElement('div')
    cardItem.className = 'cardItem'
    divCard.appendChild(cardItem)

   const imgNaruto = document.createElement('img')
   imgNaruto.className = 'img'
   imgNaruto.src = data.animeImg 
   cardItem.appendChild(imgNaruto)

   const cardTitle = document.createElement('h3')//titulo do anime
   cardTitle.className = 'cardTitle'
   cardTitle.innerHTML = data.animeTitle//puxando dados da data
   cardItem.appendChild(cardTitle)

   const buttonCard = document.createElement('button')
   buttonCard.className = 'buttonCard'
   cardItem.appendChild(buttonCard)

   const linkVideo = document.createElement('a')//tag para alocar os links de video
   linkVideo.href = data.animeUrl //serve para colocar um link 
   linkVideo.innerHTML = 'Assistir'
   buttonCard.appendChild(linkVideo)
}
//criar uma funçao para gerar um card, depois uma div para mostrar esse card

// const divSobre = document.createElement('div')
// divSobre.style.display = 'none'
// divSobre.className = 'divSobre'
// mainCard.appendChild(divSobre)

// function sobre(){
//     const sobreTitle = document.createElement('h1')
//     sobreTitle.innerHTML = 'oh oakhsov '
//     divSobre.appendChild(sobreTitle)

// }


// const divAnimeFound = document.createElement('div')
// divAnimeFound.style.display = 'none'
// divAnimeFound.className = 'divAnimeFound'
// mainCard.appendChild(divAnimeFound)

// function getCard(getResposta){
//         const cardResposta = document.createElement('div')
//         cardResposta.className = 'cardResposta'
//         mainCard.appendChild(cardResposta)
//     }

function getAnime(){
    // // let divCard1 = document.querySelector('.divCard')
    // // let divSobre1 = document.querySelector('.divSobre')
    // // let divAnimeFound1 = document.querySelector('.divAnimeFound')
    // let inputSearch = document.querySelector('#search')
    // // divCard1.style.display = "none"
    // // divSobre1.style.display = 'none'
    // // divAnimeFound1.style.display = 'block'
    // divCard.style.display = 'none'
    // divSobre.style.display = 'none'
    // divAnimeFound.style.display = 'block'
    // fetch('https://gogoanime.herokuapp.com/popular')
    // .then(respostas => respostas.json())
    // .then(dados => {
    //     if (inputSearch.value !== ''){
    //         dados.filter(el => el.animeTitle.startsWith(inputSearch.value.toLowerCase()))
    //         .forEach(e => getAnimeFound(e))
    //     } 
    // })   
}

function getAnimeFound(data){
    fetch(data)
    .then((response) => response.json())
    .then((data) => {
        let divAnimeFound = document.querySelector('.divAnimeFound')
        const cardFound = document.createElement('div')
        cardFound.className = 'cardFound'
        divAnimeFound.appendChild(cardFound)
    
       const imgFound = document.createElement('img')
       imgFound.className = 'img'
       imgFound.src = data.animeImg 
       cardFound.appendChild(imgFound)
    
       const CardTitleFound = document.createElement('h3')//titulo do anime
       CardTitleFound.className = 'CardTitleFound'
       CardTitleFound.innerHTML = data.animeTitle//puxando dados da data
       cardFound.appendChild(CardTitleFound)
    
       const buttonFound = document.createElement('button')
       buttonFound.className = 'buttonFound'
       cardFound.appendChild(buttonFound)
    
       const linkFound = document.createElement('a')//tag para alocar os links de video
       linkFound.href = data.animeUrl //serve para colocar um link 
       linkFound.innerHTML = 'Assistir'
       buttonFound.appendChild(linkFound)
    })
}