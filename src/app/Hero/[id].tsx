import { useRouter } from "next/router";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Product {id}</h1>
      {/* Display product details here */}
    </div>
  );
};

export default ProductPage;
