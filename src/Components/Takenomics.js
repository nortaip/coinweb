import { useState } from 'react';
// import Metameask from '../imgs/metamask.svg';

function Takenomics() {
    const [userAddress, setUserAddress] = useState('');
    const [ethBalance, setEthBalance] = useState(0);

    // Initialize Web3 and set the provider

    // Function to connect to MetaMask
    const connectToMetaMask = async () => {
        if (window.ethereum) {
            try {
                // Request account access
                await window.ethereum.request({ method: 'eth_requestAccounts' });

                // Get the user's Ethereum address
                const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                setUserAddress(accounts[0]);

                // Get the user's ETH balance
                setEthBalance(ethBalance);

            } catch (error) {
                console.error('Error connecting to MetaMask:', error);
            }
        } else {
            console.error('MetaMask is not installed.');
        }
    }
    return (
        <section className="bg-gray-50 bg-gray-8000" id='buy'>
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 flex  flex-col items-center">
                <div className="mb-8 max-w-screen-md lg:mb-16 text-center ">
                    <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">Takenomics</h2>
                    <p className="Takenomics">10,000,000 Tokens</p>
                </div>
                <div className="grid gap-y-4 bg-white dark:bg-slate-900 w-md max-w-full rounded-2xl py-4 px-6 shadow-lg mx-auto">
                    <form >
                        <h2 className="mb-2 text-center font-bold text-2xl border-b border-solid border-gray-800 pb-4" > ERC-20 </h2>
                        <div className="relative flex flex-col" >
                            <div className="flex justify-between items-end" >
                                {/* <div className="flex gap-3 items-center">
                                    <button className="flex flex-wrap items-center gap-x-2">
                                        <p className="flex flex-wrap items-center gap-x-2">
                                            <img src="/images/tokens/ethereum_32.webp" alt="Ethereum logo" width="40" height="40" className="bg-white rounded-full w-7 h-7 p-1" loading="lazy" /> ETH</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-current" viewBox="0 0 512 512">
                                            <title>Open modal</title>
                                            <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"></path>
                                        </svg>
                                    </button>
                                </div> */}
                                <span className="text-slate-300" > Balance: &nbsp;&nbsp;
                                    {ethBalance > 0 && (
                                        ethBalance // Render ethBalance as a string here
                                    )} </span> ETH
                            </div>
                            {/* <div className="bg-slate-800 rounded-2xl mt-3 px-5 pb-1 mb-3" >
                                <input type="text" placeholder="0.0" className="price-input" readOnly="" data-v-ca763e96="" />
                            </div> */}
                            {/* <div className="justify-end items-end w-full flex gap-1 mb-2" >
                                <button type="button" className="font-bold rounded-lg text-blue-600 dark:text-blue-400 bg-blue-400/10 hover:bg-blue-400/20 px-2" >50%</button>
                                <button type="button" className="font-bold rounded-lg text-blue-600 dark:text-blue-400 bg-blue-400/10 hover:bg-blue-400/20 px-2" >Max</button>
                            </div> */}
                        </div>
                        {/* <div className="flex w-full items-center" >
                            <span className="flex-auto bg-gray-500 h-px" >
                            </span>
                            <button className="focus:outline-none" >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 p-2 text-blue-600 dark:text-blue-400 bg-blue-400/10 hover:bg-blue-400/20 rounded-full" viewBox="0 0 512 512" >
                                    <title >Swap tokens</title>
                                    <path d="M434.67 285.59v-29.8c0-98.73-80.24-178.79-179.2-178.79a179 179 0 00-140.14 67.36m-38.53 82v29.8C76.8 355 157 435 256 435a180.45 180.45 0 00140-66.92" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" ></path>
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M32 256l44-44 46 44M480 256l-44 44-46-44" ></path>
                                </svg>
                            </button>
                        </div>
                        <div className="relative flex flex-col" >
                            <div className="flex justify-between items-end" >
                                <div className="flex gap-3 items-center">
                                    <button className="flex flex-wrap items-center gap-x-2">
                                        <p className="flex flex-wrap items-center gap-x-2">
                                            <img src="/images/tokens/uni.svg" alt="UNISWAP logo" width="40" height="40" className="bg-white rounded-full w-7 h-7 p-1" loading="lazy" /> UNISWAP</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-current" viewBox="0 0 512 512">
                                            <title>Open modal</title>
                                            <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"></path>
                                        </svg>
                                    </button>
                                    <img src={Metameask} className="h-6 cursor-pointer" alt="Import token to metamask" title="Import token to metamask" />
                                </div>
                                <span className="text-slate-300" > Balance: 0 UNISWAP</span>
                            </div>
                            <div className="bg-slate-800 rounded-2xl mt-3 px-5" >
                                <input type="text" placeholder="0.0" className="price-input" readOnly="" data-v-ca763e96="" />
                            </div>
                        </div> */}
                        <br />
                        <button
                            type="button"
                            onClick={connectToMetaMask}
                            className="button-submit text-blue-600 dark:text-blue-400 bg-blue-400/10 hover-bg-blue-400/20 w-full p-4 font-bold rounded-lg"
                        >
                            Connect Wallet
                        </button>
                        <br /> <br />
                        <a
                            type="button"
                            target='_blank'
                            href="https://etherscan.io/token/0xcf70a47860a35394dd30fb6d06b4af7a026d357b"
                            className="button-submit text-blue-600 dark:text-blue-400 bg-blue-400/10 hover-bg-blue-400/20 w-full p-4 font-bold rounded-lg" rel="noreferrer"
                        >
                            Buy
                        </a>
                        <div className="mt-4">
                            {userAddress && (
                                <p className="text-gray-500 dark:text-gray-400">Connected Address: {userAddress}</p>
                            )}
                        </div>
                        {/* <div className="mt-4">
                            {ethBalance > 0 && (
                                <p className="text-gray-500 dark:text-gray-400">ETH Balance: {ethBalance} ETH</p>
                            )}
                        </div> */}
                    </form>
                </div>
            </div >
        </section >
    );
}

export default Takenomics;
// 0xcF70A47860a35394dd30FB6D06b4AF7a026d357B