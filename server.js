const express = require('express');
const app = express();

const signWithGoogle = require('./controller/signWithGoogle');

app.use(express.static('build'))

app.post('/signWithGoogle', signWithGoogle.postSign);

app.listen(3000, () => {
  console.log('Server listen on port 3000')
});
