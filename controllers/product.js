const express = require("express")
const { append } = require("express/lib/response");
const Product = require("../models/product")

// create the router

const router = express.Router();

// ERROR HANDLER

function errorHandler(error, res){
res.json(error);
}

// routes

// Seed route


router.get("/seed", async (req, res) =>{
    await Product.remove({}).catch((error) => errorHandler(error, res))
   const products = await Product.create([
    {title: "Iphone", price: 990, taxes: 2, ads: 7, discount: 5, count: 6, category: 6},
    {title: "Macbook Air", price: 2200, taxes: 5, ads: 7, discount: 3,  count: 6, category: 6},
    {title: "Macbook pro", price: 3000, taxes: 4, ads: 7, discount: 2,  count: 6, category: 6},
   ]).catch((error) => errorHandler(error, res));
   res.json(products);
});
// Induces
// INDEX Route - Get - List all Products

router.get("/", async (req, res) => {
    const products = await Product.find({}).catch((error) => errorHandler(error, res));
    res.render("product/index.ejs", {products});
});

// new route -get- get the new form

router.get("/new", (req,res) =>{
    res.render("product/new.ejs")
});

// destroy route delete- deletes one product

router.delete("/:id", async(req, res) =>{
    await Product.findByIdAndRemove(req.params.id).catch((error) =>
    errorHandler(error, res)
    );
    res.redirect("/product");
})


// update route -put-  updates one product

router.put("/:id", async (req, res) =>{

    // update the product
    await Product.findByIdAndUpdate(req.params.id, req.body);

    res.redirect("/product/")
})

// create route -post- creates a product

router.post("/", async(req, res) =>{
// create the product
    await Product.create(req.body).catch((error) => errorHandler(error, res));
    // redirect to index
    res.redirect("/product")
})


// edit route -get- get the edit form

router.get("/:id/edit", async (req, res) => {
    const product = await Product.findById(req.params.id).catch((error) => errorHandler(error, res))
    res.render("product/edit.ejs", {product})
});


// show route -get- gets one product
router.get("/:id", async (req, res) => {
    const product = await Product.findById(req.params.id).catch((error) => errorHandler(error, res))
    res.render("product/show.ejs", {product})
})


// export the routes
module.exports = router;