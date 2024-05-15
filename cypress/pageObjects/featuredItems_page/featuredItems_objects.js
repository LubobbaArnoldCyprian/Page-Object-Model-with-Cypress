class Items {

    priceLocators = '.features_items > > .product-image-wrapper > .single-products > .productinfo > h2'


    select_all_prices() {
        let products = [];

        cy.get('.single-products').each(($product, index) => {
            // Extract product name
            const productName = $product.find('.productinfo.text-center>p').text().trim();
            // cy.log(productName)
            // Extract product price
            const productPriceText = $product.find('.productinfo.text-center>h2').text().trim();
            // Remove currency symbols and convert to number
            const productPrice = parseFloat(productPriceText.replace('Rs.', ''));
            //cy.log(productPrice)


            // Store the product name and price in an object and push it to the products array
            const product = {
                name: productName,
                price: productPrice
            };
            products.push(product);
        });

        // Sort the products based on price (ascending order)
        cy.wrap(products).then((products) => {
            const sortedProducts = products.sort((a, b) => a.price - b.price);
            // cy.log('The sorted Products are:' + sortedProducts);
            // cy.log('The sorted Products are:' + sortedProducts);

            // Display sorted product names and prices in the console
            sortedProducts.forEach((product, index) => {
                cy.log(`Product ${index + 1}: ${product.name} - ${product.price}`);
            });
        });












        // cy.get('.single-products').each(($product, index) => {
        //     // Extract product name
        //     const productName = $product.find('.productinfo.text-center>p').text().trim();
        //     // cy.log(`Product ${index + 1} Name: ${productName}`);

        //     // Extract product price
        //     const productPriceText = $product.find('.productinfo.text-center>h2').text().trim();
        //     // cy.log(`Product ${index + 1} Price Text: ${productPriceText}`);

        //     // Remove currency symbols and convert to number
        //     const productPrice = parseFloat(productPriceText.replace('Rs.', ''));
        //     cy.log(`Product ${index + 1} Price: ${productPrice}`);

        //     // Store the product name and price in an array or object
        //     const product = {
        //         name: productName,
        //         price: productPrice
        //     };

        //     // Store the product data in an array or object
        //     cy.wrap(product).as('products');
        // })


        // // Sort the products based on price (ascending order)
        // cy.get('@products').then((products) => {
        //     const sortedProducts = products.sort((a, b) => a.price - b.price);
        //     // Display sorted product names and prices in the console
        //     sortedProducts.forEach((product) => {
        //         console.log(`${product.name}: ${product.price}`);
        //     });
        // });


        //         // cy.get(this.priceLocators)
        //         cy.get('.features_items').each(($product) => {
        //             const productName = $product.find('.features_items >> .productinfo > p').text().trim()
        //             const productPriceText = $product.find('.features_items >> .productinfo > h2').text().trim()
        //             const productPrice = parseFloat(productPriceText.replace(/[^\d.]/g, ''));

        //             const product = {
        //                 name: productName,
        //                 price: productPrice
        //             };

        //             cy.wrap(product).as('products');
        //         });

        //         cy.get('@products').then((products) => {
        //             const sortedProducts = products.sort((a, b) => a.price - b.price);
        //             // Display sorted product names and prices in the console
        //             sortedProducts.forEach((product) => {
        //                 console.log(`${product.name}: ${product.price}`);
        //             });
        //         });


    }
}
export default Items

// cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p')
// cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > h2')