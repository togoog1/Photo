"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongodb = require("mongodb");
var db_1 = require("../db");
var router = express.Router();
router.post('/', function (req, res) {
    var photo = req.body;
    photo._id = new mongodb.ObjectID(req.body._id);
    db_1.default.db.collection('photos').save(photo).then(function () {
        res.end();
    });
});
router.get('/', function (req, res) {
    db_1.default.db.collection('photos').find().toArray().then(function (photos) {
        res.json(photos);
    });
});
router.delete('/:id', function (req, res) {
    var photoId = new mongodb.ObjectID(req.params['id']);
    db_1.default.db.collection('photos').remove({ _id: photoId }).then(function () {
        res.end();
    });
});
exports.default = router;
