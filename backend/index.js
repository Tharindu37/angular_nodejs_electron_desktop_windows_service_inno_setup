const express = require('express')
const cors = require('cors');
const server = express();


// Use CORS middleware
server.use(cors())

// Define routes
server.get('/test', (req, res) => {
    res.send({message:"Hello Desktop Application!"});
  });

// app.get('/api/test', (req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     res.send({ status: 'OK' });
// })

// Listen on port 3000
const port = 3001;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});