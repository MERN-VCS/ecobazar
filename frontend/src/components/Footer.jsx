import { Link } from "react-router-dom";

const Footer = () => {
  let submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <footer id="footer" className="bg-[#161C28] py-10 lg:pb-8 pt-[80px]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 xl:px-0 space-y-20">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Subscribe Newsletter for Updates
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-500 text-base">
            Delve Deeper into Current Affairs with Our Informative Newsletter
            Bringing You Comprehensive Insights and Breaking News Highlights
          </p>
          <form action="#" onSubmit={submitForm}>
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label
                  htmlFor="email"
                  className="hidden mb-2 text-sm font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <img
                    className="w-4 h-4 text-gray-500"
                    src="img/footer/email.svg"
                    alt="email-icon"
                  />
                </div>
                <input
                  className="block p-3 pl-9 w-full text-sm text-gray-900 bg-white rounded-lg border border-[#00B307] sm:rounded-none sm:rounded-l-lg focus:ring-[#00B307] focus:border-[#00B307] outline-none caret-[#00B307]"
                  placeholder="Enter your email"
                  id="email"
                  autoComplete="off"
                  type="email"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-[#00B307] border-[#00B307] sm:rounded-none sm:rounded-r-lg hover:bg-[#00B307]"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer ">
              We care about the protection of your data.
              <Link className="font-medium text-[#00B307] ml-1" to="#">
                Read our Privacy Policy
              </Link>
              .
            </div>
          </form>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Popular Picks
              </h2>
              <ul className="text-gray-500">
                <li className="mb-4">
                  <Link className="hover:text-[#00B307]" to="#">
                    Culture
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="hover:text-[#00B307]" to="#">
                    Economy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="hover:text-[#00B307]" to="#">
                    Education
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="hover:text-[#00B307]" to="#">
                    Entertainment
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Exclusive Deals
              </h2>
              <ul className="text-gray-500">
                <li className="mb-4">
                  <Link className="hover:text-[#00B307]" to="#">
                    Fashion
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="hover:text-[#00B307]" to="#">
                    Finance
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="hover:text-[#00B307]" to="#">
                    Fitness
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="hover:text-[#00B307]" to="#">
                    Food
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                New Arrivals
              </h2>
              <ul className="text-gray-500">
                <li className="mb-4">
                  <Link className="hover:text-[#00B307]" to="#">
                    Health
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="hover:text-[#00B307]" to="#">
                    History
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="hover:text-[#00B307]" to="#">
                    Movies
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="hover:text-[#00B307]" to="#">
                    Music
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                International
              </h2>
              <ul className="text-gray-500">
                <li className="mb-4">
                  <div className="flex py-4 first:pt-0 last:pb-0 items-center">
                    <img
                      className="h-6 w-6 rounded-full object-cover"
                      src="img/footer/bangladesh.svg"
                      alt="Bangladesh flag"
                    />
                    <Link
                      className="ml-3 overflow-hidden hover:text-[#00B307]"
                      to="#"
                    >
                      Bangladesh
                    </Link>
                  </div>
                </li>
                <li className="mb-4">
                  <div className="flex py-4 first:pt-0 last:pb-0 items-center">
                    <img
                      className="h-6 w-6 rounded-full object-cover"
                      src="img/footer/pakistan.svg"
                      alt="Pakistan flag"
                    />
                    <Link
                      className="ml-3 overflow-hidden hover:text-[#00B307]"
                      to="#"
                    >
                      Pakistan
                    </Link>
                  </div>
                </li>
                <li className="mb-4">
                  <div className="flex py-4 first:pt-0 last:pb-0 items-center">
                    <img
                      className="h-6 w-6 rounded-full object-cover"
                      src="img/footer/myanmar.svg"
                      alt="myanmar flag"
                    />
                    <Link
                      className="ml-3 overflow-hidden hover:text-[#00B307]"
                      to="#"
                    >
                      Myanmar
                    </Link>
                  </div>
                </li>
                <li className="mb-4">
                  <div className="flex py-4 first:pt-0 last:pb-0 items-center">
                    <img
                      className="h-6 w-6 rounded-full object-cover"
                      src="img/footer/india.svg"
                      alt="india flag"
                    />
                    <Link
                      className="ml-3 overflow-hidden hover:text-[#00B307]"
                      to="#"
                    >
                      India
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Get Our App
              </h2>
              <ul className="text-gray-500">
                <li className="mb-4">
                  <Link className="" to="#">
                    <img src="img/footer/googleplay.svg" alt="play store" />
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="" to="#">
                    <img src="img/footer/appstore.svg" alt="app store" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-6 border-gray-500 sm:mx-auto lg:my-10" />
          <div className="flex flex-col-reverse md:flex-row gap-y-4 justify-between items-center">
            <span className="block text-sm text-center text-gray-500">
              © 2021- 2024
              <Link className="text-[#00B307] ml-1" to="#">
                ecobazar™
              </Link>
              . All Rights Reserved.
            </span>
            <Link
              className="flex justify-center items-center text-2xl font-semibold text-gray-900"
              to="#"
            >
              <img
                alt="Payment Methods"
                src="img/footer/payment-methods.svg"
                className="rounded"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
