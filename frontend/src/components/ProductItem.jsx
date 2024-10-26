import { useContext } from "react";
import { Link } from "react-router-dom";
import { SHOP_CONTEXT } from "../context/shopContext";

const ProductItem = (props) => {
  let { currency } = useContext(SHOP_CONTEXT);
  let { item } = props;

  return (
    <div className="group relative border  border-[#E6E6E6] rounded-[5px] hover:shadow-[0px_0px_6px_rgba(32,181,38,0.32)]">
      <div>
        <div className="flex space-x-2 absolute left-3 top-3">
          <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-white uppercase bg-[#EA4B48] rounded-full">
            New
          </p>
          <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-white uppercase bg-[#00B307] rounded-full">
            Sale
          </p>
        </div>
        <img
          className="object-cover w-full h-full"
          src={item?.image[0]}
          alt="vegetables"
        />
      </div>
      <div className="space-y-1 p-5">
        <Link
          className="not-italic text-base font-semibold text-[#4D4D4D] group-hover:text-[#2C742F]"
          to={`/product/${item?._id}`}
        >
          {item?.name}
        </Link>
        <div className="flex justify-between items-center flex-wrap flex-row">
          <div>
            <div className="flex space-x-2">
              <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                {currency}

                {item?.price}
              </p>
              {/* <del className="mt-0.5 text-xs sm:text-sm font-bold text-gray-500">
                $99.00
              </del> */}
            </div>
            <div className="flex items-center space-x-px">
              <img
                className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                src="img/rating/full.svg"
                alt="yellow-star"
              />
              <img
                className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                src="img/rating/full.svg"
                alt="yellow-star"
              />
              <img
                className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                src="img/rating/full.svg"
                alt="yellow-star"
              />
              <img
                className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                src="img/rating/full.svg"
                alt="yellow-star"
              />
              <img
                className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                src="img/rating/blank.svg"
                alt="blank-star"
              />
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="cursor-pointer">
              <img
                src="img/wishlist/heart-green.svg"
                className="hidden w-[26px] h-[26px]"
                alt="wishlist"
              />
              <img
                src="img/wishlist/heart-black.svg"
                className="w-[26px] h-[26px]"
                alt="wishlist"
              />
            </div>
            <Link className="cursor-pointer" href="/cart">
              <img
                src="img/cart/bag-green.svg"
                className="hidden w-[24px] h-[24px]"
                alt="Cart"
              />
              <img
                src="img/cart/bag-black.svg"
                className="w-[24px] h-[24px]"
                alt="Cart"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
