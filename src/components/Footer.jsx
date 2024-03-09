import React from "react";
import { footer } from "../utils/Constant";
import { Typography } from "@material-tailwind/react";
import { MdHeight } from "react-icons/md";
// import logo from "../../assets/kredallino-logo.webp";


export const Footer = () => {

  const LINKS = [
    {
      title: "About",
      items: [" Vidyalaya",  "Why Vidyalaya", " Benifit of Youtube", " Our Approach","History"],
    },
    {
      title: "Product And Services ",
      items: [" Featurs", "School Software", "College Software", " Integrations","Services"],
    },
    {
      title: " Resorces LINK",
      items: ["Group: Nextlevelbot Group", " Channel:Youtube Channel", "Whatsapp Chat: Chat Now", " Contact Us: Visit Here"],
    },
  ];
   
  const currentYear = new Date().getFullYear();


  return (
    <footer className="w-full px-4 py-4 xl:px-[70px] bg-[#46555C] relative shadow-white shadow-xl mt-20">
      {/* logo container */}
      <div className="cursor-pointer py-12">
        {/* <img src={logo} height={120} width={120} alt="company-logo" /> */}
      </div>
      {/* message */}
      

        
          
      
    
      

      <div className="grid grid-rows-1  grid-flow-col  justify-between gap-4 md:grid-cols-2 mt-6  w-65  pl-10 pr-10 pl-10">
          <Typography variant="h5" className="mb-6">
          <div className=" flex flex-col justify-center   ">
        <p className="text-[#ffffff] text-[20px] font-semibold  md:text-[24px] leading-[34px] xl:text-[18px] xl:leading-[42px] text-start  ">
        About Us Student-Website-Nextlevelbot <br />
        <div>

        
          <span className="text-[#ffffff]  font-medium  xl:text-[14px] justify-center  ">
            <p className="text-slate-400 "> 
          Student-Nextlevelbot  is a user-friendly web-based application that operates through a unique Webhook system, It is one of the leading ERP sloutions for educational instituation across the world ,  It is full costomized solution with major features such as SMS , online payment  providing  various IT technologies a  experience for anyone to use Nextlevelbot student website  without the need for coding or programming knowledge. 
          </p>
          </span>
          </div>
        </p>
      </div>
            
          </Typography>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray" 
                  className="mb-3 font-medium  text-[#ffffff] text-[1rem] xl:text-[22px] xl:leading-[48px] tracking-normal text-left  "
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className=" text-[#000]] font-medium  xl:text-[16px] c text-slate-400 "
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mr-2 text-[#ffffff] xl:text-[15px]  pb-5 ">
          <p><h4>Disclaimer: A student management system stores and tracks students’ workload, personal information, grades, record, and more. It’s a means of streamlining the work and tracking all the data generated by a student, consolidating everything into one system rather than multiple records. A student information system can also be used to monitor performance at the district level.</h4></p>
        </div>

        <div className="w-full flex items-center h-full"  > 
          <img  src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfeJex37ibca8bl6rvcA5RGy5Acpdpt79mIg&usqp=CAU " className="h-[30vh] overflow-auto flex-2 px-0 md:px-2 pt-3" >
          </img>
        </div>
        
        







     
      {/* final bottom section */}
      <div className="flex flex-col md:flex-row lg:items-center lg:justify-center mt-6 mb-2">
        <div className="flex flex-col md:flex-row items-start lg:items-center gap-2">
          <p className="mr-2 text-[#ffffff] xl:text-[12px]  text-slate-400">
            @2024 all rights reserved by Next-level-bot Student_website
          </p>

          {footer?.map((element, index) => {
            return (
              <>
                <a
                  href={element?.href}
                  rel="noreferrer"
                  target="_blank"
                  className="flex items-center text-sm text-[#ffffff]"
                >
                  {element?.name}{" "}
                  <span className="ml-1.5 md:ml-0.5 hidden md:block">|</span>
                </a>
              </>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
