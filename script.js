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

const divDesc = document.createElement('div')
divDesc.className = 'divDesc'
container.appendChild(divDesc)

const descricao = document.createElement('h3')
descricao.innerHTML = 'Assista os Animes mais populares da atualidade'
divDesc.appendChild(descricao)

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
    let divAnimeFound = document.querySelector('.divAnimeFound')
    let divCard = document.querySelector('.divCard')
    let divSobre = document.querySelector('.divSobre')
    divCard.style.display = 'none'
    divSobre.innerHTML = ''
    if (divSobre.style.display == 'flex'){
        divCard.style.display = 'none'
        divAnimeFound.style.display = 'none'
    } else {
        divSobre.style.display = 'flex'
        divCard.style.display = 'none'
        divAnimeFound.style.display = 'none'
        sobre()
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
    let divSobre1 = document.querySelector('.divSobre')
    let divAnimeFound1 = document.querySelector('.divAnimeFound')
    let inputSearch = document.querySelector('#search')
    divCard1.style.display = "none"
    divSobre1.style.display = 'none'
    divAnimeFound1.style.display = 'block'
    fetch('https://gogoanime.herokuapp.com/popular')
    .then(respostas => respostas.json())
    .then(dados => {
            console.log(inputSearch)
            dados.filter((el) => el.animeTitle.toLowerCase().startsWith(inputSearch.value.toLowerCase()))
            .forEach(getAnimeFound)
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
darkCheckbox.innerText = 'LightMode'
header.appendChild(darkCheckbox)

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
    const divDescSobre = document.createElement('div')//Div Mae do sobre
    divDescSobre.className = 'divDescSobre'
    divSobre.appendChild(divDescSobre)

    const sobreNos = document.createElement('div')//Div para receber Img imagem e conteudo
    sobreNos.className = 'sobreNos'
    divSobre.appendChild(sobreNos)

    const sobreNosImg = document.createElement('div')//Div para a imagem do sobre nos
    sobreNosImg.className = 'sobreNosImg'
    sobreNos.appendChild(sobreNosImg)

    const sobreImg = document.createElement('img')//imagem sobre nos
    sobreImg.className = 'sobreImg'
    sobreImg.setAttribute ('src', 'https://cdn.falauniversidades.com.br/wp-content/uploads/2019/10/anime11-768x384.jpg')
    sobreNosImg.appendChild(sobreImg)

    const sobreNosDiv = document.createElement('div')//div para receber os dois conteudo sobre nos
    sobreNosDiv.className = 'sobreNosDiv'
    sobreNos.appendChild(sobreNosDiv)

    const headerSobre = document.createElement('div')//Div para header do sobre
    headerSobre.className = 'headerSobre'
    sobreNosDiv.appendChild(headerSobre)

    const sobreTitle = document.createElement('h1')//header sobre
    sobreTitle.className = 'sobreTitle'
    sobreTitle.innerText = 'SOBRE'
    headerSobre.appendChild(sobreTitle)

    const textSobreDiv = document.createElement('div')//Div para receber o conteudo sobre nos
    textSobreDiv.className = 'textSobreDiv'
    sobreNosDiv.appendChild(textSobreDiv)

    const titleSobre = document.createElement('p')//Conteudo sobre nos
    titleSobre.className = 'titleSobre'
    titleSobre.innerHTML = 'Este site é destinado a cultura de animes, pessoas que gostem de fortes emoções, romances, lutas e fantasias.<br>O anime, como qualquer outra forma de arte, pode influenciar o mundo interior e a mente de todas as pessoas, em especial dos mais novos. Assim como filmes, desenhos animados, livros, o anime evoca emoções, faz você ter empatia, provoca uma resposta em quem o assiste.<br>Visando a paixão daqueles que gostem desse tipo de cultura, o ReiAnimes foi criado para que usuários possam assistir os melhores e mais populares animes da atualidade.<br>Conteúdo dos mais populares animes divido em categorias, com muitas opções de procura e uma guia especial para um anime dos mais famosos da década.<br>'
    textSobreDiv.appendChild(titleSobre)

    const divTitleSobre = document.createElement('div')//Div para conteudo All Rights Reserved
    divTitleSobre.className = 'divTitleSobre'
    sobreNosDiv.appendChild(divTitleSobre)

    const copyright =document.createElement('p')//conteudo All Rights Reserved
    copyright.innerHTML = 'Copyright by Refsnes Data. All Rights Reserved.<br> ReiAnimes is Powered by'
    divTitleSobre.appendChild(copyright)

    const divSocial = document.createElement('div')//div para links de redes sociais
    divSocial.className = 'divSocial'
    divSobre.appendChild(divSocial)
}

const divAnimeFound = document.createElement('div')
divAnimeFound.style.display = 'none'
divAnimeFound.className = 'divAnimeFound'
mainCard.appendChild(divAnimeFound)

const cardNovo = document.createElement('div')
cardNovo.className = 'cardNovo'
container.appendChild(cardNovo)

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

// Criando o Botão que leva ao topo do site
const divBtn = document.createElement('div')//Criando um elemento div para colocar o botao topo
divBtn.className = 'divBtn'
container.appendChild(divBtn)// adicionando a div do botao ao container

var btn = document.createElement('input')
btn.className = 'btnTopo'
btn.type = 'submit'
btn.value = 'TOPO'
divBtn.appendChild(btn)

btn.addEventListener('click', function(){//Aqui a função que vai pegar o botao e subir ao topo
    window.scrollTo(0,0)
})

function getAnimeFound(data){
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
}