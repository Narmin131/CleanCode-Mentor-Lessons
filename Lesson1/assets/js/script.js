const arr = [5, 7, 9, 11]

// Map metodu
const newArr = arr.map((massivdekiElement) => {
    return massivdekiElement * 3
})

console.log(newArr);


// Length metodu
console.log(arr.length);



// ForEach metodu
const arr1 = arr.forEach(b => console.log(b))
console.log(arr1);



// Find metodu
const arr2 = arr.find(num => num > 8)
console.log(arr2);

// Filter
const filteredArray = arr.filter((num) => {
    return num > 8
})

console.log(filteredArray);


function myFunc() {
    // code
}

const newFunc = () => {
    // 
}

(function () {

})()

const p = document.querySelector('p')


const a = () => {
    p.innerHTML = 'Sagol'
}



const btnMenu = document.querySelector('.btn-menu')

const menu = document.querySelector('.menu')

const ToggleMenu = () => {
    if (menu.style.transform === 'translateX(100%)') {
        menu.style.transform = 'translateX(0)'
    }
    else {
        menu.style.transform = 'translateX(100%)'
    }
}

btnMenu.addEventListener('click', ToggleMenu)


const CloseMenu = () => {
    menu.style.transform = 'translateX(100%)'
}

const modeBtn = document.querySelector('.mode-btn')

const changeMode = () => {
    if (document.body.className === 'light') {
        document.body.className = 'dark'
    }
    else {
        document.body.className = 'light'
    }
}

modeBtn.addEventListener('click', changeMode)
