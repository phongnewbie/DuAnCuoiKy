import React, { useState } from "react";
import Product from "../ProductHome/Product";
import NavBar from "../NavBar/NavBar";
import { useLocation, useNavigate } from "react-router-dom";
import { formatCurrency } from "../utilities/formatCurrency";

import Footer from "../Footer/Footer";
export default function ProductDetails() {
  const location = useLocation();
  const { sanPham } = location.state;
  return (
    <div>
      <div class="cardBox mt-12 mb-5 ml-56">
        <div class="cardTwo">
          <img style={{ borderRadius: "100%" }} src={sanPham.avatar} alt="" />
          <div class="h4">{sanPham.name}</div>

          <div class="content">
            <div class="h3">{formatCurrency(sanPham.price)}</div>
            <p>
              This is Pradeep Saran, your tech mate!!! I love you all. Lets make
              this world a better place for all of us. Keep prospering...Keep
              learning!!!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
