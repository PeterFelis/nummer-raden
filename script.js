'use strict';

const check = document.querySelector('.check')
const message = document.querySelector('.message')
const invoerWaarde = document.querySelector('.guess')
const vraagteken = document.querySelector('.number')
const scoreWeergave = document.querySelector('.score')

let teRadenGetal
let score
let laatsteGetal = -1

const kiesNieuwGetal = () => Math.round(Math.random() * 19)


const startSpel = () => {
    teRadenGetal = kiesNieuwGetal()
    score = 20
    vraagteken.textContent = teRadenGetal

    check.addEventListener('click', function () {

        if (invoerWaarde.value == "") {
            message.textContent = "vul wel iets in"
            return
        }

        if (Number(invoerWaarde.value) == laatsteGetal) {
            message.textContent = "Wel wat anders invullen!"
            return
        }

        laatsteGetal = Number(invoerWaarde.value)
        console.log(invoerWaarde.value)

        if (teRadenGetal == Number(invoerWaarde.value)) {
            message.textContent = 'joho bier'
            return
        }
        else {
            message.textContent = Number(invoerWaarde.value) < teRadenGetal ? 'te laag' : 'te hoog'
            scoreWeergave.textContent = --score
        }
    })
}


startSpel()

