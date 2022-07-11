const express = require('express')
const app = express()
const port = 8888

app.use('/',require('./routes'))

app.set('view engine','ejs')
app.set('views','./views')

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Server is running on port ${port}!`))