const express = require('express');
const router = express.Router();
const faker = require('faker');
//const chance = new require('chance').Chance();
const jsf = require('json-schema-faker');
jsf.extend('chance', () => chance);
jsf.extend('faker', () => faker);


var schema = {
  "type": "array",
  "minItems": 1,
  "maxItems": 10,
  "items":{
    type:'object',
    properties: {
           number: {
              type: 'string',
              faker: 'random.number'
           },
           name: {
              type: 'string',
              faker: 'commerce.productName'
           },
           ntype: {
              type: 'string',
              faker: 'database.type'
           },
           image: {
              type: 'string',
              faker: 'image.business'
           },
           color: {
              type: 'string',
              faker: 'commerce.color'
           },
           material: {
              type: 'string',
              faker: 'commerce.productMaterial'
           },
           description: {
              type: 'string',
              faker: 'commerce.productDescription'
           },
           shop1: {
              type: 'string',
              faker: 'company.companyName'
           },
           shop2: {
              type: 'string',
              faker: 'company.companyName'
           },
           shop3: {
              type: 'string',
              faker: 'company.companyName'
           },
           price: {
            type:'string',
            faker: 'commerce.price'
           }
    },
     required: ['number', 'name', 'ntype', 'image', 'color', 'material', 'shop1', 'shop2', 'shop3', 'description', 'price']
  }
};


/* GET users listing. */
router.get('/', (req, res) => {

  jsf.resolve(schema).then(sample => {
    res.render('comment', {comments:sample});
  });
});



module.exports = router;
