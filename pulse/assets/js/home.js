let form = document.querySelector('#form')
let emailInp = document.querySelector('.emailInp')
let nameInp = document.querySelector('.nameInp')
let messageInp = document.querySelector('.messageInp')

form.addEventListener('submit', function (event) {
    event.preventDefault()
    axios.post(`https://655c83c825b76d9884fd6f17.mockapi.io/basket`, {
        name: nameInp.value,
        email: emailInp.value,
        message: messageInp.value,
    })
})

let homeProdsCnt = document.querySelector('.homeProdsCnt')
let seeMore = document.querySelector('.seeMore')
let azSort = document.querySelector('.azSort')
let zaSort = document.querySelector('.zaSort')
let page = 1
let limit = 4

const renderProd = () => {
    axios.get(`https://655c83c825b76d9884fd6f17.mockapi.io/products?limit=${limit}&page=${page}`).then(res => {
        let db = res.data
        db.map(item => {
            let homeProd = document.createElement('div')
            let homeProdMain = document.createElement('div')
            homeProd.className = 'homeProd col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'
            homeProdMain.className = 'homeProdMain'
            homeProdMain.innerHTML = `
            <div>
            <h4>${item.name}</h4>
            <p>$${item.price}</p>
            </div>
          <button onclick="addToCart(${item.id})"><i class="fa-solid fa-cart-plus"></i></button>
          <button onclick="addToWish(${item.id})"><i class="fa-solid fa-heart"></i></button>
            `
            homeProd.appendChild(homeProdMain)
            homeProdsCnt.appendChild(homeProd)
        })
    })
    page++
}

seeMore.addEventListener('click', renderProd)

window.onload = () => {
    renderProd()
}

// const sortProdAZ = () => {
//     homeProdsCnt.innerHTML = ''
//     axios.get(`https://655c83c825b76d9884fd6f17.mockapi.io/products`).then(res => {
//         let db = res.data
//         let sortedData = db.sort((a, b) => { a.name.localCompare(b.name) })
//         sortedData.map(item => {
//             let homeProd = document.createElement('div')
//             let homeProdMain = document.createElement('div')
//             homeProd.className = 'homeProd col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'
//             homeProdMain.className = 'homeProdMain'
//             homeProdMain.innerHTML = `
//             <div>
//             <h4>${item.name}</h4>
//             <p>${item.price}</p>
//             </div>
//             <button onclick="addToCart(${item.id})"><i class="fa-solid fa-cart-plus"></i></button>
//           <button onclick="addToWish(${item.id})"><i class="fa-solid fa-heart"></i></button>
//             `
//             homeProd.append(homeProdMain)
//             homeProdsCnt.append(homeProd)
//         })
//     })
// }

// azSort.addEventListener('click', sortProdAZ)

// const sortProdZA = () => {
//     homeProdsCnt.innerHTML = ''
//     axios.get(`https://655c83c825b76d9884fd6f17.mockapi.io/products`).then(res => {
//         let db = res.data
//         let sortedData = db.sort((a, b) => { a.name.localCompare(b.name) })
//         sortedData.map(item => {
//             let homeProd = document.createElement('div')
//             let homeProdMain = document.createElement('div')
//             homeProd.className = 'homeProd col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'
//             homeProdMain.className = 'homeProdMain'
//             homeProdMain.innerHTML = `
//             <div>
//             <h4>${item.name}</h4>
//             <p>${item.price}</p>
//             </div>
//             <button onclick="addToCart(${item.id})"><i class="fa-solid fa-cart-plus"></i></button>
//             <button onclick="addToWish(${item.id})"><i class="fa-solid fa-heart"></i></button>           
//              `
//             homeProd.append(homeProdMain)
//             homeProdsCnt.append(homeProd)
//         })
//     })
// }

// zaSort.addEventListener('click', sortProdZA)

const addToCart = (id) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    console.log('tiklandi');
    cart.push(db.find(item => item.id == id))
    localStorage.setItem('cart', JSON.stringify(cart))
}

const addToWish = (id) => {
    let wish = JSON.parse(localStorage.getItem('wish')) || []
    wish.push(db.find(item => item.id == id))
    localStorage.setItem('wish', JSON.stringify(wish))
}