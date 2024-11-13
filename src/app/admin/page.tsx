"use client";

import axios from "axios";
import { useEffect, useState } from "react";
export type Product = {
  id: number;
  name: string;
  price: number;
};
export default function Admin() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  function deleteProduct(id: any) {
    if (confirm("Xoa?")) {
      axios
        .delete(`http://localhost:3001/products/${id}`)
        .then(() => location.reload())
        .catch((error) => console.log(error));
    }
  }
  return (
    <div className="container">
      <h1 className="text-center my-2">Product List</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <th scope="row">{product.id}</th>
              <td>{product.name}</td>
              <td>{product.price} USD</td>
              <td>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
