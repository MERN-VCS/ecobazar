import { useContext, useEffect, useState } from "react";
import { SHOP_CONTEXT } from "../context/shopContext";
import { Link } from "react-router-dom";

const RelatedProducts = (props) => {
  let { category, subCategory } = props;
  let { products, currency } = useContext(SHOP_CONTEXT);
  let [data, setData] = useState([]);
  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => item.category === category);
      productsCopy = productsCopy.filter(
        (item) => item.subCategory === subCategory
      );
      setData(productsCopy);
    }
  }, [category, subCategory, products]);

  return (
    <>
      <section aria-labelledby="related-heading" className="mt-16 sm:mt-24">
        <h2 id="related-heading" className="text-lg font-medium text-gray-900">
          Customers also purchased
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data?.slice(0, 4)?.map((item, index) => {
            return (
              <div className="group relative" key={index}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={item?.name}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    srcSet={item.image[0]}
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`/product/${item?._id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {item?.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {category} / {subCategory}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {currency}
                    {item.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default RelatedProducts;
