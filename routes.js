const express = require("express");
const productsController = require('./controllers/productsControllers');
const router = express.Router();

router.get("/", productsController.getProducts);
router.post("/product", productsController.addProduct);
router.delete("/product/:id", productsController.deleteProduct);
router.put("/product/:id", productsController.updateProduct);

module.exports = router;