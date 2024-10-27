const BreadCrumb = (props) => {
  let { currentPage } = props;
  return (
    <section
      id="breadcrumb"
      className="bg-[url('/img/bg/category.svg')] bg-top bg-no-repeat bg-cover py-12"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 xl:px-0 flex items-center">
        <ol className="flex items-center whitespace-nowrap flex-wrap">
          <li className="inline-flex items-center">
            <a
              className="flex items-center text-sm text-gray-500 hover:text-[#00B307] focus:outline-none focus:text-[#00B307] dark:text-neutral-500 dark:hover:text-[#00B307] dark:focus:text-[#00B307]"
              href="#"
            >
              <svg
                className="shrink-0 me-3 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Home
            </a>
            <svg
              className="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </li>
          <li
            className="inline-flex items-center text-sm font-semibold text-[#00B307] truncate dark:text-neutral-200"
            aria-current="page"
          >
            {currentPage}
          </li>
        </ol>
      </div>
    </section>
  );
};

export default BreadCrumb;
