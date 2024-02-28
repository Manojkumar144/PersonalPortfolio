const express = require('express');
const app = express();
const path = require ('path');
app.use(express.json());
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.json());

app.use('/', require('./routes/email'));
app.get('/', async (req, res) => {
    try {
      res.sendFile(path.join(__dirname, 'views','index.html'))
  
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
