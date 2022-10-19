import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [hidden, setHidden] = useState(true);
  return (
    <div className=" relative lg:pb-20 w-screen overflow-x-hidden">
      <Head>
        <title>Data visualization - Presentation</title>
      </Head>
      {hidden && (
        <div className="flex lg:hidden  h-screen w-screen bg-slate-700   justify-center  flex-col gap-y-12    text-slate-100">
          <div className="bg-slate-500 p-3 inline-flex justify-between">
            <p className="">Data Visualization</p>
            <span>白風建</span>
          </div>
          <h1 className="text-4xl p-4">
            It would be better to open this web app on a laptop, desktop or any
            larger. <br />
            <br />
            Proceed anyway?
          </h1>
          <button
            onClick={() => {
              setHidden(false);
            }}
            className="text-2xl mx-4 bg-slate-200 text-gray-700 p-3 rounded-full shadow-xl"
          >
            Proceed
          </button>
        </div>
      )}
      <div
        className={`${
          hidden ? "hidden" : "flex"
        } lg:flex   flex-col  items-center text-slate-800 overflow-hidden`}
      >
        <div className="lg:flex top-0 left-0 p-3 w-full lg:items-center lg:justify-between bg-slate-200  fixed">
          <div>
            <p className="text-2xl font-extrabold ">Data Visualization</p>
          </div>
          <div>
            <p className="text-lg font-medium">
              Presentation | October 19, 2022
            </p>
            <p className="font-bold text-2xl">Air Pollution</p>
          </div>
          <div className=" font-medium">
            <h1>By: Ded-Fegens BAPTISTE (白風建)</h1>
          </div>
        </div>
        <div className="mt-60 lg:mt-40 max-w-[60rem] flex flex-col items-center text-lg font-medium text-center overflow-hidden">
          <div>
            <h1 className="text-2xl font-extrabold bg-blue-100 p-3 mb-10">
              Outdoor Air Pollution
            </h1>
            <p>
              Air pollution is one of the world&apos;s largest health and
              environmental problems. It develops in two contexts: indoor
              (household) air pollution and outdoor air pollution. We will focus
              on Outdoor Air Pollution.
            </p>
          </div>
        </div>
        <div className="mt-40 ">
          <h1 className="text-2xl text-center font-bold mb-1 bg-red-100 py-2">
            Outdoor air pollution is attributed to millions of deaths each year
          </h1>
          <p className="text-center mb-4">Dataset 1</p>
          <p>References: Haiti, Taiwan, China, USA</p>
          <div className="w-[60rem] h-[40rem] flex flex-col items-center overflow-auto">
            <iframe
              src="https://ourworldindata.org/grapher/number-of-deaths-by-risk-factor?facet=none&country=~TWN"
              loading="lazy"
              className="w-full h-full "
            ></iframe>
          </div>
        </div>
        <div className="mt-40 ">
          <h1 className="text-2xl text-center font-bold mb-1 bg-red-100 p-2">
            Death rates from ozone bad ozone(local ozone / bad ozone) and
            particulate matter pollution
          </h1>
          <p className="text-center mb-4">Dataset 2</p>
          <p>References: Haiti, Taiwan, China, USA</p>
          <div className="w-[60rem] h-[40rem] flex flex-col items-center">
            <iframe
              src="https://ourworldindata.org/grapher/death-rates-from-air-pollution?country=~HTI"
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
        <div className="mt-40 ">
          <h1 className="text-2xl text-center font-bold mb-1 bg-red-100 py-2">
            The global distribution of deaths from outdoor air pollution
          </h1>
          <p className="text-center mb-4">Dataset 3</p>
          <div className="w-screen px-8 h-[40rem] align-center flex-col lg:flex-row flex justify-between">
            <div className="lg:w-1/2 w-full px-3">
              <p className="font-bold mb-2 text-center">
                7.8% of global deaths are attributed to outdoor air pollution
              </p>
              <iframe
                src="https://ourworldindata.org/grapher/share-deaths-outdoor-pollution?facet=none"
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="lg:w-1/2 w-full px-3">
              <p className="font-bold mb-2 text-center">
                Death rates tend to be highest across middle-income countries
              </p>
              <iframe
                src="https://ourworldindata.org/grapher/outdoor-pollution-death-rate"
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mt-40 ">
          <h1 className="text-2xl text-center font-bold mb-1 bg-red-100 p-2">
            The long-term decline of air pollution in rich countries
          </h1>
          <p className="text-center mb-4">Dataset 4</p>
          <p>References: UK, USA</p>
          <div className="w-[60rem] h-[40rem] flex flex-col items-center">
            <iframe
              src="https://ourworldindata.org/grapher/emissions-of-air-pollutants?time=1970..2016&country=~GBR"
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
