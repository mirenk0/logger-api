"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var express_validator_1 = require("express-validator");
var validator_middleware_1 = require("./modules/validator-middleware");
var product_1 = require("./handlers/product");
var update_1 = require("./handlers/update");
var router = (0, express_1.Router)();
/**
 * Product
 */
router.get("/product", product_1.getProducts);
router.get("/product/:id", product_1.getOneProduct);
router.post("/product", (0, express_validator_1.body)('name').isString(), validator_middleware_1.handleInputErrors, product_1.createProduct);
router.put("/product/:id", (0, express_validator_1.body)('name').isString(), validator_middleware_1.handleInputErrors, product_1.updateProduct);
router.delete("/product/:id", product_1.deleteProduct);
/**
 * Update
 */
router.get("/update", update_1.getUpdates);
router.get("/update/:id", update_1.getOneUpdate);
router.post("/update", (0, express_validator_1.body)('title').exists().isString(), (0, express_validator_1.body)('body').exists().isString(), (0, express_validator_1.body)('productId').exists().isString(), update_1.createUpdate);
router.put("/update/:id", (0, express_validator_1.body)('title').optional(), (0, express_validator_1.body)('body').optional(), (0, express_validator_1.body)('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(), (0, express_validator_1.body)('version').optional(), update_1.updateUpdate);
router.delete("/update/:id", update_1.deleteUpdate);
/**
 * UpdatePoint
 */
router.get("/updatepoint", function (req, res) { });
router.get("/updatepoint/:id", function (req, res) { });
router.post("/updatepoint", (0, express_validator_1.body)('name').exists().isString(), (0, express_validator_1.body)('description').exists().isString(), function (req, res) { });
router.put("/updatepoint/:id", (0, express_validator_1.body)('name').isString(), (0, express_validator_1.body)('description').isString(), (0, express_validator_1.body)('updateID').exists().isString(), function (req, res) { });
router.delete("/updatepoint/:id", function (req, res) { });
router.use(function (err, req, res, next) {
    console.log(err);
    res.json({ message: 'in router handler' });
});
exports.default = router;
//# sourceMappingURL=router.js.map