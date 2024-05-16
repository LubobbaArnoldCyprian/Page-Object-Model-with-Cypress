class Items {

    gridProducts = '.single-products'
    productNameText = '.productinfo.text-center>p'
    productPriceText = '.productinfo.text-center>h2'


    select_all_prices() {
        let products = [];

        cy.get(this.gridProducts).each(($product) => {
            // Extract product name
            const productName = $product.find(this.productNameText).text().trim();
            const productPriceText = $product.find(this.productPriceText).text().trim();
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
