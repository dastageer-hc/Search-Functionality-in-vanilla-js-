let api = 'https://jsonplaceholder.typicode.com/users'
let cardDom = document.querySelector('[data-user-template')
const userCardsContainer = document.querySelector('.user-cards')
let users = []
const searchInput = document.querySelector('#search')
searchInput.addEventListener('input', (input)=>{
    let inp = input.target.value.toLowerCase();
    
    users.map((u)=>{
        const isVisible = u?.name?.toLowerCase().includes(inp) || u?.email?.toLowerCase().includes(inp)  
        u.card.classList.toggle('hide', !isVisible)
    })  
    
})
fetch(api).then((res)=>res.json()).then((res)=>{

    users =  res.map((r)=>{
        let card = cardDom.content.cloneNode(true).children[0]
        let header = card.querySelector('.header')
        let body = card.querySelector('.body') 
        header.textContent = r.name
        body.textContent = r.email
        userCardsContainer.append(card)
        return {
            user: r.name, email: r.email, card: card
        }

    })

})