import Navbar from "./components/Navbar.js";
import ProductCard from "./components/ProductCard.js";
import ProductNotFoundMessage from "./components/ProductNotFoundMessage.js";
import { setProducts } from "./services/setProducts.js";
import { getProducts } from "./services/getProducts.js";
import { createAdminUser } from "./services/setAdminUser.js";
import { renderCartBody } from "./cart.init.js";
import { cartBadgeHandler } from "./utils/cartBadgeHandler.js";

let products;

document.addEventListener("DOMContentLoaded", () => {
  Navbar();
  createAdminUser();
  setProducts();
  products = getProducts();
  // renderCartBody()
  cartBadgeHandler()
  renderProductCards(products);
});

const cardContainer = document.getElementById("cardContainer");

/**
 *
 * @param {array} products Arreglo de producto
 * @returns {} Renderiza las cards de los productos.
 */

const renderProductCards = (products) => {
  cardContainer.innerHTML = "";
  products.map((product) => product.visible ? cardContainer.innerHTML += ProductCard(product): null);
};

const searchInput = document.getElementById("searchInput");
const priceSelect = document.getElementById("priceSelect");
const categorySelect = document.getElementById("categorySelect");
const clearFilters = document.getElementById("clearFilters");
/**
 *
 * @param {string} value Valor del filtro de categoria
 * @param {array} productsArray Arreglo de productos a renderizar
 * @returns {array} Devuelve el arreglo de productos filtrados
 */

const filterByCategory = (value, productsArray) => {
  let matchingProducts = productsArray.filter(p => p.category == value);

  if(value){
    return matchingProducts;
  }

  return productsArray;

  // VERSION ULT
  // console.log(value,"FBC value")
  // return value !== '' ? productsArray.filter(p => p.category === value) : productsArray;
};

/**
 *
 * @param {string} value Valor del filtro de precio.
 * @param {array} productsArray Arreglo de productos a renderizar
 * @returns {array} Devuelve el arreglo de productos filtrados
 */

const filterByPrice = (value, productsArray) => {
  // let comparar = function (a, b) {
  //   return a - b;
  // };
  // productsArray.price.sort(comparar);

  // VERSION ULT
  // if(value === ''){return productsArray}
  // let array = [];
  // switch (value){
  //   case "asc": {
  //     array = productsArray.toSorted((a,b) => a.price - b.price)
  //     break;
  //   }
  //   case "desc":{
  //     array = productsArray.toSorted((a,b) => b.price - a.price)
  //     break;
  //   }
  //   case "disc": {
  //     array = productsArray.filter(p => p.discountPercentage !== false);
  //     break;
  //   }
  // }
  // console.log(array,"ARRAY")
  // return array;

  let matchingProducts;

  if(value == 'asc'){
    matchingProducts = productsArray.sort((a,b)=> a.price - b.price);
  }
  if(value == 'desc'){
    matchingProducts = productsArray.sort((a,b)=> b.price - a.price);
  }
  if(value == 'disc'){
    matchingProducts = productsArray.filter(p => p.discountPercentage);
    matchingProducts = productsArray.sort((a,b) => b.discountPercentage - a.discountPercentage);
  }
  if(value){
    return matchingProducts;
  }
  
  return productsArray;
};

/**
 *
 * @param {string} value valor del input de nombre
 * @returns Arreglo de productos a renderizar
 */

const searchByName = (value) => { //Ver aqui
  const matchingProducts = products.filter(p => p.name.toLowerCase().includes(value));
  return matchingProducts;

  // VERSION ULT
  // if (productsArray) {
  //   return productsArray.filter((p) => p.name.includes(value));
  // } else {
  //   return [];
  // }
};

// searchInput.addEventListener("keyup", searchByName); //Ver aqui

/**
 *
 * @param {string} searchInputValue Valor del input de nombre
 * @param {string} priceSelectValue Valor del select de precios
 * @param {string} categorySelectValue Valor del select de categoria
 * @returns Crea un arreglo de productos pasando por todos los filtros y llama a renderProductCards() para renderizarlas, en caso de no haber productos muestra ProductNotFoundMessage()
 */
const renderFilteredProducts = (searchInputValue,priceSelectValue,categorySelectValue) => {
    // VERSION ULT
  // let p = JSON.parse(localStorage.getItem('products'));
  // let filteredProducts = searchByName(searchInputValue, p);
  // filteredProducts = filterByCategory(categorySelectValue,filteredProducts);
  // filteredProducts = filterByPrice(priceSelectValue,filteredProducts);

  // renderProductCards(filteredProducts);

  let productsArray = searchByName(searchInputValue);
  productsArray = filterByPrice(priceSelectValue, productsArray);
  productsArray = filterByCategory(categorySelectValue, productsArray);

  if(productsArray?.length == 0){
    return cardContainer.innerHTML = ProductNotFoundMessage();
  }
  renderProductCards(productsArray);

  // ProductNotFoundMessage()
};

searchInput.addEventListener("keyup", (e) => {
  renderFilteredProducts(
    e.target.value.toLowerCase(),
    priceSelect.value,
    categorySelect.value
  );
});

priceSelect.addEventListener("change", (e) => {
  renderFilteredProducts(
    searchInput.value,
    e.target.value,
    categorySelect.value
  );
});

categorySelect.addEventListener("change", (e) => {
  renderFilteredProducts(
    searchInput.value,
    priceSelect.value,
    e.target.value.toLowerCase()
  );
});

clearFilters.addEventListener("click", (e) => {
  e.preventDefault();
  searchInput.value = "";
  priceSelect.value = "";
  categorySelect.value = "";
  renderProductCards(products);
});
