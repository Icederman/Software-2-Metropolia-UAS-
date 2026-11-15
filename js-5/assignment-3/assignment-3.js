const form = document.querySelector('form')
const inp = document.getElementById('query')
const results = document.getElementById('results')

form.addEventListener('submit', async (evt) => {
    evt.preventDefault()

    const url = `https://api.tvmaze.com/search/shows?q=${inp.value}`

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    results.innerHTML = ''

    data.forEach(i => {
        const h2 = document.createElement('h2')
        h2.textContent = i.show.name

        const a = document.createElement('a')
        a.target = "_blank"
        a.href = i.show.url

        const img = document.createElement('img')
        img.src = i.show.image?.medium
        img.alt = i.show.name

        const div = document.createElement('div')
        div.innerHTML = i.show.summary

        const art = document.createElement('article')
        art.append(h2,a,img,div)

        results.appendChild(art)
    });
})
