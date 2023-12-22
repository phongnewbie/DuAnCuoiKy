import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import { formatCurrency } from "../utilities/formatCurrency";

export default function Product() {
  const [dataSanPham, setDataSanPham] = useState([]);

  const handleBuy = (sanPham) => {
    console.log(sanPham);
  };
  useEffect(() => {
    fetch("https://657eac8e3e3f5b189463f4b4.mockapi.io/api/products/products")
      .then((res) => res.json())
      .then((data) => setDataSanPham(data));
  }, []);

  return (
    <div className="flex mt-64 grid grid-cols-3  text-center">
      {dataSanPham.map((sanPham) => (
        <div
          className="card  ml-44 mt-10"
          style={{
            width: "18rem",
          }}
        >
          <div class="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
            <div class="w-20 h-20 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500">
              <Link to={"/productDetails"} state={{ sanPham }}>
                <img
                  className="w-40  h-20 object-cover bg-contain"
                  style={{ borderRadius: "500px" }}
                  src={sanPham.avatar}
                  alt=""
                />
              </Link>
            </div>
            <div class="z-10 mt-4  group-hover:-translate-y-10 transition-all duration-500">
              <span class="text-2xl font-semibold">{sanPham.name}</span>
              <p>{formatCurrency(sanPham.price)}</p>
            </div>
            <a
              class="bg-blue-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500"
              href="#"
            >
              Add to cart
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

// <Link to={"/productDetails"} state={{ sanPham }}>
//   <img src={sanPham.avatar} />
// </Link>
// <h5 className="card-title">{sanPham.name}</h5>
// <p className="card-text">{formatCurrency(sanPham.price)}</p>
