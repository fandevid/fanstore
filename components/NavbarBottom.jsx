"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function NavbarBottom() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{ borderTop: "1px solid lightgray" }}
    >
      <div className="container">
        <div className="flex justify-evenly py-2 bg-white text-center">
          <Link href="/">
            <div className="flex-col">
              <div className="">
                <i
                  className={`bx bx-fw ${
                    pathname == "/"
                      ? "text-green-700 bxs-home-smile"
                      : "bx-home-alt-2"
                  }`}
                ></i>
              </div>
              <small className="">Home</small>
            </div>
          </Link>
          <Link href="/product">
            <div className="flex-col">
              <div className="">
                <i
                  className={`bx bx-fw ${
                    pathname == "/product"
                      ? "text-green-700 bxs-shopping-bag"
                      : "bx-shopping-bag"
                  }`}
                ></i>
              </div>
              <small className="">Produk</small>
            </div>
          </Link>
          <Link href="/notification">
            <div className="flex-col">
              <div className="">
                <i
                  className={`bx bx-fw ${
                    pathname == "/notification"
                      ? "text-green-700 bxs-bell-ring"
                      : "bx-bell"
                  }`}
                ></i>
              </div>
              <small className="">Notifikasi</small>
            </div>
          </Link>
          <Link href="/transaction">
            <div className="flex-col">
              <div className="">
                <i
                  className={`bx bx-fw ${
                    pathname == "/transaction"
                      ? "text-green-700 bxs-receipt"
                      : "bx-receipt"
                  }`}
                ></i>
              </div>
              <small className="">Transaksi</small>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
