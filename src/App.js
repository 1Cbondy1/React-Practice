import React from "react";

import Product from "./components/Product";
import productsList from "./components/productsList";

function App() {

    const productComponents = productsList.map((item) => <Product key={item.id} product={item} />);

    return (
        <div>
            {productComponents}
        </div>
    )
}

export default App;
