const SiteFeature = () => {
  return (
    <section
      id="feature"
      className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 xl:px-0"
    >
      <div className="flex flex-col md:flex-row flex-wrap md:justify-between">
        <div className="w-full md:w-1/2 lg:w-auto group p-[40px] flex flex-col flex-wrap items-center gap-y-2 ">
          <div className="flex justify-center items-center bg-[url('img/feature/bg-low.svg')] group-hover:bg-[url('img/feature/bg-habby.svg')] h-[72px] w-[72px] bg-no-repeat bg-cover transition-all duration-500 ease-in-out">
            <img
              className="block group-hover:hidden transition-opacity duration-500 ease-in-out"
              src="img/feature/free-shipping-green.svg"
              alt="Free Shipping Green"
            />
            <img
              className="hidden group-hover:block transition-opacity duration-500 ease-in-out"
              src="img/feature/free-shipping-white.svg"
              alt="Free Shipping White"
            />
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <h3 className="not-italic font-semibold text-base text-[#1A1A1A] transition-colors duration-500 ease-in-out group-hover:text-black">
              Free Shipping
            </h3>
            <p className="not-italic font-normal text-sm text-[#999999] transition-colors duration-500 ease-in-out group-hover:text-black">
              Free shipping on all your order
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-auto group p-[40px] flex flex-col flex-wrap items-center gap-y-2 border-t border-[#00B307] md:border-0">
          <div className="flex justify-center items-center bg-[url('img/feature/bg-low.svg')] group-hover:bg-[url('img/feature/bg-habby.svg')] h-[72px] w-[72px] bg-no-repeat bg-cover transition-all duration-500 ease-in-out ">
            <img
              className="block group-hover:hidden transition-opacity duration-500 ease-in-out"
              src="img/feature/great-support-green.svg"
              alt="Free Shipping Green"
            />
            <img
              className="hidden group-hover:block transition-opacity duration-500 ease-in-out"
              src="img/feature/great-support-white.svg"
              alt="Free Shipping White"
            />
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <h3 className="not-italic font-semibold text-base text-[#1A1A1A] transition-colors duration-500 ease-in-out group-hover:text-black">
              Customer Support 24/7
            </h3>
            <p className="not-italic font-normal text-sm text-[#999999] transition-colors duration-500 ease-in-out group-hover:text-black">
              Instant access to Support
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-auto group p-[40px] flex flex-col flex-wrap items-center gap-y-2 border-t border-[#00B307] lg:border-0">
          <div className="flex justify-center items-center bg-[url('img/feature/bg-low.svg')] group-hover:bg-[url('img/feature/bg-habby.svg')] h-[72px] w-[72px] bg-no-repeat bg-cover transition-all duration-500 ease-in-out">
            <img
              className="block group-hover:hidden transition-opacity duration-500 ease-in-out"
              src="img/feature/secure-payment-green.svg"
              alt="Free Shipping Green"
            />
            <img
              className="hidden group-hover:block transition-opacity duration-500 ease-in-out"
              src="img/feature/secure-payment-white.svg"
              alt="Free Shipping White"
            />
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <h3 className="not-italic font-semibold text-base text-[#1A1A1A] transition-colors duration-500 ease-in-out group-hover:text-black">
              100% Secure Payment
            </h3>
            <p className="not-italic font-normal text-sm text-[#999999] transition-colors duration-500 ease-in-out group-hover:text-black">
              We ensure your money is save
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-auto group p-[40px] flex flex-col flex-wrap items-center gap-y-2 border-t border-[#00B307] xl:border-0">
          <div className="flex justify-center items-center bg-[url('img/feature/bg-low.svg')] group-hover:bg-[url('img/feature/bg-habby.svg')] h-[72px] w-[72px] bg-no-repeat bg-cover transition-all duration-500 ease-in-out">
            <img
              className="block group-hover:hidden transition-opacity duration-500 ease-in-out"
              src="img/feature/money-back-green.svg"
              alt="Free Shipping Green"
            />
            <img
              className="hidden group-hover:block transition-opacity duration-500 ease-in-out"
              src="img/feature/money-back-white.svg"
              alt="Free Shipping White"
            />
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <h3 className="not-italic font-semibold text-base text-[#1A1A1A] transition-colors duration-500 ease-in-out group-hover:text-black">
              Money-Back Guarantee
            </h3>
            <p className="not-italic font-normal text-sm text-[#999999] transition-colors duration-500 ease-in-out group-hover:text-black">
              30 Days Money-Back Guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteFeature;
