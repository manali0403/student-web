import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const cardData = [
  {
    title: "Nextlevelbot Web Software",
    content: "Nextlevelbot, a groundbreaking API Bridge (automated/Algo) Platform, leverages a distinctive Webhook system to effortlessly trigger APIs from Tradingview, Chartink, Excel, Telegram, Amibroker, and other sources, granting traders and developers the ability to enhance their strategies and workflows with unparalleled effectiveness. With its cutting-edge Webhook system, Nextlevelbot serves as a revolutionary API Bridge (automated/Algo) Platform, enabling the seamless triggering of APIs from popular platforms such as Tradingview, Chartink, Excel, Telegram, Amibroker, and more, empowering both traders and developers to optimize their approaches and operations with exceptional efficiency.",
  },
  {
    title: "TV Strategy and Indicator Programming Services",
    content: "Our TV Strategy and Indicator programming services cater to your unique requirements, providing seamless customization for your TradingView strategies and indicators. Whether you need to incorporate specific alerts functions or integrate with a Telegram bot, we have you covered for both personal and commercial use. Our commitment to ensuring 100% satisfaction means that you can expect a tailored solution that perfectly aligns with your needs. Additionally, you have the option to obtain the source code or use the service as is, according to your preferences. Partner with us for top-notch programming services that elevate your TradingView experience to new heights.",
  },
  {
    title: "Strategy and Indicator market place",
    content: "Nextlevelbot extends its comprehensive support to a multitude of brokers and APIs, encompassing Kt (Zerodha's Kite), Upstox, Fyers, Alice blue, Binance, Samco, Fxcm, 5paise, Angel Broking (Angel One), Tradingview, Alpaca, IIFL, KT Securities, BitBns, Bitmex, Meta Trader (MT4 OR MT5), Wazirx, Delta Exchange, with additional integrations planned for the future. This diverse range of compatible platforms ensures that users can seamlessly connect to their preferred trading and financial services through Nextlevelbot.",
  },
  // Add more card data if needed
  {
    title: "Programming Services ",
    content: "Our programming services are tailored to meet your specific needs, offering seamless integration and customization for any public API, both for personal and commercial use. We prioritize client satisfaction, ensuring that you are fully content with the final product, whether you opt for the source code or not. Additionally, our services encompass server setup and domain configuration, providing a comprehensive solution that fulfills all your requirements. Rest assured, we are committed to delivering high-quality solutions that align perfectly with your vision.",
  },
  {
    title: "TV Strategy and Indicator Programming Services ",
    content: "Our TV Strategy and Indicator programming services cater to your unique requirements, providing seamless customization for your TradingView strategies and indicators. Whether you need to incorporate specific alerts functions or integrate with a Telegram bot, we have you covered for both personal and commercial use. Our commitment to ensuring 100% satisfaction means that you can expect a tailored solution that perfectly aligns with your needs. Additionally, you have the option to obtain the source code or use the service as is, according to your preferences. Partner with us for top-notch programming services that elevate your TradingView experience to new heights.",
  },
  {
    
       

    title: "Strategy and Indicator   market  place",
    content: "Nextlevelbot is proud to offer its Strategy Marketplace Services, providing you with a platform to showcase and sell your exclusive indicators and trading strategies. You have the flexibility to offer your creations for either monthly subscriptions or one-time purchases, catering to your preferred pricing model. Join our thriving marketplace and tap into a vast community of potential buyers interested in your innovative solutions. For more detailed information and to get started with selling your indicators and strategies on Nextlevelbot's marketplace, please feel free to connect with us. Our team is ready to assist you throughout the process, ensuring a seamless and rewarding experience. Don't miss this opportunity to monetize your expertise and contribute to the trading community through Nextlevelbot's Strategy Marketplace Services.",
  },
  // Add more c
];

export function New() {
  const columns = 2; // Number of columns
  

  return (


    <div className=" grid grid-cols-3 grid-rows-2 gap-6   text-sm   text-left flex flex-col   flex justify-center font-semibold capitalize text-[1.8rem]   py-0.5  pt-60 pl-10  pr-10 pb-60    mt-6 w-95   text-white  py-8 ">
      {cardData.map((card, index) => (
        <Card key={index} className="w-95    hover:shadow-[0px_2px_28px_-6px_#e9e9e9] bg-[#a5b4fc]         flex justify-evenly ...  ">
          <CardBody>
           
            <Typography variant="h5" color="blue-gray" className="mb-2    pl-5 pr-5   pt-5 text-black text-3xl   ;">
              {card.title}
            </Typography>
            <Typography className='pl-5 pr-5 pt-6 pb-5  '>
              {card.content}
           
            </Typography>
          </CardBody>
         
            
          
        </Card>
      ))}
    </div>
  );
}
