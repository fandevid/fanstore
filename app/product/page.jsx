"use client";

import NavbarBottom from "@/components/NavbarBottom";
import NavbarTop from "@/components/NavbarTop";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const PageProduct = () => {
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

  function loadMoreProduct() {
    setProducts([
      ...products,
      {
        name: "XIAOMI 12 Pro | Xiaomi Official",
        slug: "A008",
        image: "/img/xiaomi-12-ultra.jpg",
        price: 10000,
      },
      {
        name: "Jual Laptop Infinix Inbook X2",
        slug: "A009",
        image: "/img/infinix-inbook-x2.jpg",
        price: 2000,
      },
    ]);
  }

  return (
    <div className="">
      <NavbarTop />
      <div className="container">
        <div className="grid grid-cols-2 gap-y-3 gap-x-2 m-2">
          {products.map((product) => {
            return (
              <Link
                href={`/product/${product.slug}`}
                className="bg-gray-100 hover:scale-95 duration-100 bg-opacity-50 relative shadow-md rounded-lg overflow-hidden flex-col flex"
              >
                <button className="absolute top-1 right-1 flex bg-gray-500 bg-opacity-10  rounded-full w-8 h-8 ">
                  <i className="bx bx-cart-add m-auto text-lg" />
                </button>
                <Image
                  src={product.image}
                  width={512}
                  height={512}
                  alt={product.name}
                />
                <div className="flex flex-col m-2 ">
                  <h2 className="line-clamp-2" aria-labelledby={product.name}>
                    <small>{product.name}</small>
                  </h2>
                  <h3 className="font-bold my-1">Rp10.000</h3>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="flex">
          <button
            onClick={loadMoreProduct}
            className="text-blue-600 mt-3 mx-auto"
          >
            Load More
          </button>
        </div>
      </div>
      <NavbarBottom />
    </div>
  );
};

export default PageProduct;
