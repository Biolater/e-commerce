"use client";
import { FC, useState } from "react";
import ProductTypeButton from "./ProductTypeButton";
const productTypes: string[] = [
  "All",
  "Electronics",
  "Health & Beauty",
  "Books & Media",
  "Home Goods & Furniture",
];
const ProductTypes: FC = () => {
  const [activeType, setActiveType] = useState(productTypes[0]);
  const onSelect = (productType: string) => {
    setActiveType(productType);
  };
  return (
    <div className="product__types mb-6 flex gap-[10px] flex-wrap">
      {productTypes.map((productType) => (
        <ProductTypeButton
          key={productType}
          onSelect={() => onSelect(productType)}
          isActive={activeType === productType}
          text={productType}
        />
      ))}
    </div>
  );
};

export default ProductTypes;
