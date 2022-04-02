const feedSection = document.getElementById("feed-section");
const searchSection = document.getElementById("search-section");
const searchButton = document.getElementById("search-button");
const form = document.getElementById("flower-search-form");

const navButtonHome = document.getElementById("nav-button-home");
const navButtonDiscover = document.getElementById("nav-button-discover");

const feed = async () => {
  try {
    const flowerURL = `https://pixabay.com/api/?key=26451142-8aba7bc1b6cb6c5ae91066da8&q=flowers&image_type=photo`;
    const data = await axios.get(flowerURL);
    const flowerResults = data.data.hits;

    flowerResults.map((flower) => {
      // div to contain each image and info separately
      const flowerDiv = document.createElement("div");
      flowerDiv.classList.add("flower-image-info");
      feedSection.append(flowerDiv);

      // div to display user image and name
      const userInfoDiv = document.createElement("div");
      userInfoDiv.classList.add("user-info");
      flowerDiv.append(userInfoDiv);

      const flowerUserImage = document.createElement("img");
      const userImage = flower.userImageURL;
      flowerUserImage.setAttribute("src", userImage);
      flowerUserImage.classList.add("user-images");
      userInfoDiv.append(flowerUserImage);

      const flowerUserName = document.createElement("p");
      const username = flower.user;
      flowerUserName.textContent = username;
      userInfoDiv.append(flowerUserName);

      // display images
      const flowerImageURL = flower.largeImageURL;
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

      const flowerLikes = flower.likes;
      const views = flower.views;

      flowerLikesParagraph.textContent = `❤️ ${flowerLikes}`;
    });
  } catch (e) {
    console.error(e);
  }
};

const flowerSearch = async () => {
  try {
    const input = document.getElementById("search-flowers").value;
    document.getElementById("search-flowers").value = "";
    const flowerSearchURL = `https://pixabay.com/api/?key=26451142-8aba7bc1b6cb6c5ae91066da8&q=flower+${input}&image_type=photo`;
    const data = await axios.get(flowerSearchURL);
    let flowerSearchResults = data.data.hits;

    // Show no search results if nothing is typed in
    if (input.length === 0) {
      return null;
    }

    flowerSearchResults.map((flower) => {
      // search results div
      let searchImages = document.createElement("img");
      searchImages.setAttribute("src", flower.largeImageURL);
      searchImages.classList.add("search-images");
      searchSection.append(searchImages);
    });
  } catch (e) {
    console.error(e);
  }
};

// Event Listeners

form.addEventListener("submit", (e) => {
  e.preventDefault();
  removeSearch();
  flowerSearch();
});

// Functions

const removeSearch = () => {
  while (searchSection.lastChild) {
    searchSection.removeChild(searchSection.lastChild);
  }
};

feed();
