// Create varible to select the cart items to use in Products.html
let carts = document.querySelectorAll('.add-cart');

// Create a varible for all of the products
let products = [
  {
    name: 'Vynal T Shirts',
    tag: 'logo',
    price: 25,
    inCart: 0
  },
  {
    name: 'All over Print',
    tag: 'logo',
    price: 30,
    inCart: 0
  },
  {
    name: 'Sublimation',
    tag: 'logo',
    price: 25,
    inCart: 0
  },
  {
    name: 'Sublimation T Shirt',
    tag: 'logo',
    price: 20,
    inCart: 0
  },
  {
    name: 'Graduation Bunbles',
    tag: 'logo',
    price: 350,
    inCart: 0
  },
  {
    name: 'Bathroom Floor Mats',
    tag: 'logo',
    price: 20,
    inCart: 0
  },
  {
    name: 'Out Door Floor Mats',
    tag: 'logo',
    price: 25,
    inCart: 0
  },
  {
    name: 'Draw String Bag',
    tag: 'logo',
    price: 15,
    inCart: 0
  },
  {
    name: 'Doggy Collor/Banadana',
    tag: 'logo',
    price: 15,
    inCart: 0
  },
  {
    name: 'Heat Changing Mug',
    tag: 'logo',
    price: 20,
    inCart: 0
  },
  {
    name: 'Key Chain',
    tag: 'logo',
    price: 15,
    inCart: 0
  },
  {
    name: 'Business Cards: 50 Set',
    tag: 'logo',
    price: 30,
    inCart: 0
  },
  {
    name: 'Soda Can Shape Tumbler',
    tag: 'logo',
    price: 25,
    inCart: 0
  },
  {
    name: 'Glow in Dark Blue',
    tag: 'logo',
    price: 25,
    inCart: 0
  },
  {
    name: 'Glow in Dark Glue',
    tag: 'logo',
    price: 25,
    inCart: 0
  },
  {
    name: 'Glossy White',
    tag: 'logo',
    price: 25,
    inCart: 0
  },
  {
    name: '2FTX6FT',
    tag: 'logo',
    price: 115,
    inCart: 0
  },
  {
    name: '2FT X 4FT',
    tag: 'logo',
    price: 80,
    inCart: 0
  },
  {
    name: '2FT X 2FT',
    tag: 'logo',
    price: 45,
    inCart: 0
  },
  {
    name: '1FT X 2FT',
    tag: 'logo',
    price: 35,
    inCart: 0
  }
];

// a for loop to count how many items are added to the cart when selected
for (let i = 0; i < carts.length; i++) {
  // this is how to add a event listener for the items in html
  carts[i].addEventListener('click', () => {
    cartNumbers();
  });
}

// this function is to keep items in cart after reloading the page
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if (productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

// this function is to add itmes clicked to update the numbers clicked
function cartNumbers() {
  // how to add the items from the local storage
  let productNumbers = localStorage.getItem('cartNumbers');
  // Change strings into a Numbers for counter to work
  productNumbers = parseInt(productNumbers);

  //  if statement to make sure the product is put in the cart every time unless or else there is none
  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    // this will add the numbers of times any product that is clicked to 1 or more
    document.querySelector('.cart span').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
  }
}

onLoadCartNumbers();
