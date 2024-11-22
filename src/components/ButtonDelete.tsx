"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

type Props = {
  productId: any;
};

const ButtonDelete = ({ productId }: Props) => {
  const router = useRouter();
  function deleteProduct() {
    if (confirm("Xoa?")) {
      axios
        .delete(`/api/products/${productId}`)
        .then(() => router.refresh())
        .catch((error) => console.log(error));
    }
  }
  return (
    <button onClick={deleteProduct} className="btn btn-danger">
      Delete
    </button>
  );
};

export default ButtonDelete;
