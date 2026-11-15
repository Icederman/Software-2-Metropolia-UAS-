const form = document.querySelector('form')
const inp = document.getElementById('query')

form.addEventListener('submit', async (evt) => {
    evt.preventDefault()

    const url = `https://api.tvmaze.com/search/shows?q=${inp.value}`

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
})
