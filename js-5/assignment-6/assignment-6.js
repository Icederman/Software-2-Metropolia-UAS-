const form = document.querySelector('form')
const inp = document.getElementById('query')
const div = document.getElementById('results')

form.addEventListener('submit', async (evt) => {
    evt.preventDefault()

    const url = `https://api.chucknorris.io/jokes/search?query=${inp.value}`
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)
    
    data.result.forEach(i => {
        const art = document.createElement('article')
        const p = document.createElement('p')
        p.textContent = i.value
        art.appendChild(p)
        div.appendChild(art)
    });
        
    
    
})