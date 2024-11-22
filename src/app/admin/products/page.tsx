import ButtonDelete from "@/components/ButtonDelete";
import axios from "axios";
import Link from "next/link";
import prisma from "@/lib/prisma";

export type Product = {
  id: number;
  name: string;
  price: number;
};
export default async function Admin() {
  // const { data: products } = await axios.get("http://localhost:3001/products");
  const products: Product[] = await prisma.product.findMany();
  // console.log(data);

  // const products: Product[] = [];
  // console.log(products);

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
          {products.map((product: Product, index: number) => (
            <tr key={index}>
              <th scope="row">{product.id}</th>
              <td>{product.name}</td>
              <td>{product.price} USD</td>
              <td>
                <Link href={`/admin/products/${product.id}`}>
                  <button className="btn btn-info">View</button>
                </Link>
                <ButtonDelete productId={product.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
