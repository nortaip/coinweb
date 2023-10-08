import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";


export function AccordionCustomAnimation() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  // vsvcvd
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <section className="bg-orange-500 flex items-center flex-col " id="buy">

        <div className="h-[172px] rounded-2xl flex-col justify-start items-center inline-flex vsvcvd">
          <div className=" dfvsD self-stretch h-[118px] rounded-tl-2xl rounded-tr-2xl flex-col justify-center items-center flex">
            <div className="self-stretch h-[118px] px-[28px] rounded-tl-[15px] rounded-tr-[15px] flex-col justify-center items-center gap-[60px] flex">
              <div className="self-stretch justify-between items-center inline-flex gap-[50px]">
                <div className="flex-col justify-start items-start inline-flex">
                  <div className=" text-orange-500 text-2xl font-bold font-['Rubik'] leading-[39.12px]">Presale 5,994,000,000 </div>
                  <div className=" text-orange-500 text-2xl font-normal font-['Rubik'] leading-[39.12px]">(90%)</div>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <div className=" text-orange-500 text-2xl font-bold font-['Rubik'] leading-[39.12px]">Presale 5,994,000,000 </div>
                  <div className=" text-orange-500 text-2xl font-normal font-['Rubik'] leading-[39.12px]">(90%)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[154px] px-[77px] py-9 bg-white flex-col justify-center items-start gap-2.5 flex">
            <div className="flex-col justify-start items-start gap-[60px] flex">
              <div className="flex-col justify-start items-start gap-2.5 flex">
                <div className="text-orange-500 text-base font-bold font-['Rubik'] uppercase leading-normal tracking-wide">Price</div>
                <div className="text-slate-900 text-[32px] font-medium font-['Rubik'] leading-[48px] tracking-wider">$0.00033300</div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 relative" style={{ top: '-10px' }}>
          <div className="Heading3Faqs w-28 h-10 text-white text-5xl font-bold font-['Rubik'] leading-7">FAQs</div>
          <br />
          <Accordion open={open === 1} className="mb-2 max-w40 rounded-lg border border-white-gray-100 px-4">
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`border-b-0 transition-colors ${open === 1 ? "text-white-500 hover:text-white-700" : ""
                }`}
            >
              What is Material Tailwind?
            </AccordionHeader>
            {open === 1 && (
              <AccordionBody className="pt-0 text-base font-normal text-gray-300">
                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                ourselves and actualize our dreams.
              </AccordionBody>
            )}
          </Accordion>
          <Accordion open={open === 2} className="mb-2 rounded-lg border border-white-gray-100 px-4">
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={`border-b-0 transition-colors ${open === 2 ? "text-white-500 hover:text-white-700" : ""
                }`}
            >
              What is Material Tailwind?
            </AccordionHeader>
            {open === 2 && (
              <AccordionBody className="pt-0 text-base font-normal text-gray-300">
                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                ourselves and actualize our dreams.
              </AccordionBody>
            )}
          </Accordion>
          <Accordion open={open === 3} className="mb-2 rounded-lg border border-white-gray-100 px-4">
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={`border-b-0 transition-colors ${open === 3 ? "text-white-500 hover:text-white-700" : ""
                }`}
            >
              What is Material Tailwind?
            </AccordionHeader>
            {open === 3 && (
              <AccordionBody className="pt-0 text-base font-normal text-gray-300">
                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                ourselves and actualize our dreams.
              </AccordionBody>
            )}
          </Accordion>
        </div>
      </section>
    </>
  );
}