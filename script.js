'use strict';

const check = document.querySelector('.check')
const message = document.querySelector('.message')
const invoerWaarde = document.querySelector('.guess')
const vraagteken = document.querySelector('.number')
const scoreWeergave = document.querySelector('.score')
const HighScoreWeergave = document.querySelector('.highscore')
const again = document.querySelector('.again')

let teRadenGetal
let score
let laatsteGetal = -1
let highScore = 0
let defaultMessage = message.textContent
let defaultTeken = vraagteken.textContent

invoerWaarde.addEventListener('click', function (e) {
    console.log(e)
    if (e.clientX < 260) invoerWaarde.value = ''
})

const startSpel = () => {
    let kiesNieuwGetal = () => Math.round(Math.random() * 19)
    teRadenGetal = kiesNieuwGetal()
    score = 20
    scoreWeergave.textContent = score
    check.addEventListener('click', invoerChecken)
    again.removeEventListener('click', playItAgainSam)
    invoerWaarde.value = ''
    message.textContent = defaultMessage
    vraagteken.classList.remove('AchtergrondGroen')
    vraagteken.textContent = defaultTeken
}

const invoerChecken = () => {
    if (invoerWaarde.value == "") {
        message.textContent = "vul wel iets (zinnigs) in"
        return
    }

    if (Number(invoerWaarde.value) == laatsteGetal) {
        message.textContent = "Wel wat anders invullen!"
        return
    }

    if (Number(invoerWaarde.value < 1 || Number(invoerWaarde.value) > 20)) {
        message.textContent = "Tussen de 1 en 20 pls.."
        return
    }
    laatsteGetal = Number(invoerWaarde.value)

    if (teRadenGetal == Number(invoerWaarde.value)) {
        message.textContent = 'joho bier'
        vraagteken.textContent = teRadenGetal
        vraagteken.classList.add('AchtergrondGroen')
        check.removeEventListener('click', invoerChecken)
        if (highScore < score) {
            highScore = score;
            HighScoreWeergave.textContent = highScore
        }
        again.addEventListener('click', playItAgainSam)
        return
    }
    else {
        message.textContent = Number(invoerWaarde.value) < teRadenGetal ? 'te laag' : 'te hoog'
        scoreWeergave.textContent = --score
    }
}

const playItAgainSam = () => {
    startSpel()
}

startSpel()



