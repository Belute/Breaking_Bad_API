

# Breaking bad API



This project is for **educational** porpuses only. 

Site published at: https://belute.github.io/Breaking_Bad_API/


## Project features


-   CSS
-   JS
-   HTML

## Authors

Justinas: [Github](https://github.com/Belute)

## Code sample

```function createCard(imageUrl, namelastname) {
    let img = document.createElement("img");
    img.className = "img";
    img.src = imageUrl;

    let nameSurname = document.createElement("p");
    nameSurname.textContent = namelastname;

    let newCard = document.createElement("div");
    newCard.className = "card";

    newCard.append(img, nameSurname);

    return newCard;

}

function appendCard(card) {

    let parent = document.querySelector(`main`);
    parent.append(card);


}



async function getData() {
    const requestURL = `https://www.breakingbadapi.com/api/character/random`;
    const request = new Request(requestURL);
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);
    return data;

}

async function getById(id) {
    const requestURL = `https://www.breakingbadapi.com/api/characters/` + id;
    const request = new Request(requestURL);
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);
    return data;

}

```
```html
  <div id=card class="card">
            <img class="img" src="https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg" alt="John" height="250px" width="250px"></img>
            <p>John Doe</p>
            <p>Age:</p>
            <p>Location:</p>
            <p>Email:</p>
        </div>
```
```css
.btn {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 10%;
  font-size: 18px;
  height: 5%;
  margin: 0%;
}
```
