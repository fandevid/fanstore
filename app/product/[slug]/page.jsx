"use client";

import NavbarTop from "@/components/NavbarTop";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const PageDetailProduct = ({ params }) => {
  const [product, setProduct] = useState({});
  const { slug } = params;
  const [qty, setQty] = useState(1);
  const [titleFull, setTitleFull] = useState(false);

  useEffect(() => {
    setProduct({
      name: "Jual Laptop Infinix Inbook X2/X1 I5 1035G1 8gb 512ssd w10 14.0 fhd - UNIT  ONLY, INBOOK X1 - Kota Depok - Eternal Computer | Tokopedia",
      slug: "A007",
      image: "/img/infinix-inbook-x2.jpg",
      price: 2000,
    });
  }, []);

  return (
    <>
      <NavbarTop label="Detail Produk" />
      <div className="container mt-1 max-sm:px-2">
        <div className="mb-1 rounded-lg overflow-hidden">
          <Image
            src={"/img/infinix-inbook-x2.jpg"}
            width={1280}
            height={1280}
            alt={product.name ?? ""}
          />
        </div>
        <div>
          <small>#Pakaian</small>
        </div>
        <h1
          onClick={() => {
            setTitleFull(!titleFull);
          }}
          className={`font-semibold ${titleFull ? "" : "line-clamp-2"}`}
        >
          {product.name}
        </h1>
        <div className="mb-2">
          <small>25 Oktober 2023</small>
        </div>
        <hr />
        <h5 className="mt-3 text-sm mb-1">
          <strong>Deskripsi:</strong>
        </h5>
        <p className="text-justify text-slate-600 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quis
          voluptas quibusdam quae fugiat, obcaecati libero accusantium, est
          tempore nobis architecto consequatur beatae nam illo corporis.
          Architecto necessitatibus hic quod? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Saepe explicabo sequi voluptates et
          voluptatem illo dolorum harum quisquam, dolorem culpa.
        </p>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-2 bg-white z-50">
        <div className="conatiner">
          <div className="flex justify-between mb-2">
            <h2 className="text-xl font-semibold text-green-600">Rp10.000</h2>
            <div className="flex">
              <button
                onClick={() => setQty(qty + 1)}
                className="bg-gray-100 rounded bg-opacity-50 w-8 h-8 flex my-auto"
              >
                <i className="m-auto bx bx-plus" />
              </button>
              <input
                type="text"
                placeholder="1"
                defaultValue={qty}
                min={1}
                className="w-16 text-center"
                readOnly
              />
              <button
                onClick={() => {
                  if (qty > 1) {
                    setQty(qty - 1);
                  }
                }}
                className="bg-gray-100 rounded bg-opacity-50 w-8 h-8 flex my-auto"
              >
                <i className="m-auto bx bx-minus" />
              </button>
            </div>
          </div>
          <button className="bg-green-600 w-full text-white rounded-full p-3">
            <i className="bx bx-cart-add bx-fw" />
            Masukkan Keranjang
          </button>
        </div>
      </div>
    </>
  );
};

export default PageDetailProduct;
