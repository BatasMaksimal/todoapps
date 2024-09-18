const express = require(`express`)

var bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

var cors = require('cors');
app.use(cors());
const PORT = 3001

const listRoute = require(`./routes/list`)
app.use(`/list`,listRoute)
const userRoute = require(`./routes/user`)
app.use(`/user`,userRoute)

app.listen(PORT, () =>{
    console.log(`server of school's Library runs on port ${PORT}`)
})