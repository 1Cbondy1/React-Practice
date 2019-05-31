import React from "react";

import Product from "./components/Product";
import productsList from "./components/productsList";

class App extends React.Component {
    render() {

        const productComponents = productsList.map((item) => <Product key={item.id} product={item} />);

        return (
            <div>
                {productComponents}
            </div>
        )
    }
}

export default App;
