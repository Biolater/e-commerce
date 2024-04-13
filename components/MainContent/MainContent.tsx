import ProductTypes from "./ProductTypes";
import ProductCards from "./ProductCards";
export default function MainContent() {
  return (
    <div className="pt-[54px] container px-4 mx-auto">
      <h1 className="text-2xl text-white font-semibold mb-4">
        Browse our products
      </h1>
      <ProductTypes />
      <ProductCards />
    </div>
  );
}
