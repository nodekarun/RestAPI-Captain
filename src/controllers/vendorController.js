var Product = require("../models/vendorRegisterModel");
var VendorCategories = require("../models/categoriesModel");

exports.vendor_register = (req, res) => {
  var product = new Product({
    userId: Math.floor(Math.random() * 100000 + 1),
    category: req.body.category,
    business_name: req.body.business_name,
    ownerName: req.body.ownerName,
    address: req.body.address,
    vender_distance: req.body.vender_distance,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  });

  product.save(err => {
    if (err) {
      return next(err);
    }
    res.send({ message: "Register Vendor Created successfully", data: null });
  });
};

exports.product_details = (req, res) => {
  Product.VendorRegister.findById(req.params.id, (err, product) => {
    if (err) return next(err);
    res.send(product);
  });
};

exports.vendor_nearby = (req, res) => {
  var categories = req.params.categories;
  Product.find({ category: categories }, { _id: 0, __v: 0 })
    .sort({ _id: -1 })
    .exec((err, result) => {
      if (err) return next(err);
      var ress = {
        message: "Nearby Vendors.",
        data: { nearby_vendor: result },
        error: []
      };
      res.status(200).send(ress);
    });
};

exports.vendor_nearbyall = (req, res) => {
  Product.find({}, { _id: 0, __v: 0 })
    .sort({ _id: -1 })
    .exec((err, result) => {
      if (err) return next(err);
      var ress = {
        message: "Nearby Vendors.",
        data: { nearby_vendor: result },
        error: []
      };
      res.status(200).send(ress);
    });
};

exports.vendor_categories = (req, res) => {
  VendorCategories.find({}, { _id: 0, __v: 0 }, (err, data) => {
    if (err) return next(err);
    var ress = {
      message: "Vendor Categories.",
      data: data
    };
    res.status(200).send(ress);
  });
};

exports.product_update = function(req, res) {
  Product.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    (err, product) => {
      if (err) return next(err);
      res.send("Product udpated.");
    }
  );
};

exports.product_delete = (req, res) => {
  Product.findByIdAndRemove(req.params.id, err => {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
};
