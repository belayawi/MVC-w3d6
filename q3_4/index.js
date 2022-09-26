
const express = require('express');

const path = require('path');

const Product = require('./product');;
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'view'));
app.use('/css', express.static(path.join(__dirname,'css')));
app.use(express.urlencoded());
app.use(express.json());

const products =[
    new Product("Chair", 25.9,"To sit on.", 200 ),
    new Product("Light",8.6, "To see things.", 394 ),
    new Product("Table", 255.99,"To put things on.", 302 ),
    new Product("Zebra Frame",14.69, "A picture frame showcasing zebra skin.", 44934 ),
    new Product("Sofa",236.365, "To chill on.", 230 ),
    new Product("Dining Chair", 369.36,"To sit on while dining", 34 ),
    new Product("Wooden Chair",45.3, "To sit on, but less comfortably.", 232 ),
    new Product("Bowls",43.69, "To serve soup in.", 2, )];

    let items =[];


    app.get('/',(req, res)=>{
        
        res.render('product',{products: products});
    });

    app.post('/add',(req, res)=>{
        console.log(req.body);
        let item = req.body.item;
        items.push(item);
        console.log(item)
        res.redirect('/');  
    });

    app.get('/cart',(req, res)=>{
        res.render('shoppingCart',{items:items})
    });
    
app.listen(3000);

