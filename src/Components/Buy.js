import Adimgss from "../imgs/sdimg.png";

function Aboutbuy() {
    return (
        <section className="bg-gray-50 bg-gray-8000">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 flex  flex-col items-center">
                <div className="mb-8 max-w-screen-md lg:mb-16 text-center ">
                    <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">How to buy</h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">We invest more resources than any other platform in making sure great support from real people is a click away, whenever</p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-8 md:space-y-0">
                    <div className="bg-indigos py-8 px-8 flex  flex-col items-center max-w-xs">
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <img className="ssd" src={Adimgss} alt="sds" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white mt-4">CoinFlip ATMs</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-center">Make sure you have ETH in your wallet and connect to the site with MetaMask or Trust Wallet. Swap for $EVILPEPE tokens.</p>
                    </div>
                    <div className="bg-indigos py-8 px-4 flex  flex-col items-center max-w-xs">
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <img className="ssd" src={Adimgss} alt="sds" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white text-center mt-4">CoinFlip ATMs</h3>
                        <p className="text-gray-500 dark:text-gray-400">If you prefer, you can swap USDT for $EVILPEPE. Approve the use of USDT in your wallet and make sure you have ETH</p>
                    </div>
                </div>
                <br />
                <button className="btnsd">Buy now</button>
            </div>
        </section>
    )
}

export default Aboutbuy;
