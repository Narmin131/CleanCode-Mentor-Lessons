// fetch
// axios

const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))


const productsApi = 'https://dummyjson.com/products'


const row = document.querySelector('.row')

const getData = async () => {
    try {
        const response = await fetch(productsApi)
            .then(res => res.json())
            .then(data => {
                console.log(data.products);
                data.products.forEach(element => {
                    const div = document.createElement('div')
                    div.className = 'col-lg-3 p-3'
                    div.innerHTML = `
                    <div class="card" style=" height:100%">
                       <img src=${element.thumbnail} class="card-img-top" alt="...">
               <div class="card-body">
                   <h5 class="card-title">${element.title}</h5>
                   <p class="card-text">${element.description}</p>
              </div>
                   </div>
                    `
                    row.appendChild(div)
                });
            })
    }
    catch (err) {
        console.log(err);
    }
}

getData()