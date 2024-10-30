import { useParams } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import { useContext, useEffect, useState } from "react";
import { SHOP_CONTEXT } from "../context/shopContext";

const Product = () => {
  let { productId } = useParams();
  let { products, currency } = useContext(SHOP_CONTEXT);
  let [data, setData] = useState({});
  let [defaultImage, setDefaultImage] = useState("");
  let [size, setSize] = useState("");
  useEffect(() => {
    products.map((item) => {
      if (item._id === productId) {
        setData(item);
        setDefaultImage(item.image[0]);
        return false;
      }
    });
  }, [productId, products]);

  return (
    <>
      <BreadCrumb currentPage={data?.name} />
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 xl:px-0 pt-10 lg:pt-20 pb-20">
        <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="flex justify-between">
              <h1 className="text-xl font-xl text-gray-900">{data?.name}</h1>
              <p className="text-xl font-medium text-gray-900">
                {currency}
                {data?.price}
              </p>
            </div>
            {/* <div className="mt-4">
              <h2 className="sr-only">Reviews</h2>
              <div className="flex items-center">
                <p className="text-sm text-gray-700">
                  3.9<span className="sr-only"> out of 5 stars</span>
                </p>
                <div className="ml-1 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="text-yellow-400 h-5 w-5 flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="text-yellow-400 h-5 w-5 flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="text-yellow-400 h-5 w-5 flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="text-yellow-400 h-5 w-5 flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="text-gray-200 h-5 w-5 flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
                  ·
                </div>
                <div className="ml-4 flex">
                  <a
                    href="#"
                    className="text-sm font-medium text-slate-600 hover:text-slate-500"
                  >
                    See all 512 reviews
                  </a>
                </div>
              </div>
            </div> */}
          </div>
          <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
            <h2 className="sr-only">Images</h2>
            <div className="">
              <img
                alt={data?.name}
                className="rounded-lg h-full w-full object-contain"
                srcSet={defaultImage}
              />
            </div>
            <div className="grid grid-cols-4 gap-2 mt-1">
              {data?.image?.map((item, index) => {
                return (
                  <div
                    className="cursor-pointer"
                    key={index}
                    onClick={() => {
                      setDefaultImage(item);
                    }}
                  >
                    <img alt={data?.name} srcSet={item} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-8 lg:col-span-5">
            <form>
              {/* <div>
                <h2 className="text-sm font-medium text-gray-900">Color</h2>
                <div
                  className="mt-2"
                  id="headlessui-radiogroup-:R29r4v5uba:"
                  role="radiogroup"
                  aria-labelledby="headlessui-label-:R1m9r4v5uba:"
                >
                  <label
                    className="sr-only"
                    id="headlessui-label-:R1m9r4v5uba:"
                    role="none"
                  >
                    Choose a color
                  </label>
                  <div className="flex items-center space-x-3" role="none">
                    <div
                      className="ring-gray-900 ring-2 relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                      id="headlessui-radiogroup-option-:R6m9r4v5uba:"
                      role="radio"
                      aria-checked="true"
                      tabIndex={0}
                      data-headlessui-state="checked"
                      aria-labelledby="headlessui-label-:R1mm9r4v5uba:"
                    >
                      <span
                        className="sr-only"
                        id="headlessui-label-:R1mm9r4v5uba:"
                      >
                        Black
                      </span>
                      <span
                        aria-hidden="true"
                        className="bg-gray-900 h-8 w-8 rounded-full border border-black border-opacity-10"
                      />
                    </div>
                    <div
                      className="ring-gray-400 relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                      id="headlessui-radiogroup-option-:Ram9r4v5uba:"
                      role="radio"
                      aria-checked="false"
                      tabIndex={-1}
                      data-headlessui-state=""
                      aria-labelledby="headlessui-label-:R1qm9r4v5uba:"
                    >
                      <span
                        className="sr-only"
                        id="headlessui-label-:R1qm9r4v5uba:"
                      >
                        Heather Grey
                      </span>
                      <span
                        aria-hidden="true"
                        className="bg-gray-400 h-8 w-8 rounded-full border border-black border-opacity-10"
                      />
                    </div>
                  </div>
                </div>
              </div> */}
              {/* mt-8 */}
              <div className="">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-900">Size</h2>
                  <a
                    href="#"
                    className="text-sm font-medium text-slate-600 hover:text-slate-500"
                  >
                    See sizing chart
                  </a>
                </div>
                <div
                  className="mt-2"
                  id="headlessui-radiogroup-:R2hr4v5uba:"
                  role="radiogroup"
                  aria-labelledby="headlessui-label-:R1mhr4v5uba:"
                >
                  <label
                    className="sr-only"
                    id="headlessui-label-:R1mhr4v5uba:"
                    role="none"
                  >
                    Choose a size
                  </label>
                  <div
                    className="grid grid-cols-3 gap-3 sm:grid-cols-6"
                    role="none"
                  >
                    {data?.sizes?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => {
                            setSize(item);
                          }}
                          className={`cursor-pointer focus:outline-none border-[#00B307]    flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1 ${
                            size === item
                              ? "bg-[#00B307] text-white"
                              : "bg-white text-gray-900"
                          }`}
                        >
                          <span>{item}</span>
                        </div>
                      );
                    })}
                    {/* <div
                      className="cursor-pointer focus:outline-none border-[#00B307] bg-white text-gray-900 hover:bg-gray-50 flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1"
                      id="headlessui-radiogroup-option-:R6mhr4v5uba:"
                      role="radio"
                      aria-checked="false"
                      tabIndex={-1}
                      data-headlessui-state=""
                      aria-labelledby="headlessui-label-:R16mhr4v5uba:"
                    >
                      <span id="headlessui-label-:R16mhr4v5uba:">XXS</span>
                    </div>
                    <div
                      className="cursor-pointer focus:outline-none border-[#00B307] bg-white text-gray-900 hover:bg-gray-50 flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1"
                      id="headlessui-radiogroup-option-:Ramhr4v5uba:"
                      role="radio"
                      aria-checked="false"
                      tabIndex={-1}
                      data-headlessui-state=""
                      aria-labelledby="headlessui-label-:R1amhr4v5uba:"
                    >
                      <span id="headlessui-label-:R1amhr4v5uba:">XS</span>
                    </div>
                    <div
                      className="cursor-pointer focus:outline-none border-transparent bg-[#00B307] text-white hover:bg-[#00B307] flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1"
                      id="headlessui-radiogroup-option-:Remhr4v5uba:"
                      role="radio"
                      aria-checked="true"
                      tabIndex={0}
                      data-headlessui-state="checked"
                      aria-labelledby="headlessui-label-:R1emhr4v5uba:"
                    >
                      <span id="headlessui-label-:R1emhr4v5uba:">S</span>
                    </div>
                    <div
                      className="cursor-pointer focus:outline-none border-[#00B307] bg-white text-gray-900 hover:bg-gray-50 flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1"
                      id="headlessui-radiogroup-option-:Rimhr4v5uba:"
                      role="radio"
                      aria-checked="false"
                      tabIndex={-1}
                      data-headlessui-state=""
                      aria-labelledby="headlessui-label-:R1imhr4v5uba:"
                    >
                      <span id="headlessui-label-:R1imhr4v5uba:">M</span>
                    </div>
                    <div
                      className="cursor-pointer focus:outline-none border-[#00B307] bg-white text-gray-900 hover:bg-gray-50 flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1"
                      id="headlessui-radiogroup-option-:Rmmhr4v5uba:"
                      role="radio"
                      aria-checked="false"
                      tabIndex={-1}
                      data-headlessui-state=""
                      aria-labelledby="headlessui-label-:R1mmhr4v5uba:"
                    >
                      <span id="headlessui-label-:R1mmhr4v5uba:">L</span>
                    </div>
                    <div
                      className="cursor-not-allowed opacity-25 border-gray-200 bg-white text-gray-900 hover:bg-gray-50 flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1"
                      id="headlessui-radiogroup-option-:Rqmhr4v5uba:"
                      role="radio"
                      aria-checked="false"
                      aria-disabled="true"
                      tabIndex={-1}
                      data-headlessui-state="disabled"
                      aria-labelledby="headlessui-label-:R1qmhr4v5uba:"
                    >
                      <span id="headlessui-label-:R1qmhr4v5uba:">XL</span>
                    </div> */}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-[#00B307] px-8 py-3 text-base font-medium text-white hover:bg-[#00B307] "
              >
                Add to cart
              </button>
            </form>
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Description</h2>
              <div className="prose prose-sm mt-4 text-gray-500">
                <p>{data?.description}</p>
              </div>
            </div>
            {/* <div className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="text-sm font-medium text-gray-900">
                Fabric &amp; Care
              </h2>
              <div className="prose prose-sm mt-4 text-gray-500">
                <ul role="list">
                  <li>Only the best materials</li>
                  <li>Ethically and locally made</li>
                  <li>Pre-washed and pre-shrunk</li>
                  <li>Machine wash cold with similar colors</li>
                </ul>
              </div>
            </div> */}
            <section aria-labelledby="policies-heading" className="mt-10">
              <h2 id="policies-heading" className="sr-only">
                Our Policies
              </h2>
              <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                  <dt>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64"
                      />
                    </svg>
                    <span className="mt-4 text-sm font-medium text-gray-900">
                      International delivery
                    </span>
                  </dt>
                  <dd className="mt-1 text-sm text-gray-500">
                    Get your order in 2 days
                  </dd>
                </div>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                  <dt>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span className="mt-4 text-sm font-medium text-gray-900">
                      Loyalty rewards
                    </span>
                  </dt>
                  <dd className="mt-1 text-sm text-gray-500">
                    Dont look at other tees
                  </dd>
                </div>
              </dl>
            </section>
          </div>
        </div>
        {/* <section aria-labelledby="reviews-heading" className="mt-16 sm:mt-24">
          <h2
            id="reviews-heading"
            className="text-lg font-medium text-gray-900"
          >
            Recent reviews
          </h2>
          <div className="mt-6 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10">
            <div className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
              <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                <div className="flex items-center xl:col-span-1">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="text-yellow-400 h-5 w-5 flex-shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="text-yellow-400 h-5 w-5 flex-shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="text-yellow-400 h-5 w-5 flex-shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="text-yellow-400 h-5 w-5 flex-shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="text-yellow-400 h-5 w-5 flex-shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-sm text-gray-700">
                    5<span className="sr-only"> out of 5 stars</span>
                  </p>
                </div>
                <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                  <h3 className="text-sm font-medium text-gray-900">
                    Cant say enough good things
                  </h3>
                  <div className="mt-3 space-y-6 text-sm text-gray-500">
                    <p>
                      I was really pleased with the overall shopping experience.
                      My order even included a little personal, handwritten
                      note, which delighted me!
                    </p>
                    <p>
                      The product quality is amazing, it looks and feel even
                      better than I had anticipated. Brilliant stuff! I would
                      gladly recommend this store to my friends. And, now that I
                      think of it... I actually have, many times!
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                <p className="font-medium text-gray-900">Risako M</p>
                <time
                  dateTime="2021-01-06"
                  className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                >
                  May 16, 2021
                </time>
              </div>
            </div>
          </div>
        </section> */}
        <section aria-labelledby="related-heading" className="mt-16 sm:mt-24">
          <h2
            id="related-heading"
            className="text-lg font-medium text-gray-900"
          >
            Customers also purchased
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt="Front of men's Basic Tee in white."
                  loading="lazy"
                  width={1216}
                  height={1680}
                  decoding="async"
                  data-nimg={1}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  srcSet="https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg 2x"
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      Basic Tee
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Aspen White</p>
                </div>
                <p className="text-sm font-medium text-gray-900">35 €</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Product;
