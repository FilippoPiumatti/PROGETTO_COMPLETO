const { default: mongoose } = require('mongoose');
var Product = require('../models/product');

var Products =[
    new Product({
        imagePath: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp',
        title: 'Matematica Collezione Blu',
        vote: 310,
        material: '100% carta',
        weight: 'Pesa poco',
        description: 'There are many variations of passages of Lorem Ipsum available, but the  majority have suffered alteration in some form',
        price: 131.99
    }),
    new Product({
        imagePath: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp',
        title: 'Matematica Collezione Rossa',
        vote: 310,
        material: '100% carta',
        weight: 'Pesa poco',
        description: 'There are many variations of passages of Lorem Ipsum available, but the  majority have suffered alteration in some form',
        price: 121.99
    }),
    new Product({
        imagePath: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp',
        title: 'Matematica Collezione Marrone',
        vote: 310,
        material: '100% carta',
        weight: 'Pesa poco',
        description: 'There are many variations of passages of Lorem Ipsum available, but the  majority have suffered alteration in some form',
        price: 129.99
    })
];
var done =0;
for (let i = 0; i < Products.length; i++) {
    Products[i].save(function (err, result) {
        done++;
        if (done == Products.length) {
            console.log("done!")
        }
    });
    
}

mongoose.disconnect();


