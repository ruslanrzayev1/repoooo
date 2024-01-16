let addForm = document.querySelector('#addForm')
let nameInpForAddPage = document.querySelector('#nameInpForAddPage')
let priceInpForAddPage = document.querySelector('#priceInpForAddPage')


addForm.addEventListener('submit', function (event) {
    event.preventDefault()
    axios.post(`https://655c83c825b76d9884fd6f17.mockapi.io/products`, {
        name: nameInpForAddPage.value,
        price: priceInpForAddPage.value,
    })
    .then(res => {
        renderAddProds()
    })
})

let searchInp = document.querySelector('#searchInp')
let searchBtn = document.querySelector('#searchBtn')
let addProducts = document.querySelector('.addProducts')

const searchByName = () => {
    addProducts.innerHTML = ''
    axios.get(`https://655c83c825b76d9884fd6f17.mockapi.io/products`).then(res => {
        let db = res.data
        let filteredData = db.filter(item => item.name.toLowerCase().startsWith(searchInp.value.toLowerCase()))
        filteredData.map(item => {
            let searchProdCnt = document.createElement('div')
            searchProdCnt.className = 'searchProdCnt'
            searchProdCnt.innerHTML = `
            <div>
            <h4>${item.name}</h4>
            <p>${item.price}</p>
            </div>
          <button onclick="removeFromAdd(${item.id})"><i class="fa-solid fa-x"></i></button>
            `
            addProducts.append(searchProdCnt)
        })
    })
}
searchBtn.addEventListener('click', searchByName)

const renderAddProds = () => {
    addProducts.innerHTML = ''
    axios.get(`https://655c83c825b76d9884fd6f17.mockapi.io/products`).then(res => {
        let db = res.data
        db.map(item => {
            let searchProdCnt = document.createElement('div')
            searchProdCnt.className = 'searchProdCnt'
            searchProdCnt.innerHTML = `
            <div>
            <h4>${item.name}</h4>
            <p>${item.price}</p>
            </div>
          <button onclick="removeFromAdd(${item.id})"><i class="fa-solid fa-x"></i></button>
            `
            addProducts.append(searchProdCnt)
        })
    })
}

window.onload = () => {
    renderAddProds()
}

const removeFromAdd = (id) => {
    axios.delete(`https://655c83c825b76d9884fd6f17.mockapi.io/products/${id}`)
    .then(res => {

        renderAddProds()
    })

}