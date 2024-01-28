'use strict';

const categoryList = document.querySelectorAll('ul#categories li.item')
console.log(`Number of categories: ${categoryList.length}`)

categoryList.forEach(category => {
    const categoryName = category.querySelector('h2');
    console.log(`Category: ${categoryName.textContent}`)

    const categoryItem = category.querySelectorAll('li');
    console.log(`Elements: ${categoryItem.length}`)

})

