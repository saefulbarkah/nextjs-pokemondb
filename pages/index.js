import Image from "next/image";
import React from "react";
import Layouts from "../components/Layouts";
import Title from "../components/Title";
import TitlePage from "../components/TitlePage";

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
      </section>
    </Layouts>
  );
}
