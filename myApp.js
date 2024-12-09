let express = require('express');
let app = express();

app.get('/', () => {
    console.log("Hello World"); 
    // res.send("");
});


let port = 3000; 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
