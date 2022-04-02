const discoverDiv = document.getElementById("discover-container");

const discover = async () => {
  try {
    const discoverURL =
      "https://pixabay.com/api/?key=26451142-8aba7bc1b6cb6c5ae91066da8&q=florals&image_type=photo";
    const data = await axios.get(discoverURL);
    flowerResults = data.data.hits;

    for (let i = 0; i < flowerResults.length; i++) {
      // display image
      const discoverImages = document.createElement("img");
      discoverImages.setAttribute("src", flowerResults[i].largeImageURL);
      discoverDiv.append(discoverImages);
    }
  } catch (e) {
    console.error(e);
  }
};

discover();
