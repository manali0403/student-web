import { BsSearch } from "react-icons/bs";
import { FaFacebookF, FaTelegramPlane, FaUserCircle } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { FiUserX, FiUserPlus } from "react-icons/fi";
import { RiAnchorLine, RiFootballFill } from "react-icons/ri";
import { LuArrowDownSquare, LuMessagesSquare, LuUsers } from "react-icons/lu";
import { IoIosInformationCircleOutline, IoLogoWhatsapp } from "react-icons/io";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { BsYoutube } from 'react-icons/bs'
import { GrInstagram } from "react-icons/gr";
import { FaMessage } from "react-icons/fa6";

// Nav bar
export const menu = [
  {
    item: "Pricing",
    dropdown: ["100", "200"],
  },
  {
    item: "Indicator Store",
    dropdown: ["Indicator Store", "NLB Indicator"],
    style: "w-40",
  },
  {
    item: "Syntax",
    dropdown: ["Synatx", "Synatx", "Synatx", "Synatx"],
  },
  {
    item: "Symbol",
    dropdown: ["symbol", "symbol", "symbol", "symbol"],
  },
  {
    item: "videos",
    dropdown: ["all videos", "categories", "playlist"],
  },
  {
    item: "contact Us",
    dropdown: ["conatct us"],
    style: "w-44",
  },
  {
    item: "more",
    dropdown: ["more"],
    style: "w-40",
  },
];

// Cards
export const plans = [
  {
    title: "Free",
    card: [
      {
        amount: "0 / Lifetime",
        days: "Free",
        items: [
          "PaperTrade: Tradingview Enabled",
          "Chartink PaperTrade Access",
          "Virtual Options Tradin",
          "Futures: Trade Virtually",
          "Monthly: Three Key Indicators",
        ],
      },
    ],
  },
  {
    title: "Broker",
    card: [
      {
        amount: "199",
        days: "3 days trial",
        items: [
          "PaperTrade: Tradingview Enabled",
          "Chartink PaperTrade Access",
          "Virtual Options Tradin",
          "Futures: Trade Virtually",
          "Monthly: Three Key Indicators",
        ],
      },
      {
        amount: "999",
        days: "30 days plan",
        items: [
          "PaperTrade: Tradingview Enabled",
          "Chartink PaperTrade Access",
          "Virtual Options Tradin",
          "Futures: Trade Virtually",
          "Monthly: Three Key Indicators",
        ],
      },
      {
        amount: "2697.3",
        days: "90 days plan",
        items: [
          "PaperTrade: Tradingview Enabled",
          "Chartink PaperTrade Access",
          "Virtual Options Tradin",
          "Futures: Trade Virtually",
          "Monthly: Three Key Indicators",
        ],
      },
      {
        amount: "4795",
        days: "180 days plan",
        items: [
          "PaperTrade: Tradingview Enabled",
          "Chartink PaperTrade Access",
          "Virtual Options Tradin",
          "Futures: Trade Virtually",
          "Monthly: Three Key Indicators",
        ],
      },
      {
        amount: "8391",
        days: "365 days plan",
        items: [
          "PaperTrade: Tradingview Enabled",
          "Chartink PaperTrade Access",
          "Virtual Options Tradin",
          "Futures: Trade Virtually",
          "Monthly: Three Key Indicators",
        ],
      },
    ],
  },
  {
    title: "MT4/MT5",
    card: [
      {
        amount: "299",
        days: "3 days testing plan",
        items: [
          "PaperTrade: Tradingview Enabled",
          "Chartink PaperTrade Access",
          "Virtual Options Tradin",
          "Futures: Trade Virtually",
          "Monthly: Three Key Indicators",
        ],
      },
      {
        amount: "1300",
        days: "30 days forex plan",
        items: [
          "PaperTrade: Tradingview Enabled",
          "Chartink PaperTrade Access",
          "Virtual Options Tradin",
          "Futures: Trade Virtually",
          "Monthly: Three Key Indicators",
        ],
      },
    ],
  }
]

// dashboard page
export const sideBarMenu = [
  {
    title: '',
    items: [
      {
        itemName: "Home",
        icon: "home",
        path: "/"
      },
      {
        itemName: "Dashboard",
        icon: "clog",
        path: "dashboard"
      }
    ]
  },
  {
    title: "Features",
    items: [
      {
        itemName: "Api Credentials",
        icon: "asd",
      },
      {
        itemName: "Paper Trading V2",
        icon: "asd",
      },
      {
        itemName: "Manual Paper Traid",
        icon: "asd",
      },
      {
        itemName: "Memberships",
        icon: "asd",
        subMenu: [
          {
            subItemName: "zszds",
            icon: "asd"
          },
          {
            subItemName: "zszds",
            icon: "asd"
          },
          {
            subItemName: "zszds",
            icon: "asd"
          },
          {
            subItemName: "zszds",
            icon: "asd"
          },
        ]
      },
      {
        itemName: "M2M",
        icon: "asd",
        subMenu: [
          {
            subItemName: "zszds",
            icon: "asd"
          },
          {
            subItemName: "zszds",
            icon: "asd"
          },
          {
            subItemName: "zszds",
            icon: "asd"
          },
          {
            subItemName: "zszds",
            icon: "asd"
          },
        ]
      },
      {
        itemName: "Feature And Logs",
        icon: "asd",
        subMenu: [
          {
            subItemName: "zszds",
            icon: "asd"
          },
          {
            subItemName: "zszds",
            icon: "asd"
          },
          {
            subItemName: "zszds",
            icon: "asd"
          },
          {
            subItemName: "zszds",
            icon: "asd"
          },
        ]
      },
      {
        itemName: "Indicator",
        icon: "asd",
        subMenu: [
          {
            subItemName: "zszds",
            icon: "asd"
          },
          {
            subItemName: "zszds",
            icon: "asd"
          },
          {
            subItemName: "zszds",
            icon: "asd"
          },
          {
            subItemName: "zszds",
            icon: "asd"
          },
        ]
      },
      {
        itemName: "Tool And Help",
        icon: "asd",
        subMenu: [
          {
            subItemName: "zszds",
            icon: "asd"
          },
          {
            subItemName: "zszds",
            icon: "asd"
          },
          {
            subItemName: "zszds",
            icon: "asd"
          },
          {
            subItemName: "zszds",
            icon: "asd"
          },
        ]
      },
    ]
  },
  {
    title: "Support",
    items: [
      {
        itemName: "Telegram Group",
        icon: "asd",
      },
      {
        itemName: "Telegram Channel",
        icon: "asd",
      },
    ]
  },
]

export const randomNumbers = [
  {
    icon: <FiUserX />,
    planName: "Plan Expires in"
  },
  {
    icon: <FiUserX />,
    planName: "MT4-MT5 Plan"
  },
  {
    icon: <LuUsers />,
    planName: "Total Referral"
  },
  {
    icon: <RiAnchorLine />,
    planName: "Total Api"
  },
]

export const apiCards = [
  {
    img: "https://nextlevelbot.com/images/nextbot/zerodha.png",
    apiName: "KT"
  },
  {
    img: "https://nextlevelbot.com/images/nextbot/upstox.png",
    apiName: "Upstox"
  },
  {
    img: "https://nextlevelbot.com/images/nextbot/fyers.png",
    apiName: "Fyers"
  },
  {
    img: "https://nextlevelbot.com/images/nextbot/binance.png",
    apiName: "Binance"
  },
  {
    img: "https://nextlevelbot.com/images/nextbot/samco.png",
    apiName: "Samco"
  },
  {
    img: "https://nextlevelbot.com/images/nextbot/samco.png",
    apiName: "Samco"
  },
  {
    img: "https://nextlevelbot.com/images/nextbot/samco.png",
    apiName: "Samco"
  },
  {
    img: "https://nextlevelbot.com/images/nextbot/samco.png",
    apiName: "Samco"
  },
]

export const socialLinks = [
  {
    name: "Email",
    icon: <MdOutlineMail />,
    customStyle: "border border-[#9F79C9] hover:bg-[#9F79C9] hover:text-[#eee]"
  },
  {
    name: "Referral URL",
    icon: <FiUserPlus />,
    customStyle: "border border-[#9099DC] hover:bg-[#9099DC] hover:text-[#eee]"
  },
  {
    name: "chartink webhook",
    icon: "",
    customStyle: "border border-[#B96986] hover:bg-[#B96986] hover:text-[#eee]"
  },
  {
    name: "sequence webhook",
    icon: "",
    customStyle: "border border-[#9099DC] hover:bg-[#9099DC] hover:text-[#eee]"
  },
  {
    name: "telegram alert",
    icon: <IoPaperPlaneOutline />,
    customStyle: "border border-[#9F79C9] hover:bg-[#9F79C9] hover:text-[#eee]"
  },
  {
    name: "enable TG notification",
    icon: <IoPaperPlaneOutline />,
    customStyle: "border border-[#B96986] hover:bg-[#B96986] hover:text-[#eee]"
  },
]


// homepage list
export const info_list = [
  "Automate Your Tradingview (TV) or Chartink Strategies for Maximum Profits!",
  "Unlock Your Earning Potential - Sell Your Custom Indicators on Our Marketplace!",
  "Seamless API Management: Trigger Orders with Nextlevelbot's Order Table Feature!",
  "Effortless Integration: Tradingview and Chartink Made Easy with Nextlevelbot!",
  "Tailored Strategies: Fully or Semi-Automated Options for Your Trading Edge!",
  "Trade Anywhere: All Devices Supported - Smartphone, Tablet, PC, or Laptop!",
  "Master Multi-Account Trading: Stay in Control with Nextlevelbot!",
  "Experience Virtual Trading in Real-Time: Boost Your Skills Risk-Free!",
  "Stay Ahead with Instant Telegram Alerts: Personal, Channel, or Group Notifications!",
  "Supercharge Your Trading Efficiency: Low Latency and Smooth Experience with Nextlevelbot's Single API and Multi-Account Support!",
  '"Over 31,000 Accounts and 17,000 Active Users on Our Platform - Join the Community Today!"',
];

export const aboutData = [
  {
    number: 40628,
    count: "Total Current Users",
    description: "Not Fake Data",
  },
  {
    number: 482475,
    count: "24 Hours API Request",
    description: "All Brokers or Exchange Request",
  },
  {
    number: 22217,
    count: "Total of User API",
    description: "In Our Platform",
  },
  {
    number: 18800,
    count: "Total Youtube Subscriber",
    description: "Subscribe Now",
  },
];


// Affiliate links
export const links = [
  {
    img: "https://nextlevelbot.com/images/nextbot/zerodha.png",
    apiName: "KT"
  },
  {
    img: "https://nextlevelbot.com/images/nextbot/upstox.png",
    apiName: "Upstox"
  },
  {
    img: "https://nextlevelbot.com/images/nextbot/fyers.png",
    apiName: "Fyers"
  },
  {
    img: "https://nextlevelbot.com/images/nextbot/binance.png",
    apiName: "Binance"
  },
  {
    img: "https://nextlevelbot.com/images/nextbot/samco.png",
    apiName: "Samco"
  },
  {
    img: "https://nextlevelbot.com/images/nextbot/samco.png",
    apiName: "Samco"
  },
  {
    img: "https://nextlevelbot.com/images/nextbot/samco.png",
    apiName: "Samco"
  },
  {
    img: "https://nextlevelbot.com/images/nextbot/samco.png",
    apiName: "Samco"
  },
  {
    img: "https://nextlevelbot.com/images/nextbot/binance.png",
    apiName: "Binance"
  },
]

export const apps = [
  {
    hyperLinks: "https://www.youtube.com/c/NextLevelBot/videos",
    icon: <BsYoutube />,
    name: "youtube",
    customStyle: "bg-[#ff0000] border-2 border-[#ff0000]"
  },
  {
    hyperLinks: "https://www.youtube.com/c/NextLevelBot/videos",
    icon: <IoLogoWhatsapp />,
    name: "WhatsApp",
    customStyle: "bg-[#28A745] border-2 border-[#28A745]"
  },
  {
    hyperLinks: "https://www.youtube.com/c/NextLevelBot/videos",
    icon: <RiFootballFill />,
    name: "Community",
    customStyle: "bg-[#0B2238] border-2 border-[#0B2238]"
  },
  {
    hyperLinks: "https://www.youtube.com/c/NextLevelBot/videos",
    icon: <FaTelegramPlane />,
    name: "Telegram Group",
    customStyle: "bg-[#007BB5] border-2 border-[#007BB5]"
  },
  {
    hyperLinks: "https://www.youtube.com/c/NextLevelBot/videos",
    icon:<FaTelegramPlane />,
    name: "Telegram Channel",
    customStyle: "bg-[#007BB5] border-2 border-[#007BB5]"
  },
  {
    hyperLinks: "https://www.youtube.com/c/NextLevelBot/videos",
    icon:<GrInstagram />,
    name: "Instagram",
    customStyle: "bg-[#C32AA3] border-2 border-[#C32AA3]"
  },
  {
    hyperLinks: "https://www.youtube.com/c/NextLevelBot/videos",
    icon: <FaFacebookF />,
    name: "Facebook",
    customStyle: "bg-[#1877F2] border-2 border-[#1877F2]"
  },
  {
    hyperLinks: "https://www.youtube.com/c/NextLevelBot/videos",
    icon: <LuMessagesSquare />,
    name: "WebChat",
    customStyle: "bg-[#00AFF0] border-2 border-[#00AFF0]"
  },
]

export const footer = [
  {
    href: "https://www.kredallino.tech/privacy.html",
    name: "Privacy Policy"
  },
  {
    href: "https://www.kredallino.tech/refund.html",
    name: "Refund Policy"
  },
  {
    href: "https://www.kredallino.tech/terms.html",
    name: "Terms"
  },
  {
    href: "https://www.kredallino.tech/terms.html",
    name: "Cookie Policy"
  },
  {
    href: "https://www.kredallino.tech/terms.html",
    name: "Sitemap"
  },
]
