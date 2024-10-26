import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";
import { useContext, useEffect, useState } from "react";
import { SHOP_CONTEXT } from "../context/shopContext";

const FeaturedProducts = () => {
  let [latestProducts, setLatestProducts] = useState([]);
  let { products } = useContext(SHOP_CONTEXT);

  useEffect(() => {
    setLatestProducts(products.slice(21, 31));
  }, [products]);
  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 xl:px-0  mb-[80px] mt-[40px]">
      <div className="flex flex-row flex-wrap content-center justify-between items-center mb-[40px]">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          Featured Products
        </h2>
        <Link
          to="/collection"
          className="not-italic font-medium text-sm sm:text-base text-[#00B307] flex gap-x-2"
        >
          View All
          <img src="img/heading/right-arrow.svg" alt="" srcSet="" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {latestProducts.map((item, index) => {
          return <ProductItem key={index} item={item} />;
        })}
      </div>
    </section>
  );
};

export default FeaturedProducts;
