import React from "react";
import { useState } from "react/cjs/react.production.min";

export default function AddProductComponent() {
    const [product, setProduct] = useState({});
    const [products, setProducts] = useState([]);

    const changeHandler = (e) => {
        product[e.target.name] = e.target.value
    }
    const saveProduct = (e) => {
        e.preventDefualt();
        setProducts(products.push(product))
    }
    return (
        <div>AddProduct
            <form>
                <label htmlFor="">Product Name</label>
                <input type="text" name="" onChange={changeHandler} />
                <label htmlFor="">Product Name</label>
                <input type="text" name="" onChange={changeHandler} />
                <label htmlFor="">Product Name</label>
                <input type="text" name="" onChange={changeHandler} />
                <label htmlFor="">Product Name</label>
                <input type="text" name="" onChange={changeHandler} />
                <button onClick={saveProduct}>Add Product</button>
            </form>
            <div>
                <table>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Name</th>
                        <th>Product Name</th>
                        <th>Product Name</th>
                    </tr>
                    {
                        products.map((pItem =>
                            <tr>
                                <td>{pItem.productName}</td>
                                <td>{pItem.productName}</td>
                                <td>{pItem.productName}</td>
                                <td>{pItem.productName}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    );
}