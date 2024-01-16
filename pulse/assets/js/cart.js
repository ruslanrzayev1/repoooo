const removeFromCart = (index) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
}

let cartProdsCnt = document.querySelector('.cartProdsCnt')

const displayCart = () => {
    cartProdsCnt.innerHTML = ''
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.map((item, index) => {
        let cartProd = document.createElement('div')
        cartProd.className = 'cartProd'
        cartProd.innerHTML = `
        <div>
            <h4>${item.name}</h4>
            <p>${item.price}</p>
            </div>
          <button onclick="removeFromCart(${index})"><i class="fa-solid fa-x"></i></button>
        `
        cartProdsCnt.append(cartProd)
    })
}

window.onload = () => {
    displayCart()
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