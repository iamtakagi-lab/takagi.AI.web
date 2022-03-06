const fetchSentence = async () => await fetch(`https://ai.iamtakagi.net/api/make_sentence`).then((res) => res.json())

window.addEventListener('load', async (event) => {
    const { sentence } = await fetchSentence()
    document.getElementById("says").innerText = sentence  
})

document.getElementById('refresh').addEventListener('click', async () => {
    const { sentence } = await fetchSentence()
    document.getElementById("says").innerText = sentence  
})