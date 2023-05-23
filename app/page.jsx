"use client";

import NavbarBottom from "@/components/NavbarBottom";
import NavbarTop from "@/components/NavbarTop";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [bestProducts, setBestProducts] = useState([]);
  useEffect(() => {
    setBestProducts([
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
      <nav className="z-50 bg-white sticky top-0 text-opacity-50">
        <div className="container">
          <div className="flex gap-4 px-4 py-3 items-center">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={"/img/profile/1.jpg"}
                alt="Muhammad Irfan"
                width={400}
                height={400}
              />
            </div>
            <h5 className="text-green-700 font-semibold">Hi, Irfan!</h5>
            <div className="flex gap-2 ms-auto items-center">
              <Link href={"/notification"} className="my-auto">
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
        </div>
      </nav>
      <main>
        <div className="container px-4">
          <div className="mb-8 mt-6">
            <h1
              className="text-2xl text-slate-500 "
              style={{ lineHeight: "1.5em" }}
            >
              <span className="underline">Selamat Datang</span>, Di
              <br />
              <strong>
                <span className="text-green-600">RaihanCell</span> Karanggede
              </strong>
            </h1>
            <small className="text-slate-500">
              <i className="bx bx-fw bx-map text-yellow-600" />
              Sranten, Karanggede
            </small>
          </div>
          <form action="/product">
            <div className="flex relative justify-start items-center">
              <input
                className=" ps-12 pe-4 rounded-md h-12 w-full outline-none border-none "
                type="search"
                style={{ boxShadow: "0 2px 30px rgba(0, 0, 0,.05)" }}
                autoComplete="off"
                placeholder="Cari Sesuatu Disini"
                name=""
              />
              <button type="submit" className="absolute px-4  flex h-full">
                <i className=" bx  bx-search-alt text-xl m-auto"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="container  mt-6">
          <h2 className="text-green-700 text-center text-lg mb-2 font-bold">
            -- Produk Kami --
          </h2>
          <div className="grid grid-cols-2 gap-y-3 gap-x-2 m-4">
            {bestProducts.map((product) => {
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
            <Link href={"/product"} className="mx-auto text-green-500">
              Lihat Semua Produk
            </Link>
          </div>
        </div>
      </main>
      <NavbarBottom />
    </>
  );
}
