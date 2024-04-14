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
      <div className="product__image group/image relative">
        <Image className="mb-[6px]" alt="Product image" src={img} />
        <button className="add-product px-3 py-2 w-[max-content] z-10 hover:scale-105 active:scale-95 rounded-md bg-primary text-white absolute group-hover/image:opacity-100 group-hover/image:translate-y-[-50%] top-1/2 left-1/2 translate-x-[-50%] translate-y-[25%] opacity-0 transition-all duration-300">
          Add product
        </button>
      </div>
      <p className="product__title font-semibold text-white">{title}</p>
      <p className="product__type text-white text-opacity-75">{type}</p>
      <p className="product__price text-white font-semibold">{price}</p>
    </div>
  );
};

export default ProductCard;
