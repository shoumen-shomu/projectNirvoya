import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import Container from "../Container";
import Images from "../Images";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import productDetailsBig1 from "/src/assets/productDetailsBig1.png";
import productDetailsSmall1 from "/src/assets/productDetailsSmall1.png";
import productDetailsSmall2 from "/src/assets/productDetailsSmall2.png";
import productDetailsSmall3 from "/src/assets/productDetailsSmall3.png";
import productDetailsSmall4 from "/src/assets/productDetailsSmall4.png";
import linkedin from "/src/assets/linkedin.png";
import twitter from "/src/assets/twitter.png";
import facebook from "/src/assets/facebook.png";
import whatsapp from "/src/assets/whatsapp.png";
import link from "/src/assets/link.png";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  return (
    <div className="pt-14 pb-12.5 font-Poppins">
      <Container>
        <h6 className="flex items-center gap-x-2 text-base pb-6">
          <span className="text-[#02344F] flex items-center gap-x-2">
            Home <FaAngleRight />
          </span>{" "}
          <span className="text-[#02344F] flex items-center gap-x-2">
            Men’s fashion <FaAngleRight />
          </span>{" "}
          <span className="text-[#757575]">
            Men's Stand Collar Leather Jacket
          </span>
        </h6>
        <div className="grid grid-cols-2">
          <div className="w-[680px]">
            <div className="flex gap-x-6">
              <div className="">
                <Images imgSrc={productDetailsBig1} />
                <div className="flex items-center gap-x-3.5 pt-[45px]">
                  <span className="text-[#333333] text-xl">Share</span>
                  <Link to={"https://www.linkedin.com"} target="_blank">
                    <Images imgSrc={linkedin} />
                  </Link>
                  <Link to={"https://x.com"} target="_blank">
                    <Images imgSrc={twitter} />
                  </Link>
                  <Link to={"https://www.facebook.com"} target="_blank">
                    <Images imgSrc={facebook} />
                  </Link>
                  <Link to={"https://www.whatsapp.com"} target="_blank">
                    <Images imgSrc={whatsapp} />
                  </Link>
                  <Link to={"/"}>
                    <Images imgSrc={link} />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center gap-y-[10px]">
                <a href="#">
                  <FaChevronUp className="text-[#949494] text-base mb-3" />
                </a>
                <Images imgSrc={productDetailsSmall1} />
                <Images imgSrc={productDetailsSmall2} />
                <Images imgSrc={productDetailsSmall3} />
                <Images imgSrc={productDetailsSmall4} />
                <a href="#">
                  <FaChevronDown className="text-[#0198E9] text-base mt-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
