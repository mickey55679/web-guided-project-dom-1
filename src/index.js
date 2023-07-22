// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card
const mainNav = document.getElementById("mainNav");
const divElements = document.getElementsByTagName("div");
const cardElems = document.getElementsByClassName("card");

const queryMainNav = document.querySelector("#mainNav");
const queryDivElems = document.querySelectorAll("div");
const queryCardElems = document.querySelectorAll(".card");

// A- finding across the entire DOM
const header = document.querySelector("header");
const logoTitle = document.querySelector("#logoTitle");
const firstCard = document.querySelector(".card:nth-of-type(1)");

// B- finding within one particular element
const imageFirstCard = firstCard.querySelector("img");
const titleFirstCard = firstCard.querySelector("h2");
const subtitleFirstCard = firstCard.querySelector("h3");
const textFirstCard = firstCard.querySelector("p");
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling;
const link2FirstCard = link1FirstCard.nextElementSibling;

// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const links = document.querySelectorAll("nav a");
//in CSS when you have "div a {}" the css rules will apply to every tag that is a direct child of a div tag.
links.forEach((link) => console.log(link.textContent));
// B- Loop over the links and console.log their text content
// C- Turn the collection of links into a real array
// D- Use .filter to find the anchor tag with the textContent of "Home"
const linksArr = Array.from(links);

const homeLink = linksArr.find((link) => link.textContent === "Home");

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
//  B- Have the students research online the difference between textContent and innerText
logoTitle.textContent = "Bloomtech Doggos";
titleFirstCard.textContent = "I is DOGGG!";
subtitleFirstCard.textContent = "A story in three parts";
textFirstCard.textContent = "Dogs are nice, dogs ar kind, stay away from cats!";
link2FirstCard.textContent = "Dog Ipsum";

// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
//  B- Using .setAttribute to change a few attributes
link1FirstCard.setAttribute("href", "https://pexels.com/search/dog");
link2FirstCard.href = "https://doggoipsum.com";
imageFirstCard.src =
  "https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_1280.jpg";
logoTitle.className = "Logo heading banana";

// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
//  B- By manipulating inline styles on the element
header.style.fontSize = "2em";

header.classList.add("sky");
header.classList.remove("sky");
// setInterval(() => header.classList.toggle('sky'), 1000);

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement("a");
blogLink.textContent = blog;
blogLink.href = "#";
document.querySelector("nav").appendChild(blogLink);
blogLink.classList.add("menu-item");

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const secondCard = firstCard.cloneNode(true);
document.querySelector(".card-group").appendChild(secondCard);
header.remove();
document.body.prepend(header);

const contactHeading = document.querySelector(".contact-heading");
const address = document.querySelector(".address");
const phone = document.querySelector(".phone");
const email = document.querySelector(".email");

contactHeading.textContent = data["contact"]["contact-heading"];
address.textContent = data["contact"]["address"];
phone.textContent = data["contact"]["phone"];
email.textContent = data["contact"]["email"];

// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]

// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
