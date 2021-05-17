async function getData (value) {
	let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + value, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "4c7077d7edmshf757669fcedadc6p15d227jsn86f56621dd65",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
})

	let data = await response.json()
	let realData = data.data
	let totalResult = data.total
	totalS.textContent = data.total
	// console.log(data)

	realData.map( (element) => {
		let songTitle = element.title 
		let songLink = element.link
		let songSingerImage = element.artist.picture_big
		let songCoverPhoto = element.album.cover_big
		let song = element.preview

		let li = document.createElement('li')
		let h3 = document.createElement('h3')
		let a = document.createElement('a')
		let img = document.createElement('img')
		let audio = document.createElement('audio')
		let source = document.createElement('source')
		let div = document.createElement('div')

		h3.textContent = songTitle
		a.textContent = 'FULL SONG'
		a.setAttribute('href', songLink)

		img.setAttribute('src', songSingerImage)
		img.setAttribute('alt', 'rasm')

		audio.controls = true

		source.setAttribute('src', song)
		source.setAttribute('type', 'audio/mp3')


		audio.appendChild(source)
		div.appendChild(img)
		div.appendChild(audio)

		li.style.backgroundImage = `url(${songCoverPhoto})`

		li.appendChild(h3)
		li.appendChild(a)
		li.appendChild(div)

		songList.appendChild(li)

		console.log(element)
	})

}	

	
	

	btn.onclick = () => {
		songList.innerHTML  = null
		if (input.value != "") {

			getData(input.value)
		}
	}

	input.addEventListener("keyup", function(event) {
		songList.innerHTML  = null
		if (event.keyCode === 13) {
			event.preventDefault();
			getData(input.value)
		}
	});