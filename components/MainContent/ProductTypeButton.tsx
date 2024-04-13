import { FC } from "react";

type ProductTypeButtonProps = {
  isActive: boolean;
  onSelect: () => void;
  text: string;
};

const ProductTypeButton: FC<ProductTypeButtonProps> = ({
  isActive,
  onSelect,
  text,
}) => {
  return (
    <button
      className={`${
        isActive ? "bg-transparent text-white" : "bg-white"
      } rounded-[5px] button-transition border-2 border-white hover:text-white hover:bg-transparent font-medium text-sm px-[10px] py-1`}
      onClick={onSelect}
    >
      {text}
    </button>
  );
};

export default ProductTypeButton;
