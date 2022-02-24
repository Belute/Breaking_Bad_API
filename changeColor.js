
function createCard(imageUrl, namelastname) {
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


// function removeElementsByClass(elements) {
//     const elements = document.getElementsByClassName("card");
//     while (elements.length > 0) {
//         elements[0].parentNode.removeChild(elements[0]);
//     }
// }






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



async function getAll() {
    const requestURL = `https://www.breakingbadapi.com/api/characters/`;
    const request = new Request(requestURL);
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);
    return data;

}

async function getByName(ChName) {
    const requestURL = `https://www.breakingbadapi.com/api/characters?name=` + ChName;
    const request = new Request(requestURL);
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);
    return data;

}

async function getByLimite(limit) {
    const requestURL = `https://www.breakingbadapi.com/api/characters?limit=` + limit;
    const request = new Request(requestURL);
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);
    return data;

}

async function getBreaking(breaking) {
    const requestURL = `https://www.breakingbadapi.com/api/characters?category=` + breaking;
    const request = new Request(requestURL);
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);
    return data;

}

async function getSaul(saul) {
    const requestURL = `https://www.breakingbadapi.com/api/characters?category=` + saul;
    const request = new Request(requestURL);
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);
    return data;

}


async function getBySeason(season) {
    const requestURL = `https://www.breakingbadapi.com/api/characters`
    const request = new Request(requestURL);
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);
    return data;

}


let test = document.getElementById("btn");

test.onclick = function () {
    console.log("labas")


    getData().then(data => {
        let { img, name } = data[0];

        let card = createCard(img, name);
        appendCard(card);
        console.log(card)

    });



}

let testt = document.getElementById("btn1");

testt.onclick = function () {

    console.log("labas")
    document.querySelector(".card").remove();


}



let test1 = document.getElementById("btn2");

test1.onclick = function () {
    let id = prompt("Character ID:", 1);


    getById(id).then(data => {
        let { img, name } = data[0];
        console.log(data)
        let card = createCard(img, name);
        appendCard(card);
        console.log(card)

    });



}


let test3 = document.getElementById("btn3");

test3.onclick = function () {
    getAll().then(data => {

        data.forEach(item => {

            let { img, name } = item;
            let card = createCard(img, name);
            appendCard(card);
            console.log(card);
            console.log("Labas")




        });



    })
}


let test4 = document.getElementById("btn4");

test4.onclick = function () {
    let ChName = prompt("Type Name:");
    getByName(ChName).then(data => {

        data.forEach(item => {

            let { img, name } = item;
            let card = createCard(img, name);
            appendCard(card);
            console.log(card);
            console.log("Labas")




        });



    })
}


let test5 = document.getElementById("btn5");

test5.onclick = function () {
    let limit = prompt("Type Limit:");
    getByLimite(limit).then(data => {

        data.forEach(item => {

            let { img, name } = item;
            let card = createCard(img, name);
            appendCard(card);

        });



    })
}


let test6 = document.getElementById("btn6");

test6.onclick = function () {
    let breaking = `Breaking+Bad`;
    getBreaking(breaking).then(data => {

        data.forEach(data => {

            let { img, name } = data;
            let card = createCard(img, name);
            appendCard(card);

        });

    })
}



let test7 = document.getElementById("btn7");

test7.onclick = function () {
    let saul = `Better+Call+Saul`;
    getSaul(saul).then(data => {

        data.forEach(data => {

            let { img, name } = data;
            let card = createCard(img, name);
            appendCard(card);

        });



    })
}

let test8 = document.getElementById("btn8");


test8.onclick = function () {
    let season = +prompt("Sezono Numeris:");

    getBySeason().then(data => {
        let result = data.filter(item => item.appearance.includes(season))

        result.forEach(item => {

            console.log(result)
            let { img, name } = item;
            let card = createCard(img, name);
            appendCard(card);

        });


    })
}