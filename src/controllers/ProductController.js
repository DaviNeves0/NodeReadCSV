const Product = require('../models/Product');
const {Readable} = require('stream');
const readline = require('readline');

module.exports = {
    async index(request, response){
        const products = await Product.find();
        return response.json(products);
    },

    async store (request, response){
        const {file} = request;
        const {buffer} = file;
    
        const readbleFile = new Readable();
        readbleFile.push(buffer);
        readbleFile.push(null);
    
        const productsLine = readline.createInterface({
            input : readbleFile
        });
    
        const productArray = [];
    
        for await( let line of productsLine){
            const productLineSplit = line.split(',');
                productArray.push({
                    code_bar: productLineSplit[0],
                    description : productLineSplit[1],
                    price: Number(productLineSplit[2]),
                    quantity: Number( productLineSplit[3]),
                });   
        };
        
                for await ( let {code_bar, description, price, quantity} of productArray){
                    await Product.create({
                        code_bar,
                        description,
                        price,
                        quantity,
                    });
                };
        
  
    
        return response.json({message : "Adicionados com sucesso"});
    }
} 
