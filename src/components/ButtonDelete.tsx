"use client";

import axios from "axios";

type Props = {
  productId: any;
};

const ButtonDelete = ({ productId }: Props) => {
  function deleteProduct() {
    if (confirm("Xoa?")) {
      axios
        .delete(`http://localhost:3001/products/${productId}`)
        .then(() => location.reload())
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
