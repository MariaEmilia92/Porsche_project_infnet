const catalogoModalModelos = document.getElementById('catalogoModalModelos');
var carouselBody = document.querySelector('#carousel-body');
var carouselPlaceholder = document.querySelector('#carousel-placeholder');
var carouselInner = document.querySelector('.carousel-inner');
var carouselIndicador = document.querySelector('.carousel-indicators');
const modalCatalogoCarousel = new bootstrap.Modal('#modalCatalogoCarousel', {})


var catalogosCarousel = [
    {name: "Moldado pela performance.", image: "./img/intro/porsche-intro1.webp", description: "Cayenne Turbo GT."},
    {name: "Conforto além do convencional.", image: "./img/intro/porsche-intro2.webp", description: "Taycan 4S."},
    {name: "Impulso que nos move.", image: "./img/intro/porsche-intro3.webp", description: "Panamera Turbo S E-Hybrid."},
    {name: "Paixão desportiva.", image: "./img/intro/porsche-intro4.webp", description: "911 Carrera."}
];

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        carouselPlaceholder.style.display = "none";
        carouselBody.style.display = "block";
        renderizarNaTela();
        }, 2000);
 })

const openModal = (posicao) => {
    document.querySelector('#modalCatalogoCarouselLabel').innerText = catalogosCarousel[posicao].name;
    document.querySelector('#modalCatalogoCarouselImg').src = catalogosCarousel[posicao].image;
    document.querySelector('#modalCatalogoCarouselDescription').innerHTML = catalogosCarousel[posicao].description;
    modalCatalogoCarousel.show();
}

const renderizarNaTela = () => {
    let carouselItems = "";
    let carouselButtonsIndicadores = "";
    let counter = 0;

    for(let catalogo of catalogosCarousel){
    let active = ""
    if(counter===0){
    active = "active"
    }else{
    active = ""
    }

        carouselItems += `
            <div class="carousel-item ${active}" onclick="openModal(${counter})">
                    <div class="carousel-image" style="background-image: url('${catalogo.image}')"></div>
                    <div class="carousel-caption d-none d-md-block">
                    <h5>${catalogo.name}</h5>
                    <p>${catalogo.description}</p>
                </div>
            </div>
            `;

            carouselButtonsIndicadores += `
                <button type="button" data-bs-target="#carouselCatalogo" data-bs-slide-to="${counter}" class="${active}"
                aria-current="true" aria-label="Slide ${counter}"></button>
                `
                counter++;
            }

carouselInner.innerHTML = carouselItems
carouselIndicador.innerHTML = carouselButtonsIndicadores
        }

var catalogo = [
    {
    name: "718",
    nametitulo:"Sobre o 718.", 
    sobre:"Os modelos 718 foram construídos para quem vive com esportividade total. Eles são carros esportivos de motor central que combinam o espírito esportivo do lendário Porsche 718 com o carro esportivo do futuro – e levam tudo isso para as ruas do mundo. Com um objetivo: trazer prazer ao dia a dia." , 
    image1: "./img/about--porsche/718-about3.webp",
    legenda1:"Preciso, sem firulas. Autoconfiante, e sem timidez. Baixo, largo e plano. O design dos modelos 718 é caracterizado por bordas de conotação esportiva e formas bem definidas.",
    image2: "./img/about--porsche/718-about4.webp",
    legenda2:"O que torna os modelos 718 tão especiais? O seu desempenho, sua dirigibilidade, seu design, o espaço generoso de seus 2 bagageiros. E acima de tudo: um conceito de motor central que torna tudo isso possível.", 
    },
    {
    name: "911",
    nametitulo:"Sobre o 911.", 
    sobre:"Ícones entre si: a lendária silhueta do 911 com o caráter purista do Chronograph I. O modelo de aniversário, limitado a 750 peças, combina o design atemporal de um carro esportivo com elementos fortes de um relógio icônico, escrevendo assim a história de sucesso do 911 e de uma fábrica de relógios de caráter único." , 
    image1: "./img/about--porsche/porsche-911.webp",
    legenda1:"A silhueta do 911 Carrera é inconfundível, graças ao icônico Flyline com sua linha de teto levemente inclinada, que molda o DNA da marca Porsche desde 1963 – assim como o excepcional desempenho do carro esportivo.",
    image2: "./img/about--porsche/porsche-911_2.webp",
    legenda2:"Basicamente, todo 911 tem o mesmo objetivo: ser dirigido da forma mais esportiva possível. É por isso que o motor boxer biturbo, a transmissão, a suspensão, os freios e todos os sistemas de controle são projetados para algo em particular: o desempenho máximo.", 
    },
    {
    name: "Taycan",
    nametitulo:"Sobre o Taycan.", 
    sobre:"Purístico, expressivo, atemporal: forças expressivas que literalmente permeiam o Taycan – adicionalmente enfatizadas pela flyline dinâmica e plana. Mesmo no que diz respeito ao espaço livre, ele não fica para trás, mas oferece conforto exclusivo para 4 pessoas além do porta-malas traseiro e dianteiro." , 
    image1: "./img/about--porsche/porsche-taycan.webp",
    legenda1:"O Taycan Cross Turismo preza afirmações autoconfiantes, evidenciadas pelos acentos distintos do pacote de design off-road e a impressionante traseira no Cross Turismo Design – para um porta-malas ampliado e mais espaço na parte traseira.",
    image2: "./img/about--porsche/porsche-taycan_2.webp",
    legenda2:"Totalmente elétrico, o novo Taycan GTS agrega agora emoções ainda mais intensas à experiência de direção Porsche. É quase impossível obter mais fascinação com 3 letras.", 
    },  
];


//console.log(catalogo)

const fillContentModel = (posicao) => {
    document.querySelector('#catalogoModalLabel').innerText = catalogo[posicao].name;
    document.querySelector('#catalogoModalTitle').innerText = catalogo[posicao].nametitulo;
    document.querySelector('#catalogoModalSobre').innerHTML = catalogo[posicao].sobre;
    document.querySelector('#catalogoModalImg1').src = catalogo[posicao].image1;
    document.querySelector('#catalogoModalDescription').innerHTML = catalogo[posicao].legenda1;
    document.querySelector('#catalogoModalImg2').src = catalogo[posicao].image2;
    document.querySelector('#catalogoModalDescription2').innerHTML = catalogo[posicao].legenda2;
}

