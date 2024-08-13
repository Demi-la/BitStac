import Image from "next/image";
import { cyptoVirtualCard, currencyRate } from "./data";

const Products = () => {
  return (
    <>
      <div className="relative">
        <div className="lg:mx-10 mx-4 lg:mt-14 lg:flex gap-6">
          {cyptoVirtualCard.map((item, index) => (
            <div
              key={index}
              className={`px-8 pt-2  rounded-2xl w-[100%] mt-4 lg:mt-0 ${
                index === 0
                  ? "bg-cypto-card-gradient"
                  : "bg-virtual-card-gradient"
              }`}
            >
              <div>
                <h2 className="text-[#121212] lg:text-[2rem] md:text-[2rem] text-[16px] font-bold mt-4">
                  {item.title}
                </h2>
                <p className="text-[#161616] lg:text-[20px] md:text-[20px]  text-[12px] lg:font-light font-normal  mt-4">
                  {item.description}
                </p>
                <ul className="mt-4 text-[12px] font-normal lg:text-[20px] md:text-[20px] lg:font-light">
                  <l1 className="flex gap-2">
                    <Image
                      src={item.icon}
                      alt="Bullet"
                      className="w-[14px] h-[14px]  lg:w-[24px] lg:h-[24px] md:w-[24px] md:h-[24px]"
                    />{" "}
                    {item.point1}
                  </l1>
                  <l1 className="flex gap-2 mt-3">
                    <Image
                      src={item.icon}
                      alt="Bullet"
                      className="w-[14px] h-[14px]  lg:w-[24px] lg:h-[24px] md:w-[24px] md:h-[24px]"
                    />{" "}
                    {item.point2}
                  </l1>
                </ul>
              </div>
              <div className="relative lg:left-[-1rem] w-full mt-4 lg:mt-6">
                <Image
                  src={item.cryptoImage}
                  alt="Icon"
                  className={`crypto-image md:mx-auto ${
                    index === 1
                      ? "relative lg:left-[2.7rem] md:left-[6.5rem] left-[2rem] md:top-[-0.2rem]"
                      : ""
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="lg:mx-10 mx-4 lg:mt-14 mt-4">
          {currencyRate.map((item, index) => (
            <div
              key={index}
              className="px-8 pt-2 lg:flex  bg-gray-gradient rounded-2xl"
            >
              <div>
                <h2 className="text-[#121212] lg:text-[2rem] md:text-[2rem] text-[16px] font-bold lg:w-[60%] w-[100%] lg:mt-[4rem] mt-[1rem]">
                  {item.title}
                </h2>
                <p className="text-[#161616] lg:text-[20px] md:text-[20px]  text-[12px] lg:font-light font-normal lg:w-[85%]  w-[100%] mt-4">
                  {item.description}
                </p>
                <ul className="mt-4 text-[12px] font-normal lg:text-[20px] md:text-[20px] lg:font-light">
                  <l1 className="flex gap-2">
                    <Image
                      src={item.icon}
                      alt="Bullet"
                      className="w-[14px] h-[14px]  lg:w-[24px] lg:h-[24px] md:w-[24px] md:h-[24px] mt-0.5"
                    />{" "}
                    {item.point1}
                  </l1>
                  <l1 className="flex gap-2 mt-3">
                    <Image
                      src={item.icon}
                      alt="Bullet"
                      className="w-[14px] h-[14px]  lg:w-[24px] lg:h-[24px] md:w-[24px] md:h-[24px] mt-0.5"
                    />{" "}
                    {item.point2}
                  </l1>
                </ul>
              </div>
              <div className="relative lg:left-[-1rem] w-full mt-[4rem]">
                <Image
                  src={item.globeImage}
                  alt="Globe"
                  className="md:mx-auto "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
