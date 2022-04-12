const getProducts = async (id = 0) => {

    try {
        return await (
            fetch('products.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                return data.products
            }));
    } catch (err) {
        return console.log(err)
    }

}

export default getProducts;