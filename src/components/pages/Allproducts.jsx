import React, { useState } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { Slider } from "@/components/ui/slider"
import { IoMdStar } from 'react-icons/io'


const Allproducts = () => {

    const [priceRange, setPriceRange] = useState([75]);
    const currentPrice = priceRange[0] * 25;

    return (
        <>
        <section>
            <div className="bg-[#FAFAFA] pt-[43px] pb-12.5">
                <Container>
                    <Flex className={'gap-x-13'}>
                        {/* left side start */}
                        <div className="leftBar w-[20%] py-[25px] bg-white px-5">
                            <div className="pb-[18px] border-b border-[#F4F4F4]">
                                <h4 className='text-[#3D3D3F] text-[18px] font-medium'>Related Categories</h4>
                                <p className='text-[#757575] text-base py-1 hover:text-[#0198E9] cursor-pointer duration-300'>Men’s fashion</p>
                                <div className="pl-2">
                                    <ul className='text-[#757575] text-base '>
                                        <li className='mb-1 hover:text-[#0198E9] cursor-pointer duration-300'>Men’s Jacket</li>
                                        <li className='mb-1 hover:text-[#0198E9] cursor-pointer duration-300'>Men's T-Shirts</li>
                                        <li className='mb-1 hover:text-[#0198E9] cursor-pointer duration-300'>Casual Shirts</li>
                                        <li className='mb-1 hover:text-[#0198E9] cursor-pointer duration-300'>Summer T-Shirts</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pt-5">
                                <div className="flex justify-between items-center! cursor-pointer pb-8">
                                    <h4 className='text-[#383838] font-medium text-[18px]'>Filter by Price</h4>
                                    <MdOutlineKeyboardArrowDown/>
                                </div>
                                <div className="range">
                                    <Slider 
                                        defaultValue={[75]}
                                        max={100}
                                        step={1}
                                        onValueChange={(value) => setPriceRange(value)}
                                        className="custom-range-slider w-full mx-auto"
                                    />
                                </div>
                                <div className="price py-6 border-b border-[#F4F4F4]">
                                    <Flex className={'gap-x-2'}>
                                        <p className='text-[#A7A7A7] text-[18px]'>Price:</p>
                                        <p className='text-[#383838] text-[18px] font-medium'>
                                            ৳ 0 - ৳ {currentPrice}
                                        </p>
                                    </Flex>
                                </div>
                            </div>
                            <div className="pt-5">
                                <div className="flex justify-between items-center! cursor-pointer pb-8">
                                    <h4 className='text-[#383838] font-medium text-[18px]'>Filter by Rating</h4>
                                    <MdOutlineKeyboardArrowDown/>
                                </div>
                                <div className="">
                                    <div className="flex gap-x-3 items-center mb-4">
                                        <input type="checkbox" />
                                        <IoMdStar className='text-[#FFB340]'/>
                                    </div>
                                    <div className="flex gap-x-3 items-center mb-4">
                                        <input type="checkbox" />
                                        <IoMdStar className='text-[#FFB340]'/>
                                        <IoMdStar className='text-[#FFB340]'/>
                                    </div>
                                    <div className="flex gap-x-3 items-center mb-4">
                                        <input type="checkbox" />
                                        <IoMdStar className='text-[#FFB340]'/>
                                        <IoMdStar className='text-[#FFB340]'/>
                                        <IoMdStar className='text-[#FFB340]'/>
                                    </div>
                                    <div className="flex gap-x-3 items-center mb-4">
                                        <input type="checkbox" />
                                        <IoMdStar className='text-[#FFB340]'/>
                                        <IoMdStar className='text-[#FFB340]'/>
                                        <IoMdStar className='text-[#FFB340]'/>
                                        <IoMdStar className='text-[#FFB340]'/>
                                    </div>
                                    <div className="flex gap-x-3 items-center mb-4">
                                        <input type="checkbox" />
                                        <IoMdStar className='text-[#FFB340]'/>
                                        <IoMdStar className='text-[#FFB340]'/>
                                        <IoMdStar className='text-[#FFB340]'/>
                                        <IoMdStar className='text-[#FFB340]'/>
                                        <IoMdStar className='text-[#FFB340]'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* left side end */}
                    </Flex>
                </Container>
            </div>
        </section>
        </>
    )
}

export default Allproducts