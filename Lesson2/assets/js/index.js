
const addToLocalStorage = () => {
    const content = document.querySelector('textarea').value
    localStorage.setItem('myText', content)
}

const getFromLocalStorage = () => {
    const p = document.querySelector('p')
    p.innerHTML = localStorage.getItem('myText')
}

const clearAllLocal = () => {
    localStorage.clear()
}

const removeItem = () => {
    localStorage.removeItem('myText')
}

const myObj = {
    id: 1,
    name: 'Aytac'
}


// JSON.stringfy
// JSON.parse


localStorage.setItem('User', JSON.stringify(myObj))

const a = JSON.parse(localStorage.getItem('User'))
console.log(a);


// 
const modeBtn = document.querySelector('.mode-btn')


const enableDarkMode = () => {
    document.body.classList.add('dark')
    localStorage.setItem('DarkMode', 'enable')
}

const disableDarkMode = () => {
    document.body.classList.remove('dark')
    localStorage.setItem('DarkMode', null)
}

let darkMode = localStorage.getItem('DarkMode')

if (darkMode === 'enable') {
    enableDarkMode()
}

const changeMode = () => {

    let darkMode = localStorage.getItem('DarkMode')

    if (darkMode === 'enable') {
        disableDarkMode()
    }
    else {
        enableDarkMode()
    }
}

modeBtn.addEventListener('click', changeMode)
