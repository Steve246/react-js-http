import LabelToogle from "../../components/LabelToogle";

const ProductCard = (props) => {
  const { product } = props;
  console.log({ product });
  return (
    <div>
      <p>
        {" "}
        <b> ID </b> {product.productId}{" "}
      </p>
      <p>
        {" "}
        <b> Name </b> <LabelToogle title={product.productName} />
      </p>
    </div>
  );
};

export default ProductCard;
