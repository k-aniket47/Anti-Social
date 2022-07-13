const express = require('express')
const cookieParser = require('cookie-parser');
const app = express()
const port = 8888
const db = require('./config/mongoose');
const session=require('express-session');
const passport=require('passport')
const passportlocal=require('./config/passport-local-strategy')
const MongoStore = require('connect-mongo');

app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static('static'));



app.set('view engine','ejs')
app.set('views','./views')

app.use(session({
    name:'Anti Social',
    secret:'somethingblaaa',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    },
    store: MongoStore.create(
        {
            mongoUrl: 'mongodb://localhost:27017/',
            autoRemove: 'disabled'
        
        },
        function(err){
            console.log(err ||  'connect-mongodb setup ok');
        }
    )
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(passport.setAuthenticatedUser);

app.use('/',require('./routes'))


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Server is running on port ${port}!`))