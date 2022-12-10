import React, { useEffect, useState } from "react";
import Layouts from "../components/Layouts";
import { useMemo } from "react";
import BgDecoration from "../components/BgDecoration";
import Card from "../components/Card";
import CardLoading from "../components/CardLoading";
import PageSubTitle from "../components/PageSubTitle";
import Paragraph from "../components/Paragraph";
import Search from "../components/Search";
import TitlePage from "../components/TitlePage";
import Title from "../components/Title";

function ListBerries({ berries }) {
  const [isLoading, setIsLoading] = useState(true);
  const [searchBerry, setSearchBerry] = useState("");
  const getBerries = useMemo(() => {
    if (!searchBerry) {
      setIsLoading(false);
      return berries;
    }
    return berries.filter((item) => {
      return item.name.includes(searchBerry.toLowerCase());
    });
  }, [berries, searchBerry]);
  return (
    <div className="mt-[5rem]">
      <div className="xs:flex-col md:flex md:gap-5 md:justify-between items-center">
        <div className="flex-1">
          <PageSubTitle>
            <span className="text-th-cream">List </span>
            Berry
          </PageSubTitle>
        </div>
        <Search
          placeHolder="Search berry...."
          className="my-4 md:my-0"
          onChange={(e) => setSearchBerry(e.target.value)}
        />
      </div>

      {isLoading ? (
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 items-stretch`}
        >
          <CardLoading count={12} />
        </div>
      ) : getBerries.length !== 0 ? (
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 items-stretch`}
        >
          {getBerries.map((data, i) => (
            <Card
              key={i}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${data.name}-berry.png`}
              name={data.name}
              url={data.name}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center my-[2rem] md:my-[5rem]">
          <p className="text-2xl capitalize">Sorry! no result found</p>
        </div>
      )}
    </div>
  );
}

export default function berry({ berries }) {
  return (
    <>
      <Title name="Pokemon Database | Berry" />
      <Layouts>
        <section>
          <BgDecoration path={`/assets/berry.png`} />
          <div className="mt-5">
            <TitlePage>Berry</TitlePage>
            <div className="my-2">
              <Paragraph>
                Berries were introduced in Generation II to take advantage of
                the newly introduced held items feature. Pokémon do not know how
                to use held artificial healing items, such as Potions and Full
                Heals, but they can use held Berries.
              </Paragraph>
            </div>
          </div>

          {/* list berries */}
          <ListBerries berries={berries} />
        </section>
      </Layouts>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`https://pokeapi.co/api/v2/berry/?limit=9999`);
  const data = await response.json();
  return {
    props: { berries: data.results },
  };
}
