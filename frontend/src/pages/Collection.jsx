import { useContext, useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import { SHOP_CONTEXT } from "../context/shopContext";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  let { products } = useContext(SHOP_CONTEXT);
  let [filterProducts, setFilterProducts] = useState([]);
  let [category, setCategory] = useState([]);
  let [subCategory, setSubCategory] = useState([]);
  let [sortType, setSortType] = useState("relavent");

  let toggleCategory = (e) => {
    if (category.includes(e.target.value.toLowerCase())) {
      setCategory((prev) => {
        return prev.filter((item) => item !== e.target.value);
      });
    } else {
      setCategory((prev) => {
        return [...prev, e.target.value.toLowerCase()];
      });
    }
  };

  let toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value.toLowerCase())) {
      setSubCategory((prev) => {
        return prev.filter((item) => item !== e.target.value);
      });
    } else {
      setSubCategory((prev) => {
        return [...prev, e.target.value.toLowerCase()];
      });
    }
  };

  let applyFilter = () => {
    let copyProducts = products.slice();
    if (category.length > 0) {
      copyProducts = copyProducts.filter((item) => {
        return category.includes(item.category.toLowerCase());
      });
    }
    if (subCategory.length > 0) {
      copyProducts = copyProducts.filter((item) => {
        return subCategory.includes(item.subCategory.toLowerCase());
      });
    }
    setFilterProducts(copyProducts);
  };

  let applySort = () => {
    let existingFilter = [...filterProducts];
    if (sortType === "low-high") {
      existingFilter = existingFilter.sort((a, b) => a.price - b.price);
      setFilterProducts(existingFilter);
    } else if (sortType === "high-low") {
      existingFilter = existingFilter.sort((a, b) => b.price - a.price);
      setFilterProducts(existingFilter);
    } else {
      applyFilter();
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);

  useEffect(() => {
    applySort();
  }, [sortType]);

  return (
    <>
      <BreadCrumb currentPage="Shop" />
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 xl:px-0 my-10 lg:my-16">
        <div className="grid grid-cols-5 lg:grid-cols-7 xl:grid-cols-5 gap-y-10 lg:gap-x-10">
          <div className="col-span-5 lg:col-span-2 xl:col-span-1 space-y-10">
            <details className="group space-y-3" open="true">
              <summary className="flex justify-between items-center  cursor-pointer list-none not-italic font-medium text-xl leading-[30px] text-[#1A1A1A]">
                <span>All Categories</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height={24}
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <div className="text-neutral-600 group-open:animate-fadeIn space-y-3">
                <div className="flex items-center ">
                  <input
                    id="c-1"
                    className="h-4 w-4 rounded accent-green-700"
                    type="checkbox"
                    value={"men"}
                    onChange={(e) => {
                      toggleCategory(e);
                    }}
                  />
                  <label
                    htmlFor="c-1"
                    className="ml-3 not-italic font-normal text-sm leading-[21px] text-[#1A1A1A]"
                  >
                    Men
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="c-2"
                    className="h-4 w-4 rounded accent-green-700"
                    type="checkbox"
                    value={"women"}
                    onChange={(e) => {
                      toggleCategory(e);
                    }}
                  />
                  <label
                    htmlFor="c-2"
                    className="ml-3 not-italic font-normal text-sm leading-[21px] text-[#1A1A1A]"
                  >
                    Women
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="c-3"
                    className="h-4 w-4 rounded accent-green-700"
                    type="checkbox"
                    value={"kids"}
                    onChange={(e) => {
                      toggleCategory(e);
                    }}
                  />
                  <label
                    htmlFor="c-3"
                    className="ml-3 not-italic font-normal text-sm leading-[21px] text-[#1A1A1A]"
                  >
                    Kids
                  </label>
                </div>
              </div>
            </details>
            <details className="group space-y-3" open="true">
              <summary className="flex justify-between items-center  cursor-pointer list-none not-italic font-medium text-xl leading-[30px] text-[#1A1A1A]">
                <span>All Categories</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height={24}
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <div className="text-neutral-600 group-open:animate-fadeIn space-y-3">
                <div className="flex items-center ">
                  <input
                    id="c2-1"
                    className="h-4 w-4 rounded accent-green-700"
                    type="checkbox"
                    value={"topwear"}
                    onChange={(e) => {
                      toggleSubCategory(e);
                    }}
                  />
                  <label
                    htmlFor="c2-1"
                    className="ml-3 not-italic font-normal text-sm leading-[21px] text-[#1A1A1A]"
                  >
                    Topwear
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="c2-2"
                    className="h-4 w-4 rounded accent-green-700"
                    type="checkbox"
                    value={"bottomwear"}
                    onChange={(e) => {
                      toggleSubCategory(e);
                    }}
                  />
                  <label
                    htmlFor="c2-2"
                    className="ml-3 not-italic font-normal text-sm leading-[21px] text-[#1A1A1A]"
                  >
                    Bottomwear
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="c2-3"
                    className="h-4 w-4 rounded accent-green-700"
                    type="checkbox"
                    value={"winter"}
                    onChange={(e) => {
                      toggleSubCategory(e);
                    }}
                  />
                  <label
                    htmlFor="c2-3"
                    className="ml-3 not-italic font-normal text-sm leading-[21px] text-[#1A1A1A]"
                  >
                    Winter
                  </label>
                </div>
              </div>
            </details>
            <details className="group space-y-3" open="">
              <summary className="flex justify-between items-center  cursor-pointer list-none not-italic font-medium text-xl leading-[30px] text-[#1A1A1A]">
                <span>Price</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height={24}
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <div className="text-neutral-600 group-open:animate-fadeIn">
                <label htmlFor="steps-range-slider-usage" className="sr-only">
                  Example range
                </label>
                <input
                  className="w-full accent-green-700 bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:-mt-0.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(37,99,235,1)] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-150 [&::-webkit-slider-thumb]:ease-in-out [&::-webkit-slider-thumb]:dark:bg-neutral-700 [&::-moz-range-thumb]:w-2.5 [&::-moz-range-thumb]:h-2.5 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-blue-600 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:transition-all [&::-moz-range-thumb]:duration-150 [&::-moz-range-thumb]:ease-in-out [&::-webkit-slider-runnable-track]:w-full [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:bg-gray-100 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:dark:bg-neutral-700 [&::-moz-range-track]:w-full [&::-moz-range-track]:h-2 [&::-moz-range-track]:bg-gray-100 [&::-moz-range-track]:rounded-full"
                  id="steps-range-slider-usage"
                  aria-orientation="horizontal"
                  min={0}
                  max={500}
                  step={1}
                  type="range"
                />
                <p className="not-italic font-normal text-sm leading-[21px] text-[#4D4D4D] mt-3">
                  Price: <span className="font-bold">50 — 1,500</span>
                </p>
              </div>
            </details>
            <details className="group space-y-3" open="">
              <summary className="flex justify-between items-center  cursor-pointer list-none not-italic font-medium text-xl leading-[30px] text-[#1A1A1A]">
                <span>Rating</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height={24}
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <div className="text-neutral-600 group-open:animate-fadeIn">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      id="r-1"
                      className="h-4 w-4 rounded accent-green-700"
                      type="checkbox"
                      defaultValue="new-arrivals"
                      name="category[]"
                    />
                    <label htmlFor="r-1" className="ml-3 text-sm text-gray-600">
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
                          src="img/rating/full.svg"
                          alt="yellow-star"
                        />
                      </div>
                    </label>
                    <p className="ml-3 not-italic font-normal text-sm leading-[21px] text-[#1A1A1A]">
                      5.0
                    </p>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="r-2"
                      className="h-4 w-4 rounded accent-green-700"
                      type="checkbox"
                      defaultValue="new-arrivals"
                      name="category[]"
                    />
                    <label htmlFor="r-2" className="ml-3 text-sm text-gray-600">
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
                    </label>
                    <p className="ml-3 not-italic font-normal text-sm leading-[21px] text-[#1A1A1A]">
                      4.0 &amp; up
                    </p>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="r-3"
                      className="h-4 w-4 rounded accent-green-700"
                      type="checkbox"
                      defaultValue="new-arrivals"
                      name="category[]"
                    />
                    <label htmlFor="r-3" className="ml-3 text-sm text-gray-600">
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
                          src="img/rating/blank.svg"
                          alt="blank-star"
                        />
                        <img
                          className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                          src="img/rating/blank.svg"
                          alt="blank-star"
                        />
                      </div>
                    </label>
                    <p className="ml-3 not-italic font-normal text-sm leading-[21px] text-[#1A1A1A]">
                      3.0 &amp; up
                    </p>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="r-4"
                      className="h-4 w-4 rounded accent-green-700"
                      type="checkbox"
                      defaultValue="new-arrivals"
                      name="category[]"
                    />
                    <label htmlFor="r-4" className="ml-3 text-sm text-gray-600">
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
                          src="img/rating/blank.svg"
                          alt="blank-star"
                        />
                        <img
                          className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                          src="img/rating/blank.svg"
                          alt="blank-star"
                        />
                        <img
                          className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                          src="img/rating/blank.svg"
                          alt="blank-star"
                        />
                      </div>
                    </label>
                    <p className="ml-3 not-italic font-normal text-sm leading-[21px] text-[#1A1A1A]">
                      2.0 &amp; up
                    </p>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="r-5"
                      className="h-4 w-4 rounded accent-green-700"
                      type="checkbox"
                      defaultValue="new-arrivals"
                      name="category[]"
                    />
                    <label htmlFor="r-5" className="ml-3 text-sm text-gray-600">
                      <div className="flex items-center space-x-px">
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
                        <img
                          className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                          src="img/rating/blank.svg"
                          alt="blank-star"
                        />
                        <img
                          className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                          src="img/rating/blank.svg"
                          alt="blank-star"
                        />
                        <img
                          className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                          src="img/rating/blank.svg"
                          alt="blank-star"
                        />
                      </div>
                    </label>
                    <p className="ml-3 not-italic font-normal text-sm leading-[21px] text-[#1A1A1A]">
                      1.0 &amp; up
                    </p>
                  </div>
                </div>
              </div>
            </details>
          </div>
          <div className="col-span-5 lg:col-span-5 xl:col-span-4">
            <div className="flex flex-row flex-wrap content-center justify-between items-center mb-5 gap-5">
              <p className="not-italic text-base leading-[19px] text-[#1A1A1A]">
                <span className="font-semibold">{filterProducts?.length}</span>{" "}
                Results Found
              </p>
              <div className="flex items-center gap-x-3">
                <p>Sort by:</p>
                <select
                  className="h-[40px] w-[120px] border rounded border-solid border-[#E6E6E6]"
                  onChange={(e) => setSortType(e.target.value)}
                >
                  <option value={"relavent"}>Relavent</option>
                  <option value={"low-high"}>Low to High</option>
                  <option value={"high-low"}>High to Low</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  gap-6 xl:grid-cols-3">
              {filterProducts.map((item, index) => {
                return <ProductItem key={index} item={item} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collection;
