class Items {

    priceLocators = '.features_items > > .product-image-wrapper > .single-products > .productinfo > h2'


    select_all_prices() {
        let products = [];

        cy.get('.single-products').each(($product, index) => {
            // Extract product name
            const productName = $product.find('.productinfo.text-center>p').text().trim();
            const productPriceText = $product.find('.productinfo.text-center>h2').text().trim();
            const productPrice = parseFloat(productPriceText.replace('Rs.', ''));



            // Store the product name and price in an object and push it to the products array
            const product = {
                name: productName,
                price: productPrice
            };
            products.push(product);
        });

        // price sorting in ascending order
        cy.wrap(products).then((products) => {
            const sortedProducts = products.sort((a, b) => a.price - b.price);

            // Display sorted product names and prices in the console
            sortedProducts.forEach((product, index) => {
                cy.log(`Product ${index + 1}: ${product.name} - ${product.price}`);
            });
        });


    }
}
export default Items
