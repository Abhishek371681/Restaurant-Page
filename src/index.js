import "./menu.css";
import "./home.css";
import "./contact.css";
import "./styles.css";
import { loadHome } from "./home.js";
import { menuCard } from "./menu.js"
import { loadContact } from "./contact.js";

const content = document.getElementById("content");

const switchHome = document.getElementById('home');
const switchMenu = document.getElementById('menu');
const switchContact = document.getElementById('contact');

switchHome.addEventListener('click', () => {
  loadPage();
})

switchMenu.addEventListener('click', () => {
  loadMenu();
})

switchContact.addEventListener('click', () => {
  loadContactPage();
})

function clearContent() {
  content.innerHTML = "";
}

function loadPage() {
  clearContent();
  loadHome();
}

loadPage();

function loadMenu() {
  clearContent();
  menuCard();
}

function loadContactPage() {
  clearContent();
  loadContact();
}
