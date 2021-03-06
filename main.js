/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

// let search = document
//   .querySelector("form.search-form")
//   .addEventListener("submit", search)

function search() {
  let url = "https://itunes.apple.com/search?term="
  let searchValue = document.querySelector("#searchBox").value

  url = `${url}${searchValue}&limit=15`
  // console.log(url)

  let artistName
  let trackName
  let artworkUrl100
  let previewUrl
  let collectionName // Album name
  // console.log(data)

  let results = document.querySelector(".results")

  // Select and store the information we want to work with
  fetch(url).then(response => response.json()).then(data => {
    for (var i = 0; i < data.results.length; i++) {
      artistName = data.results[i].artistName
      trackName = data.results[i].trackName
      artworkUrl100 = data.results[i].artworkUrl100
      previewUrl = data.results[i].previewUrl
      anchor = "#"
      collectionName = data.results[i].collectionName

      let artistNameText = document.createElement("h2")
      let trackNameText = document.createElement("h3")
      let artworkUrl100Img = document.createElement("img")
      let anchorContainer = document.createElement("a")
      let collectionNameText = document.createElement("h4")
      let resultContainer = document.createElement("div")

      artworkUrl100Img.src = artworkUrl100
      trackNameText.textContent = trackName
      artistNameText.textContent = artistName
      collectionNameText.textContent = collectionName
      anchorContainer.href = anchor

      anchorContainer.appendChild(artworkUrl100Img)
      anchorContainer.appendChild(trackNameText)
      anchorContainer.appendChild(collectionNameText)
      anchorContainer.appendChild(artistNameText)
      resultContainer.appendChild(anchorContainer)
      results.appendChild(resultContainer)

      console.log(results)
    }

    url = "https://itunes.apple.com/search?term="
  })
}

// If 'Enter' key is hit, start searching input typed in
function checkSubmit(e) {
  if (e && e.keyCode == 13) {
    search()
  }
}
