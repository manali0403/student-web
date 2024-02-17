import React from 'react'

const Information = () => {
  return (
    <div className='flex flex-col gap-10  p-6 py-10'>
      <div className='max-w-[1100px] w-full mx-auto bg-[#fff]  p-6 py-10 px-10'>
        <div className="row-one flex gap-8">
          <div className="left">
            <img src="https://nextlevelbot.com/home/img/icons/france.svg" alt="" />

            <h1 className='text-[1.3rem] font-semibold mt-8 mb-3 text-[#0B2238]'>International API Bridge</h1>

            <p className='text-[#A7AFB7]'>We proudly support a selection of prominent international Public APIs, ensuring a wide range of trading options for our users. The supported APIs include Binance, Alpaca (both Alpaca and Alpaca Demo versions), Fxcm (along with Fxcm Demo), FTX, WazirX, MT4, MT5, Bitbns, Delta, and Delta Demo.</p>
          </div>

          <div className="right">
            <img src="https://nextlevelbot.com/home/img/icons/Decentralized.svg" alt="" />

            <h1 className='text-[1.3rem] font-semibold mt-8 mb-3 text-[#0B2238]'>Indian Public API Bridge</h1>

            <p className='text-[#A7AFB7]'>Nextlevelbot proudly supports a wide range of Indian Public APIs, offering a comprehensive array of options for traders in the Indian market. The list of supported APIs includes Fyers, Aliceblue, Angel One, KT Securities, MT (MetaTrader), Finvasia, IIFL, 5paisa, Samco, Kite (by Zerodha), and Upstox, among others.</p>
          </div>
        </div>

        <div className="row-two flex items-center gap-8">
          <div className="left">
            <img className='max-w-[500px]' src="https://nextlevelbot.com/home/img/tecno.png" alt="" />
          </div>

          <div className="right">
            <img src="https://nextlevelbot.com/home/img/icons/energy.svg" alt="" />

            <h1 className='text-[1.3rem] font-semibold mt-8 mb-3 text-[#0B2238]'>Virtual Trade with Real Time update fully or Semi-automated.
            </h1>

            <div className='flex flex-col gap-8'>
              <p className='text-[#A7AFB7]'>Nextlevelbot API Bridge offers a remarkable feature - free virtual trade integrated with Tradingview or Chartink screener and Option paper trade. This service comes at no cost, with no hidden charges, providing a fully automated experience. Simply sign up on Nextlevelbot.com to take advantage of this incredible opportunity.
              </p>
              <p className='text-[#A7AFB7]'>With virtual trading, you can enhance your learning and accuracy in a risk-free environment, boosting your confidence as a trader. There are no limitations, allowing you to explore and experiment with different strategies, all while gaining valuable insights and sharpening your trading skills.
              </p>
              <p className='text-[#A7AFB7]'>Embrace the power of automation and virtual trading with Nextlevelbot, as we facilitate your journey to becoming a more proficient and successful trader, without any financial risk. Join us today to unlock this feature and embark on a journey of growth and knowledge in the world of trading.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row-three flex gap-8 mt-10 bg-[#fff] py-10">
        <div className="left">
          <img className='max-w-[700px] rounded-tr-[14px] rounded-br-[14px]' src="https://nextlevelbot.com/home/img/Automation-trading-platform-software-nextlevelbot.jpg" alt="" />
        </div>


        <div className="right flex flex-col gap-10">
          <div className="element-one max-w-[400px]">
            <img src="https://nextlevelbot.com/home/img/icons/statistics.svg" alt="" />

            <h1 className='text-[1.3rem] font-semibold mt-8 mb-3 text-[#0B2238]'>Auto-Strike Price in Option Indian API Bridge
            </h1>

            <div className='flex flex-col gap-8'>
              <p className='text-[#A7AFB7]'>Nextlevelbot empowers you with a powerful feature in the NFO (Nifty and Bank Nifty Options) segment - the ability to choose the auto Strike Price in Options. This unique feature allows for easy automation of At-The-Money (ATM) or Out-of-The-Money (OTM) options, giving you full freedom and control over your trading decisions.
              </p>
            </div>
          </div>

          <div className="element-two max-w-[400px]">
            <img src="https://nextlevelbot.com/home/img/icons/engage.svg" alt="" />

            <h1 className='text-[1.3rem] font-semibold mt-8 mb-3 text-[#0B2238]'>Multi Account or API Management Feature with Low latency
            </h1>

            <div className='flex flex-col gap-8'>
              <p className='text-[#A7AFB7]'>Nextlevelbot offers an incredible Multi-Account or API Management feature that is especially valuable for professionals in the trading community. With this advanced capability, experienced traders with a high IQ level can efficiently manage multiple accounts simultaneously. There are no limitations on the number of accounts or APIs you can handle through Nextlevelbot.
              </p>
            </div>
          </div>

          <div className="element-three max-w-[400px]">
            <img src="https://nextlevelbot.com/home/img/icons/Thunder-move.svg" alt="" />

            <h1 className='text-[1.3rem] font-semibold mt-8 mb-3 text-[#0B2238]'>Chartink Scanner
            </h1>

            <div className='flex flex-col gap-8'>
              <p className='text-[#A7AFB7]'>With Nextlevelbot's support for Chartink scanner, the most powerful full web application, triggering API actions becomes effortless and straightforward. Setting up the integration is a breeze, and there's no requirement for VPS or cloud services. Enjoy the convenience of running your Algo seamlessly with Nextlevelbot, all without worrying about system shutdowns, allowing you to focus on maximizing your trading strategies and achieving your goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information