"use client";

import NavbarBottom from "@/components/NavbarBottom";
import NavbarTop from "@/components/NavbarTop";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const PageTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    setTransactions([
      {
        code: "AD342B",
        type: "Belanja",
        status: 1,
        items_count: 3,
        total_price: 22000,
        timestamp: new Date().getTime(),
        name: "XIAOMI 12 Pro | Xiaomi Official",
        image: "/img/xiaomi-12-ultra.jpg",
        products: [
          {
            name: "XIAOMI 12 Pro | Xiaomi Official",
            slug: "A004",
            image: "/img/xiaomi-12-ultra.jpg",
            price: 10000,
            qty: 2,
          },
          {
            name: "Jual Laptop Infinix Inbook X2/X1 I5 1035G1 8gb 512ssd w10 14.0 fhd - UNIT  ONLY, INBOOK X1 - Kota Depok - Eternal Computer | Tokopedia",
            slug: "A005",
            image: "/img/infinix-inbook-x2.jpg",
            price: 2000,
            qty: 1,
          },
        ],
      },
      {
        code: "AD342B",
        type: "Belanja",
        status: 1,
        items_count: 3,
        total_price: 22000,
        timestamp: new Date().getTime(),
        name: "XIAOMI 12 Pro | Xiaomi Official",
        image: "/img/xiaomi-12-ultra.jpg",
        products: [
          {
            name: "XIAOMI 12 Pro | Xiaomi Official",
            slug: "A004",
            image: "/img/xiaomi-12-ultra.jpg",
            price: 10000,
            qty: 2,
          },
        ],
      },
    ]);
  }, []);

  return (
    <div>
      <NavbarTop />
      <main>
        <div className="container px-2">
          <div className="flex-col flex gap-3">
            {transactions.map((transaction) => (
              <div className="rounded-xl flex flex-col gap-2 shadow-sm p-3 border-2 border-solid border-slate-50">
                <div className="flex gap-3 items-center">
                  <div className="h-9 w-9 ">
                    <Image src={"/img/beat.png"} width={400} height={400} />
                  </div>

                  <div className="flex flex-col ">
                    <small className="font-semibold">Belanja</small>
                    <small className="text-opacity-40">25 Oktober 2023</small>
                  </div>
                  <div className="bg-green-500 text-green-700 bg-opacity-20 px-2 rounded-md ms-auto">
                    <small>Selesai</small>
                  </div>
                </div>
                <hr />
                <div className="flex gap-3">
                  <div className="h-12 w-12 rounded-md aspect-square overflow-hidden">
                    <Image
                      src={"/img/infinix-inbook-x2.jpg"}
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="line-clamp-1 text-md font-semibold">
                      {transaction.products[0].name}
                    </h3>
                    <small className="text-opacity-40 my-0 py-0">
                      {transaction.products[0].qty} barang
                    </small>
                  </div>
                </div>
                {transaction.products.length > 1 ? (
                  <small className="">
                    +{transaction.products.length - 1} produk lainya
                  </small>
                ) : (
                  ""
                )}
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <small className="text-opacity-40">Total Bayar:</small>
                    <small className="font-semibold">Rp 55.000</small>
                  </div>
                  <button className="bg-green-400 ms-auto w-28 py-1 rounded-md text-white text-sm ">
                    <strong>Beli Lagi</strong>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <NavbarBottom />
    </div>
  );
};

export default PageTransaction;
