import React from "react";
import Layouts from "../components/Layouts";
import Title from "../components/Title";
import TitlePage from "../components/TitlePage";
import PageSubTitle from "../components/PageSubTitle";
import Nextjs from "../public/assets/nextjs.svg";
import TailwindCSS from "../public/assets/tailwindcss.svg";
import Github from "../public/assets/github.svg";
import Image from "next/image";
import Link from "next/link";

export default function index() {
  return (
    <Layouts>
      <Title name="Pokemon Database" />
      <section className="">
        <div className="fixed opacity-20 md:left-[60%] left-[2%] bottom-[0%] md:bottom-[25%] -z-[50] select-none md:h-[450px]">
          <Image
            src={`/assets/home.png`}
            alt=""
            width={400}
            height={400}
            priority="true"
            className="w-[400px] md:w-[700px] select-none pointer-events-none"
          />
        </div>
        <TitlePage>Welcome to Pokémon Databases</TitlePage>
        <div className="mt-[5rem]">
          <div className="flex-col">
            <PageSubTitle>Build with</PageSubTitle>
            <div className="flex mt-[1.25rem] gap-2">
              <div className="bg-white/75 hover:bg-white/100 backdrop-blur-md p-3 rounded-lg flex items-center">
                <Image src={Nextjs} width={120} height={120} priority />
              </div>
              <div className="bg-white/75 hover:bg-white/100 backdrop-blur-md p-3 rounded-lg flex items-center">
                <Image src={TailwindCSS} width={200} height={200} priority />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[2rem]">
          <div className="flex-col">
            <PageSubTitle>Source Code</PageSubTitle>
            <div className="flex mt-[1.25rem]">
              <Link
                href="https://github.com/saefulbarkah/nextjs-pokemondb"
                target="_blank"
                className="bg-white/75 hover:bg-white/100 backdrop-blur-md p-3 rounded-lg flex items-center"
              >
                <Image src={Github} width={75} height={75} priority />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
}
