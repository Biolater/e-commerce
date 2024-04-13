import { FC } from "react";
import ProductCard from "./ProductCard";
import NikeProduct from "@/public/image.png";
import { StaticImageData } from "next/image";
type ProductsType = {
  img: StaticImageData;
  title: string;
  type: string;
  price: string;
};
const ProductCards: FC = () => {
  const products: ProductsType[] = [
    {
      img: NikeProduct,
      title: "Nike tech hera",
      type: "Women's shoes",
      price: "$100.00",
    },
    {
      img: NikeProduct,
      title: "Nike tech hera",
      type: "Women's shoes",
      price: "$100.00",
    },
    {
      img: NikeProduct,
      title: "Nike tech hera",
      type: "Women's shoes",
      price: "$100.00",
    },
    {
      img: NikeProduct,
      title: "Nike tech hera",
      type: "Women's shoes",
      price: "$100.00",
    },
    {
      img: NikeProduct,
      title: "Nike tech hera",
      type: "Women's shoes",
      price: "$100.00",
    },
    {
      img: NikeProduct,
      title: "Nike tech hera",
      type: "Women's shoes",
      price: "$100.00",
    },
    {
      img: NikeProduct,
      title: "Nike tech hera",
      type: "Women's shoes",
      price: "$100.00",
    },
    {
      img: NikeProduct,
      title: "Nike tech hera",
      type: "Women's shoes",
      price: "$100.00",
    },
    {
      img: NikeProduct,
      title: "Nike tech hera",
      type: "Women's shoes",
      price: "$100.00",
    },
    {
      img: NikeProduct,
      title: "Nike tech hera",
      type: "Women's shoes",
      price: "$100.00",
    },
    {
      img: NikeProduct,
      title: "Nike tech hera",
      type: "Women's shoes",
      price: "$100.00",
    },
  ];
  return (
    <div className="product__cards grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((_, index) => (
        <ProductCard
          key={index}
          img={products[index].img}
          title={products[index].title}
          type={products[index].type}
          price={products[index].price}
        />
      ))}
    </div>
  );
};

export default ProductCards;
