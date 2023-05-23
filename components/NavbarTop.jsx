"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavbarTop(params) {
  const { searchBar, label } = params;
  const router = useRouter();
  return (
    <nav className="sticky top-0 left-0 right-0 bg-white p-2 z-50">
      <div className="container">
        <div className="flex gap-3 justify-end align-middle text-gray-600">
          <div className="">
            {searchBar === false ? (
              <div className="flex gap-3 align-middle h-10 ">
                <button
                  onClick={router.back}
                  className="bg-gray-100 rounded bg-opacity-50 w-8 h-8 flex my-auto"
                >
                  <i className="bx bx-chevron-left m-auto" />
                </button>
                <h2 className="text-lg font-semibold my-auto">{label ?? ""}</h2>
              </div>
            ) : (
              <input
                type="search"
                placeholder="Cari Produk"
                className="py-2 px-3 border-2 w-full duration-500 focus:outline-none focus:border-green-600 border-gray-200 rounded-lg box-border"
              />
            )}
          </div>
          <Link href={"/notification"} className="my-auto ms-auto">
            <i className="bx bx-fw bx-bell" />
          </Link>
          <Link className="my-auto" href={"/cart"}>
            <i className="bx bx-fw bx-cart-alt" />
          </Link>
          <div className="my-auto">
            <i className="bx bx-fw bx-menu" />
          </div>
        </div>
      </div>
    </nav>
  );
}
