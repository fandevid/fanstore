"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

function generatHeader(type, label, children, inputOpt) {
  const router = useRouter();
  if (type == "custom") {
    return children;
  } else if (type == "search") {
    return (
      <form>
        <div className="relative">
          <button type="submit" className="absolute flex h-full aspect-square">
            <i className="bx bx-search-alt text-lg m-auto" />
          </button>
          <input
            type="search"
            para
            placeholder={inputOpt?.placeholder ?? "Search"}
            className="py-2 ps-10 pe-3 border-2 w-full duration-500 focus:outline-none focus:border-green-600 border-gray-200 rounded-lg box-border"
          />
        </div>
      </form>
    );
  } else if (type == "label" || !type) {
    return (
      <div className="flex gap-3 align-middle h-10 ">
        <button
          onClick={router.back}
          className="bg-gray-100 rounded bg-opacity-50 w-8 h-8 flex my-auto"
        >
          <i className="bx bx-chevron-left m-auto" />
        </button>
        <h2 className="text-lg font-semibold my-auto">{label ?? "FanStore"}</h2>
      </div>
    );
  }
}

/**
 *
 * @param {String} type label(default) | search | custom
 * @param {String} label The Heading will show if type is "label"
 * @param {Object} inputOpt The option of search input
 * @returns
 */
export default function NavbarTop({ type, label, children, inputOpt }) {
  return (
    <nav className="sticky top-0 left-0 right-0 bg-white p-2 z-50">
      <div className="container">
        <div className="flex gap-3 justify-end items-center h-12 text-slate-700">
          <div className="">
            {generatHeader(type, label, children, inputOpt)}
          </div>
          <Link href={"/notification"} className=" ms-auto">
            <i className="bx bx-fw bx-bell" />
          </Link>
          <Link className="" href={"/cart"}>
            <i className="bx bx-fw bx-cart-alt" />
          </Link>
          <div className="">
            <i className="bx bx-fw bx-menu" />
          </div>
        </div>
      </div>
    </nav>
  );
}
