//VARIÁVEIS 
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');

const biscuit = screen1.querySelector('img');
const btnReset = screen2.querySelector('form input')
const luck = screen2.querySelector('p')

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

//EVENTOS
biscuit.addEventListener("click", openBiscuit)
biscuit.addEventListener('click', luckEmerge)
btnReset.addEventListener('click', openNewBiscuit)
