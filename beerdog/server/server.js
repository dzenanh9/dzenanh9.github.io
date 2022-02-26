//npm modules
const express = require('express');

// create the server
const app = express();

//create the homepage route at '/'
app.get('/',(req,res)=>{
    res.send('index');
})

// the server what port to listen on
app.listen(4000, () => {
  console.log('Listening on localhost:4000')
})