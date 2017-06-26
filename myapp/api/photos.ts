import * as express from 'express';
import *as mongodb from 'mongodb';
import database from '../db';
let router = express.Router();

router.post('/',  (req, res) => {
  let photo = req.body;
  photo._id = new mongodb.ObjectID(req.body._id);
  database.db.collection('photos').save(photo).then(() =>{
    res.end();

  })
})



router.get('/', (req,res) => {
  database.db.collection('photos').find().toArray().then((photos) =>{
    res.json(photos)
  })
})

router.delete('/:id', (req,res) => {
  let photoId =new mongodb.ObjectID(req.params['id']);
  database.db.collection('photos').remove({_id: photoId}).then(() => {
    res.end();
  })
})
export default router;
