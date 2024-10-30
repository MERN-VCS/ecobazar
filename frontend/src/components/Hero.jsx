import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section id="heroSlider">
      <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col relative w-full overflow-hidden bg-[url('img/bg/slider.svg')] bg-top bg-no-repeat py-[80px] md:py-[105px]">
        <input
          className="hidden peer/slider1"
          type="radio"
          id="slider1"
          name="slider"
        />
        <input
          className="hidden peer/slider2"
          type="radio"
          id="slider2"
          name="slider"
        />
        <input
          className="hidden peer/slider3"
          type="radio"
          id="slider3"
          name="slider"
        />
        <div className="relative w-full flex transition-transform duration-500 ease-in-out peer-checked/slider1:translate-x-0 peer-checked/slider2:translate-x-[-100%] peer-checked/slider3:translate-x-[-200%]">
          <div className="relative w-full flex-shrink-0 ">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 xl:px-0">
              <div className="flex flex-col items-center md:flex-row gap-12">
                <div className="w-full md:w-1/2">
                  <img
                    className="w-full"
                    src="/img/slider/image-1.svg"
                    alt="fruits"
                  />
                </div>
                <div className="space-y-4 md:space-y-6 w-full md:w-1/2">
                  <span className="not-italic  text-[14px] tracking-[0.02em] uppercasenot-italic font-medium text-sm  uppercase text-[#00B307]">
                    Welcome to Ecobazar
                  </span>
                  <h1 className="not-italic font-semibold text-4xl lg:text-5xl xl:text-7xl text-[#1A1A1A]">
                    Fresh &amp; Healthy Organic Food
                  </h1>
                  <h3 className="not-italic font-normal text-[32px] text-[#1A1A1A]">
                    Sale up to <span className="text-[#FF8A00]">30% OFF</span>
                  </h3>
                  <p className="not-italic font-normal text-sm text-[#808080]">
                    Free shipping on all your order. we deliver, you enjoy
                  </p>
                  <Link
                    className="flex gap-x-2 not-italic font-semibold text-base text-white bg-[#00b307] w-full md:w-[200px] h-[50px] items-center justify-center rounded-full"
                    to={"#"}
                  >
                    Shop now
                    <img src="/img/slider/right-arrow.svg" alt="right arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full flex-shrink-0 ">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 xl:px-0">
              <div className="flex flex-col items-center md:flex-row gap-12">
                <div className="w-full md:w-1/2">
                  <img
                    className="w-full"
                    src="/img/slider/image-2.png"
                    alt="fruits"
                  />
                </div>
                <div className="space-y-4 md:space-y-6 w-full md:w-1/2">
                  <span className="not-italic text-[14px] tracking-[0.02em] uppercasenot-italic font-medium text-sm  uppercase text-[#00B307]">
                    Welcome to Ecobazar
                  </span>
                  <h1 className="not-italic font-semibold text-4xl lg:text-5xl xl:text-7xl text-[#1A1A1A]">
                    Fresh &amp; Healthy Organic Food
                  </h1>
                  <h3 className="not-italic font-normal text-[32px] text-[#1A1A1A]">
                    Sale up to <span className="text-[#FF8A00]">30% OFF</span>
                  </h3>
                  <p className="not-italic font-normal text-sm text-[#808080]">
                    Free shipping on all your order. we deliver, you enjoy
                  </p>
                  <Link
                    className="flex gap-x-2 not-italic font-semibold text-base text-white bg-[#00b307] w-full md:w-[200px] h-[50px] items-center justify-center rounded-full"
                    to={"#"}
                  >
                    Shop now
                    <img src="/img/slider/right-arrow.svg" alt="right arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full flex-shrink-0 ">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 xl:px-0">
              <div className="flex flex-col items-center md:flex-row gap-12">
                <div className="w-full md:w-1/2">
                  <img
                    className="w-full"
                    src="/img/slider/image-3.svg"
                    alt="fruits"
                  />
                </div>
                <div className="space-y-4 md:space-y-6 w-full md:w-1/2">
                  <span className="not-italic font-medium text-[14px] tracking-[0.02em] uppercasenot-italic text-sm uppercase text-[#00B307]">
                    Welcome to Ecobazar
                  </span>
                  <h1 className="not-italic font-semibold text-4xl lg:text-5xl xl:text-7xl text-[#1A1A1A]">
                    Fresh &amp; Healthy Organic Food
                  </h1>
                  <h3 className="not-italic font-normal text-[32px] text-[#1A1A1A]">
                    Sale up to <span className="text-[#FF8A00]">30% OFF</span>
                  </h3>
                  <p className="not-italic font-normal text-sm text-[#808080]">
                    Free shipping on all your order. we deliver, you enjoy
                  </p>
                  <Link
                    className="flex gap-x-2 not-italic font-semibold text-base text-white bg-[#00b307] w-full md:w-[200px] h-[50px] items-center justify-center rounded-full"
                    to={"#"}
                  >
                    Shop now
                    <img src="/img/slider/right-arrow.svg" alt="right arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full flex justify-center gap-2 bottom-10">
          <label
            className="block w-3 h-3 bg-[#00B307] cursor-pointer opacity-50 z-10 transition-all duration-300 ease-in-out hover:scale-125 hover:opacity-100 peer-checked/slider1:opacity-100 peer-checked/slider1:w-10"
            htmlFor="slider1"
          />
          <label
            className="block w-3 h-3 bg-[#00B307] cursor-pointer opacity-50 z-10 transition-all duration-300 ease-in-out hover:scale-125 hover:opacity-100 peer-checked/slider2:opacity-100 peer-checked/slider2:w-10"
            htmlFor="slider2"
          />
          <label
            className="block w-3 h-3 bg-[#00B307] cursor-pointer opacity-50 z-10 transition-all duration-300 ease-in-out hover:scale-125 hover:opacity-100 peer-checked/slider3:opacity-100 peer-checked/slider3:w-10"
            htmlFor="slider3"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
