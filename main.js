const getWordInQuran = async (content) => {
    try {
      const response = await fetch(`https://al-quran1.p.rapidapi.com/corpus/${content}`, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "al-quran1.p.rapidapi.com",
          "x-rapidapi-key": "ea14964ba6msh8e607bc14f47ad5p125933jsn201009a55c27"
        },
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return;
    }
  }
  const displayQuranWord = async (wordInQuran) => {
    const searchForAWordDiv = document.getElementById("quran-card");
    words= wordInQuran

    let listOfElement = "";

    for (let i = 0; i < words.length; i++) {
      const wordData = {
        surah_no: words[i].number,
        ayah_no: words[i].number,
        content: words[i].text
      }

      const element = `
        <div class="word-container">
          <h5>Surah:  ${wordData.surah}</h5>
          <h5>Ayah:  ${wordData.ayah}</h5>
          <h3>"${wordData.content}"</h3>
        </div>
      `;
      listOfElement += element;
    }

    searchForAWordDiv.innerHTML = listOfElement;
  }

const searchWord= async () => {
  const content = document.getElementById("search-word").value
  if(!content) {
    return null
  }

  getWordInQuran(content).then (wordData => {
  displayQuranWord(wordData);
})
}
