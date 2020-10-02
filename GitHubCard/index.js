import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
let div = document.querySelector(".cards");
axios.get("https://api.github.com/users/matthewmsmith").then((response) => {
    return div.appendChild(cardMaker(response.data));
  })
  .catch((err) => {
    console.log("There was an error", err);
  });

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

   
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
  
    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{ name}</h3>
        <p class="username">{username}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function cardMaker(obj) {
  //CREATED ELEMENTS
  const card = document.createElement("div");
  const img = document.createElement("img");
  const cardInfoDiv = document.createElement("div");
  const name = document.createElement("h3");
  const userName = document.createElement("p");
  const location = document.createElement("p");
  const linkedParent = document.createElement("p");
  const link = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  // CLASSNAMES
  card.classList.add("card");
  cardInfoDiv.classList.add("card-info");
  name.classList.add("name");
  userName.classList.add("username");
  location.classList.add("location");
  linkedParent.classList.add("linked-parent");
  followers.classList.add("followers");
  following.classList.add("following");
  bio.classList.add("bio");

  // TEXT CONTENT = OBJ
  img.src = obj.avatar_url;
  name.textContent = obj.name;
  userName.textContent = obj.login;
  location.textContent = obj.location;
  linkedParent.textContent = "Profile:";
  link.href = obj.url;
  link.textContent = "Go to users Github";
  (followers.textContent = "Followers:"), obj.followers;
  (following.textContent = "Following:"), obj.following;
  (bio.textContent = "Bio:"), obj.bio;

  // APPEND CHILDREN
  card.appendChild(img);
  card.appendChild(cardInfoDiv);
  cardInfoDiv.appendChild(userName);
  cardInfoDiv.appendChild(location);
  cardInfoDiv.appendChild(linkedParent);
  cardInfoDiv.appendChild(followers);
  cardInfoDiv.appendChild(following);
  cardInfoDiv.appendChild(bio);
  linkedParent.appendChild(link);

  console.log(card);

  return card;
}
/*
/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

let followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
];

followersArray.forEach((user) => {
    axios.get(`https://api.github.com/users/${user}`)
    .then((response) => {
     return div.appendChild(cardMaker(response.data));
      console.log(response)
    })
    .catch((err) => {
    console.log("Error", err);
  })
})

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
