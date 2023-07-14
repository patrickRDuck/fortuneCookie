//VARIÁVEIS 
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');

const biscuit = screen1.querySelector('img');
const btnReset = screen2.querySelector('form input')
const luck = screen2.querySelector('p')

const fortune = [
    "O aprendizado é como o horizonte: não há limites.",
    "Não há que ser forte, há que ser flexível.",
    "Limitações são fronteiras criadas apenas pela nossa mente.",
    "O cão não ladra por valentia e sim por medo.",
    "Procure acender uma vela em vez de amaldiçoar a escuridão.",
    "A palavra é prata, o silêncio é ouro.",
    "Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos.",
    "Um pouco de perfume sempre fica nas mãos de quem oferece flores.",
    "O homem só envelhece quando os lamentos substituem seus sonhos.",
    "A persistência realiza o impossível.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  ]

//FUNÇÕES 
function openBiscuit () {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function luckEmerge () {
    if (screen1.classList.contains('hide')) {
        luck.style.animation = 'emerge 1s 0.05s backwards'
        console.log(luck.style)
    }
}

function openNewBiscuit () {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')

    luck.style.animation = ' '
}

function pickFortune() {
    let allFortunes = fortune.length
    let randomNumber = Math.floor(Math.random() * allFortunes)  
    screen2.querySelector("p").innerText = `${fortune[randomNumber]}`
}

//EVENTOS
biscuit.addEventListener("click", openBiscuit)
biscuit.addEventListener('click', luckEmerge)
biscuit.addEventListener('click', pickFortune)
btnReset.addEventListener('click', openNewBiscuit)
