import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/ProductCard";
import { useTypedSelector } from "../../hooks/redux";
import { Page } from "../../components/templates/Page";
import { ProductAdditional } from "../../components/ProductAdditional";
import { Similar } from "../../components/Similar";

export const Product: React.FC = () => {
  const { shopId } = useParams();

  const product = useTypedSelector(
    (state) => state.productReducer.products
  ).find((product) => product.id === Number(shopId));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <Page>
      <ProductCard product={product} />
      <ProductAdditional
        title={product.title}
        shortDesc={product.description}
        weight={product.weight}
        dimensions={product.dimensions}
        colors={product.colors}
        material={product.material}
        reviews={product.reviews}
      />
      <Similar />
    </Page>
  );
};
