const path = require("path");
const express = require("express");
const fs = require("fs");
const app = express();
const router= require('./routes/routes');
const knapsack=require('./controller/knapsack');

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setting templating engine
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/bagItems', (req,res)=>{
    res.render('add_bag_items');
})

//app.post('/optimumBag', knapsack)

app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server started on PORT ${PORT}`);
});



