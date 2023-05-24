"use client";

import { useState, useEffect } from "react";
import NavbarTop from "@/components/NavbarTop";
import Image from "next/image";

const PageCart = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts([
      {
        name: "XIAOMI 12 Pro | Xiaomi Official",
        slug: "A001",
        image: "/img/xiaomi-12-ultra.jpg",
        price: 10000,
      },
      {
        name: "Jual Laptop Infinix Inbook X2/X1 I5 1035G1 8gb 512ssd w10 14.0 fhd - UNIT  ONLY, INBOOK X1 - Kota Depok - Eternal Computer | Tokopedia",
        slug: "A001",
        image: "/img/infinix-inbook-x2.jpg",
        price: 2000,
      },
      {
        name: "XIAOMI 12 Pro | Xiaomi Official",
        slug: "A002",
        image: "/img/xiaomi-12-ultra.jpg",
        price: 10000,
      },
      {
        name: "Jual Laptop Infinix Inbook X2/X1 I5 1035G1 8gb 512ssd w10 14.0 fhd - UNIT  ONLY, INBOOK X1 - Kota Depok - Eternal Computer | Tokopedia",
        slug: "A003",
        image: "/img/infinix-inbook-x2.jpg",
        price: 2000,
      },
      {
        name: "XIAOMI 12 Pro | Xiaomi Official",
        slug: "A004",
        image: "/img/xiaomi-12-ultra.jpg",
        price: 10000,
      },
      {
        name: "Jual Laptop Infinix Inbook X2/X1 I5 1035G1 8gb 512ssd w10 14.0 fhd - UNIT  ONLY, INBOOK X1 - Kota Depok - Eternal Computer | Tokopedia",
        slug: "A005",
        image: "/img/infinix-inbook-x2.jpg",
        price: 2000,
      },
      {
        name: "XIAOMI 12 Pro | Xiaomi Official",
        slug: "A006",
        image: "/img/xiaomi-12-ultra.jpg",
        price: 10000,
      },
      {
        name: "Jual Laptop Infinix Inbook X2/X1 I5 1035G1 8gb 512ssd w10 14.0 fhd - UNIT  ONLY, INBOOK X1 - Kota Depok - Eternal Computer | Tokopedia",
        slug: "A007",
        image: "/img/infinix-inbook-x2.jpg",
        price: 2000,
      },
    ]);
  }, []);

  return (
    <>
      <NavbarTop label={"Keranjang"} />
      <main>
        <div className="container p-2">
          <div className="flex flex-col gap-3">
            {products.map((product) => (
              <div className="flex bg-gray-50 p-2 rounded-lg shadow-md">
                <div className="aspect-square h-24 ">
                  <Image src={product.image} width={500} height={500} />
                </div>
                <div className="flex flex-col px-2">
                  <h2 className="line-clamp-1 font-semibold">{product.name}</h2>
                  <p className="line-clamp-2 text-justify text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi, repellendus!
                  </p>
                  <h3 className="text-lg font-bold mt-auto">Rp 20.000</h3>
                </div>
                <div className="flex bg-orange-300 rounded-lg ms-auto flex-col backdrop:text-center p-2 justify-between">
                  <button>+</button>
                  <span>32</span>
                  <button>-</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200">
        <div className="container p-3">
          <div className="flex justify-end items-center gap-4">
            <div className="text-end ">
              <div className="text-xs">Total Pembayaran</div>
              <h3>Rp 200.000</h3>
            </div>

            <button className="bg-green-600 text-white rounded-lg py-3 px-4 flex gap-2 justify-center items-center ">
              <i className="bx bx-wallet text-lg" />
              Checkout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default PageCart;
