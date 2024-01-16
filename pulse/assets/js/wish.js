const removeFromWish = (index) => {
    let wish = JSON.parse(localStorage.getItem('wish')) || []
    wish.splice(index, 1)
    localStorage.setItem('wish', JSON.stringify(wish))
}

let wishProdsCnt = document.querySelector('.wishProdsCnt')

const displayWish = () => {
    wishProdsCnt.innerHTML = ''
    let wish = JSON.parse(localStorage.getItem('wish')) || []
    wish.map((item, index) => {
        let wishProd = document.createElement('div')
        wishProd.className = 'wishProd'
        wishProd.innerHTML = `
        <div>
            <h4>${item.name}</h4>
            <p>${item.price}</p>
            </div>
          <button onclick="removeFromWish(${index})"><i class="fa-solid fa-x"></i></button>
        `
        wishProdsCnt.append(wishProd)
    })
}

window.onload = () => {
    displayWish()
}
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