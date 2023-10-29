const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/add-product', (req, res) => {
  res.send(`
    <form action="/add-product" method="POST">
      <input type="text" name="product" placeholder="Product Name">
      <input type="text" name="size" placeholder="Product Size">
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/add-product', (req, res) => {
  const { product, size } = req.body;
  console.log('Product:', product);
  console.log('Size:', size);
  res.send(`
    <p>Product Name: ${product}</p>
    <p>Product Size: ${size}</p>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
