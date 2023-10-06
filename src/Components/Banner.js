import BannerImage from "../imgs/Banner.png";
import { useState } from 'react';

function Banner() {

  return (
    <section className="bg-white bg-gray-8000" id="home">
      <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="place-self-center mr-auto lg:col-span-7">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">Fastest & secure platform to invest in crypto</h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p>
          <a href="#buy" className="inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Get stardet
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>

        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={BannerImage} alt="mockup" />
          <div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 absolute lefsfg blur-3xl" onBlur={200} animate-bounce />
          <div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 absolute lefsfg2 blur-3xl" onBlur={200} animate-bounce />
          <div class="h-14 bg-gradient-to-r from-purple-500 to-pink-500 absolute lefsfg2 blur-3xl" onBlur={200} />
          <div class="h-14 bg-gradient-to-r from-purple-500 to-pink-500 absolute lefsfg blur-3xl" onBlur={200} />

        </div>

      </div>

    </section>
  );
}

export default Banner;
