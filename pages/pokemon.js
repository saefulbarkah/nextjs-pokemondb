import React, { useEffect, useMemo, useState } from "react";
import BgDecoration from "../components/BgDecoration";
import Card from "../components/Card";
import PageSubTitle from "../components/PageSubTitle";
import Paragraph from "../components/Paragraph";
import TitlePage from "../components/TitlePage";
import Search from "../components/Search";
import Title from "../components/Title";
import Layouts from "../components/Layouts";
import CardLoading from "../components/CardLoading";

export default function pokemon() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [randomID, setRandomID] = useState();

  const newDataPokemon = (obj) => {
    let data = [];
    obj.map((item, i) => {
      data = [
        ...data,
        {
          id: i + 1,
          name: item.name,
        },
      ];
    });
    setPokemon(data);
  };

  const randomNumber = (value) => {
    return Math.floor(Math.random() * value);
  };

  const fetchPokemon = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=50"
      );
      const data = await response.json();
      newDataPokemon(data.results);
      setRandomID(randomNumber(data.results.length + 1));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const getPokemon = useMemo(() => {
    if (!search) return pokemon;
    return pokemon.filter((item) => {
      return item.name.includes(search.toLowerCase());
    });
  }, [pokemon, search]);

  return (
    <Layouts>
      <Title name="Pokemon Database | Pokemon" />

      <section>
        <BgDecoration
          path={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
            getPokemon.length === 1
              ? getPokemon.map((item) => item.id)
              : randomID
          }.svg`}
        />
        <div className="mt-5">
          <TitlePage>Pokemon</TitlePage>
        </div>
        <Paragraph>
          Pok??mon are mysterious creatures filled with many secrets. Some
          Pok??mon live alongside humans and some live in the wild in grassy
          fields, caves, or the sea, but much about their ecology that remains
          unknown. One of their main features is that they can be caught using a
          Pok?? Ball, which allows them to be carried around.
        </Paragraph>
        <div className="mt-[5rem]">
          <div className="xs:flex-col md:flex md:gap-5 md:justify-between items-center">
            <div className="flex-1">
              <PageSubTitle>
                <span className="text-th-cream">List </span>
                Pokemon
              </PageSubTitle>
            </div>
            <Search
              placeHolder="Search pokemon...."
              className="my-4 md:my-0"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        {isLoading ? (
          <div
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 items-stretch`}
          >
            <CardLoading count={12} />
          </div>
        ) : getPokemon.length !== 0 ? (
          <div
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 items-stretch`}
          >
            {getPokemon.map((data, i) => (
              <Card
                url={`/pokemon/${data.name}`}
                key={i}
                name={data.name}
                id={i + 1}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center my-[2rem] md:my-[5rem]">
            <p className="text-2xl capitalize">Sorry! no result found</p>
          </div>
        )}
      </section>
    </Layouts>
  );
}
