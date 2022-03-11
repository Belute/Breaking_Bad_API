

# Breaking bad API



This project is for **educational** porpuses only. Pull request are welcome, but priority for project authors! Thank you for your cooperation!

Site published at: https://belute.github.io/Homework_Breaking_Bad/


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



```