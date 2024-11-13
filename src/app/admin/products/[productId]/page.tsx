import ButtonDelete from "@/components/ButtonDelete";
import axios from "axios";
import Link from "next/link";

export type Props = {
  params: {
    productId: string;
  };
};
export default async function ProductDetail({ params }: Props) {
  const { productId } = await params;
  console.log({ productId });
  const { data: product } = await axios.get(
    `http://localhost:3001/products/${productId}`
  );
  console.log({ product });

  return (
    <div className="container">
      <h1 className="text-center my-2">Product Detail Id: {productId}</h1>
      <div>{JSON.stringify(product)}</div>
    </div>
  );
}
