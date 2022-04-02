const feedSection = document.getElementById("feed-section");
const searchButton = document.getElementById("search-button");
const form = document.getElementById("flower-search-form");

const navButtonHome = document.getElementById("nav-button-home");
const navButtonDiscover = document.getElementById("nav-button-discover");

const feed = async () => {
  try {
    const flowerURL = `https://pixabay.com/api/?key=26451142-8aba7bc1b6cb6c5ae91066da8&q=flowers&image_type=photo`;
    const data = await axios.get(flowerURL);
    const flowerResults = data.data.hits;

    for (let i = 0; i < flowerResults.length; i++) {
      // div to contain each image and info separately
      const flowerDiv = document.createElement("div");
      flowerDiv.classList.add("flower-image-info");
      feedSection.append(flowerDiv);

      // div to display user image and name
      const userInfoDiv = document.createElement("div");
      userInfoDiv.classList.add("user-info");
      flowerDiv.append(userInfoDiv);

      const flowerUserImage = document.createElement("img");
      const userImage = flowerResults[i].userImageURL;
      flowerUserImage.setAttribute("src", userImage);
      flowerUserImage.classList.add("user-images");
      userInfoDiv.append(flowerUserImage);

      const flowerUserName = document.createElement("p");
      const username = flowerResults[i].user;
      flowerUserName.textContent = username;
      userInfoDiv.append(flowerUserName);

      // display images
      const flowerImageURL = flowerResults[i].largeImageURL;
      const flowerImageSrc = document.createElement("img");
      flowerImageSrc.setAttribute("src", flowerImageURL);
      flowerImageSrc.classList.add("flower-images");
      flowerDiv.append(flowerImageSrc);

      // div to display info
      const flowerInfoDiv = document.createElement("div");
      flowerInfoDiv.classList.add("flower-info");
      flowerDiv.append(flowerInfoDiv);

      // display image info
      const flowerLikesParagraph = document.createElement("p");

      flowerInfoDiv.append(flowerLikesParagraph);

      const flowerLikes = flowerResults[i].likes;
      const views = flowerResults[i].views;

      flowerLikesParagraph.textContent = `❤️ ${flowerLikes}`;
    }
  } catch (e) {
    console.error(e);
  }
};

const flowerSearch = async () => {
  try {
    const input = document.getElementById("search-flowers").value;
    document.getElementById("search-flowers").value = "";
    const flowerSearchURL = `https://pixabay.com/api/?key=26451142-8aba7bc1b6cb6c5ae91066da8&q=flower+${input}&image_type=photo`;
    const flowerSearchResults = await axios.get(flowerSearchURL);
    console.log(flowerSearchResults.data.hits);
  } catch (e) {
    console.error(e);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  flowerSearch();
});

feed();
