const container = document.createElement('div') //Criando a div central ou container de todos os elementos
container.className = 'container'//Adicionando nome ao container
document.body.appendChild(container)//adicionando o body ao html para ser mostrado na pagina

const header = document.createElement('header')//Criando uma header, seria um container dentro do container central
container.appendChild(header) // adicionando a header a div central / container

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
liHome.appendChild(aHome)//adicionando a tag aHome para o elemento li chamado de liHome

const liSobre = document.createElement('li')//Criando outra tag li que recebera mais uma tag a para o dropdown
listMenu.appendChild(liSobre)// adicionando a tag listMenu o elemento liSobre

const aSobre = document.createElement('a')//criando outra tag a para adicionar o elemento "Sobre" ao dropdown
aSobre.innerText = 'Sobre'//dando o nome a essa classe
liSobre.appendChild(aSobre)//adicionando a tag a 'Sobre' ao elemento li 'liSobre'

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

const bottom = document.createElement('input')//craindo o elemento botao buscar
bottom.className = 'bottom'
bottom.type = 'submit'
bottom.value = 'Buscar'
bottom.addEventListener('click', 
fetch('https://gogoanime.herokuapp.com/popular')
       .then(respostas => respostas.json())
       .then(data =>{ 
        data.filter(element => element.animeTitle
            .startsWith(input.value.toLowerCase())
            ).forEach(generateCard)
        }))
divSearch.appendChild(bottom)

const cardNovo = document.createElement('div')
cardNovo.className = 'cardNovo'
container.appendChild(cardNovo)

const mainCard = document.createElement('div')
mainCard.className = 'mainCard'
container.appendChild(mainCard)

const divCard = document.createElement('div')//card 
divCard.className = 'divCard'
mainCard.appendChild(divCard)

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

function getCard(getResposta){
        const cardResposta = document.createElement('div')
        cardResposta.className = 'cardResposta'
        mainCard.appendChild(cardResposta)
    }

function getAnime(){
    fetch('https://gogoanime.herokuapp.com/popular')
    .then(respostas => respostas.json())
    .then(getResposta => generateCard.map(el => generatedCard(el)))

    
 
}

function sobre(){

}
