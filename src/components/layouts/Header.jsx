import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import Logo from "/src/assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { FaShoppingBasket } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  let [show, setShow] = useState(false);
  return (
    <header className="relative">
      <div className="border-b-2 border-[#EFEEEE]">
        <Container>
          <Flex className="py-[33px] justify-between">
            <Images imgSrc={Logo} className={"cursor-pointer"} />
            <Flex>
              <div className="bg-[#F6F6F6] border-2 border-[#F1F1F1] border-r-0 rounded-bl-[5px] rounded-tl-[5px] w-[715px]">
                <input
                  type="text"
                  placeholder="I'm looking for..."
                  className="py-3 px-5 w-100 outline-none border-none"
                />
              </div>
              <div className="bg-[#0198E9] cursor-pointer py-3 px-5 text-[28px] rounded-br-[5px] rounded-tr-[5px] text-white">
                <FiSearch />
              </div>
            </Flex>
            <Flex className={"gap-x-10"}>
              <Flex
                className={
                  "text-[#4D4D4D] hover:text-[#29292E] gap-x-1.5 text-base cursor-pointer"
                }
              >
                <FaRegUser className="text-xl" />
                <p>Login</p>
              </Flex>
              <Flex
                className={
                  "text-[#4D4D4D] hover:text-[#29292E] gap-x-1.5 text-base cursor-pointer"
                }
              >
                <AiOutlineHeart className="text-2xl" />
                <p>Wishlist</p>
              </Flex>
              <Flex
                className={
                  "text-[#4D4D4D] hover:text-[#29292E] gap-x-1.5 text-base cursor-pointer"
                }
              >
                <FaShoppingBasket className="text-2xl" />
                <p>My cart</p>
                <div className="h-5 w-5 rounded-full bg-[#FF5D5D] relative">
                  <p className="text-white text-[12px] font-medium absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    1
                  </p>
                </div>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            className={
              "gap-x-14 text-[#333333]/85 text-base font-medium justify-center uppercase mb-2.5"
            }
          >
            <p
              className={`cursor-pointer pb-2 duration-300 ${
                show
                  ? "text-[#0198E9] border-b-2 border-[#0198E9]"
                  : "text-[#333333]/85"
              }`}
              onClick={() => setShow(!show)}
            >
              Women's Fashion
            </p>
            {/* Outsite click korle cole Jabe ei jonno eta  */}
            {show && (
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShow(false)}
              ></div>
            )}
            <p className="cursor-pointer">Men's Fashion</p>
            <p className="cursor-pointer">Kid's Fashion</p>
            <p className="cursor-pointer">Home & Lifestyle</p>
            <p className="cursor-pointer">Arts & Crafts</p>
            <p className="cursor-pointer">Computer & Electronics</p>
            <p className="cursor-pointer">Food & Grocery</p>
          </Flex>
        </Container>
      </div>
      {/* Women's Fashion Items  */}
      {show && (
        <Container
          className={"py-7.5 px-18 bg-white absolute left-0 right-0 z-20"}
        >
          <Flex className={"justify-between items-start"}>
            {/* Flex One start  */}
            <div className="">
              <h4 className="text-[#3D3D3F] text-base font-medium font-Poppins pb-3">
                Saree
              </h4>
              <ul className="flex flex-col gap-y-3.75 text-[#757575] text-sm font-Poppins">
                <li>Cotton</li>
                <li>Silk</li>
                <li>Katan</li>
                <li>Muslin</li>
                <li>Jamdani</li>
                <li>Georgette</li>
                <li>Nakshi Kantha</li>
                <li>Linen</li>
                <li>Khadi</li>
                <li>Tangail Taant</li>
                <li>Monipuri</li>
                <li>Dhakai Benaroshi</li>
              </ul>
            </div>
            {/* Flex Two start  */}
            <div className="">
              <h4 className="text-[#3D3D3F] text-base font-medium font-Poppins pb-3">
                Clothes
              </h4>
              <ul className="flex flex-col gap-y-3.75 text-[#757575] text-sm font-Poppins">
                <li>T-shirt</li>
                <li>Shorts</li>
                <li>Shirt</li>
                <li>Tracksuit</li>
                <li>Jeans</li>
                <li>Georgette</li>
                <li>Waistcoat</li>
                <li>Sweater</li>
                <li>coats</li>
                <li>Suit</li>
                <li>Sweatshirt</li>
                <li>Uniform</li>
              </ul>
            </div>
            {/* Flex Three start  */}
            <div className="">
              <h4 className="text-[#3D3D3F] text-base font-medium font-Poppins pb-3">
                Cosmetic
              </h4>
              <ul className="flex flex-col gap-y-3.75 text-[#757575] text-sm font-Poppins">
                <li>Perfume</li>
                <li>Eye make-up</li>
                <li>Skin care</li>
                <li>Hair care</li>
                <li>Make-up</li>
                <li>Oral Care</li>
                <li>Body Care</li>
                <li>Sanitary pad</li>
                <li>Shower Gels & Creams</li>
                <li>Hair Removal Products</li>
                <li>Lipstick</li>
                <li>Suntan cream</li>
              </ul>
            </div>
            {/* Flex Four start */}
            <div className="">
              <h4 className="text-[#3D3D3F] text-base font-medium font-Poppins pb-3">
                Sports & Outdoor
              </h4>
              <ul className="flex flex-col gap-y-3.75 text-[#757575] text-sm font-Poppins">
                <li>Sweatshirt</li>
                <li>T-shirt</li>
                <li>Sports Bra</li>
                <li>Leggings</li>
                <li>Tracksuit</li>
                <li>Running Shoes</li>
                <li>Sports Bag</li>
                <li>Sports Equipment</li>
                <li>Outdoor Shoes</li>
                <li>Snow Boot</li>
                <li>Outdoor Equipment</li>
                <li>Sports Accessories</li>
              </ul>
            </div>
            {/* Flex Five start */}
            <div className="">
              <h4 className="text-[#3D3D3F] text-base font-medium font-Poppins pb-3">
                Personal Care
              </h4>
              <ul className="flex flex-col gap-y-3.75 text-[#757575] text-sm font-Poppins">
                <li>Perfume</li>
                <li>Sexual Health</li>
                <li>After Shave Products</li>
                <li>Razor blade</li>
              </ul>
              <div className="mt-10.75">
                <h4 className="text-[#3D3D3F] text-base font-medium font-Poppins pb-3">
                  Shoes
                </h4>
                <ul className="flex flex-col gap-y-3.75 text-[#757575] text-sm font-Poppins">
                  <li>Heeled shoes</li>
                  <li>sneakers</li>
                  <li>Casual Shoes</li>
                  <li>Babet</li>
                  <li>Sandals</li>
                  <li>Slipper</li>
                </ul>
              </div>
            </div>
          </Flex>
        </Container>
      )}
    </header>
  );
};

export default Header;
