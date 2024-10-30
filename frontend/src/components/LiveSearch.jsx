import { useContext, useEffect, useRef, useState } from "react";
import { SHOP_CONTEXT } from "../context/shopContext";
import { Link, useNavigate } from "react-router-dom";

const LiveSearch = () => {
  const navigateTo = useNavigate();
  let { products } = useContext(SHOP_CONTEXT);
  let [liveData, setLiveData] = useState([]);
  const searchBoxRef = useRef(null);
  const inputBoxRef = useRef();

  let searchData = (query) => {
    if (query?.length) {
      let filteredLiveData = products?.filter((item) =>
        item?.name?.toLowerCase().includes(query?.toLowerCase())
      );
      setLiveData(filteredLiveData);
    } else {
      setLiveData([]);
    }
  };

  let handleClickOutside = (event) => {
    if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
      setLiveData([]);
    }
  };
  // whenPressEnterButton
  let whenOnSubmit = (e) => {
    e.preventDefault();
    let searchQuery = inputBoxRef.current.value;
    navigateTo(`/collection?query=${searchQuery}`);
    setLiveData([]);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <form
        className=" order-3 w-full md:w-[50%] md:order-2 relative"
        onSubmit={(e) => {
          whenOnSubmit(e);
        }}
      >
        <div className="flex">
          {/* rounded-none rounded-l-lg */}
          <input
            ref={inputBoxRef}
            className="block p-3 pl-4 w-full text-sm text-gray-900 bg-white border border-[#00B307]  focus:ring-[#00B307] focus:border-[#00B307] outline-none caret-[#00B307]"
            placeholder="Search Here .."
            id="search"
            type="text"
            autoComplete="off"
            onChange={(e) => {
              searchData(e.target.value);
            }}
            onClick={(e) => {
              searchData(e.target.value);
            }}
          />
          {/* rounded-none rounded-r-l */}
          <button
            type="submit"
            className="px-5 text-sm font-medium text-center text-white g border border-[#00B307] cursor-pointer bg-[#00B307]"
          >
            <img
              className="w-7 h-7"
              src="/img/header/search.svg"
              alt="search icon"
            />
          </button>
        </div>
        <div
          ref={searchBoxRef}
          id="liveSearchData"
          className={`bg-white absolute z-10 w-full ${
            liveData?.length === 0 ? "hidden" : "block"
          }`}
        >
          <ul className="py-3 px-5 border border-t-0 border-[#00B307] h-[450px] overflow-scroll">
            {liveData?.map((item, index) => (
              <li
                key={index}
                className={`${
                  index === 0 ? "mt-0" : "mt-3 pt-3 border-t border-[#00B307]"
                }`}
              >
                <Link
                  className="flex items-center"
                  to={`/product/${item?._id}`}
                >
                  <img className="h-20" src={item?.image[0]} alt={item?.name} />
                  <div className="ml-5">
                    <h3 className="text-lg font-semibold">{item?.name}</h3>
                    <p>
                      <span className="font-semibold">Price: </span>
                      {item?.price}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </form>
    </>
  );
};

export default LiveSearch;
