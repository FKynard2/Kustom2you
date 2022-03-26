const title = React.createElement(
  'h1',
  {id: 'main-title', title: 'This is a title.', class: 'main'},
  'SEND US YOUR IMAGE, IDEA OR THEME.'
);

const desc = React.createElement(
  'p',
  {class: 'second'},
  null,
  'we bring them to life'
);

const header = React.createElement('header', null, title, desc);

ReactDOM.render(header, document.getElementById('root'));

// Create the routes for each of the home buttons from each route

// Design the page for each route with buttons for each product
// Create the cart page for each indivisual product
// Create the small carousel for each route page
