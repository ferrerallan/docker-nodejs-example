'use strict';

const express = require('express');

// Constants
const PORT = 3000;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World 2');
});

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
});

