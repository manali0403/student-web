import { BsSearch } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { FiUserX, FiUserPlus } from "react-icons/fi";
import { RiAnchorLine } from "react-icons/ri";
import { LuArrowDownSquare, LuUsers } from "react-icons/lu";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";



// Nav bar
export const menu = [
  {
    item: "Pricing",
    dropdown: [
      "100",
      "200"
    ]
  },
  {
    item: "Indicator Store",
    dropdown: [
      "Indicator Store",
      "NLB Indicator",
    ],
    style: "w-40"
  },
  {
    item: "Syntax",
    dropdown: [
      "Synatx",
      "Synatx",
      "Synatx",
      "Synatx",
    ]
  },
  {
    item: "Symbol",
    dropdown: [
      "symbol",
      "symbol",
      "symbol",
      "symbol",

    ]
  },
  {
    item: "videos",
    dropdown: [
      "all videos",
      "categories",
      "playlist",
    ]
  },
  {
    item: "contact Us",
    dropdown: [
      "conatct us"
    ],
    style: "w-44",
  },
  {
    item: "more",
    dropdown: [
      "more",
    ],
    style: "w-40",
  },
]

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
        ]



      },
    ]

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
        ]

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
        ]

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
        ]

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
        ]

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
        ]

      },

    ]
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
        ]

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
        ]

      },
    ],
  }
]

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
    icon:  <RiAnchorLine />,
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
