import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
type Props = {
  img: StaticImageData;
  title: string;
  type: string;
  price: string;
};

const ProductCard: FC<Props> = ({ img, title, type, price }) => {
  return (
    <div className="product__card cursor-pointer transition-all duration-300 hover:scale-[1.02]">
      <Image className="mb-[6px]" alt="Product image" src={img} />
      <p className="product__title font-semibold text-white">{title}</p>
      <p className="product__type text-white text-opacity-75">{type}</p>
      <p className="product__price text-white font-semibold">{price}</p>
    </div>
  );
};

export default ProductCard;
