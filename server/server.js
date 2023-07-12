// Creating the server:

// 1)Import express and cors
const express = require('express');
const cors = require('cors');

//2. Create an Express application
const app = express();

app.use(cors());
app.use(express.json());

//3 . Create a GET route
app.get('/', (req, res) => {
    res.send( console.log("Hello, we are connected!") );
});

//4. Start the server
app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });