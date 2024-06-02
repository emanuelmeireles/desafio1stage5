const screen1 = document.querySelector(`.screen1`)
const screen2 = document.querySelector(`.screen2`)
const bixcoito = document.querySelector("#bixcoito")
const newMensage = document.querySelector("#OpenCookieAgain")
let phrases = [`É em meio a dificuldade que se encontra a oportunidade.`,`O êxito é ir de frustração a frustração sem perder a animação`,`Mesmo que algo pareça difícil, nunca desista antes de tentar`,`Você é o único que entende as suas dificuldades, por isso motive se a prosseguir`,`Não é uma vida ruim, é apenas um dia ruim, lembre-se disso`,`A maior prova de que você pode fazer o impossível, é superar circunstâncias difíceis`,`Que os dias bons se tornem rotina, e os ruins se tornem raros`,`É genial celebrar a vitória, contudo é mais significativo aprender com as lições da derrota`,`Qualquer dificuldade pode ser ultrapassada, já que para todo problema há uma solução`,`Já pensou que você já superou muitas dificuldades até aqui?`]
let randomPhrases = Math.floor(Math.random()*phrases.length)


bixcoito.addEventListener(`click`, clickBtn)

newMensage.addEventListener(`click`, OpenCookieAgain)

function clickBtn() {

   screen1.classList.add(`hide`)
   screen2.classList.remove(`hide`)

   screen2.querySelector('#luck').innerText = phrases[randomPhrases]
}

function OpenCookieAgain(){

    screen2.classList.add(`hide`)
    screen1.classList.remove(`hide`)

    randomPhrases = Math.floor(Math.random()*phrases.length)
    screen2.querySelector('#luck').innerText = phrases[randomPhrases]

}