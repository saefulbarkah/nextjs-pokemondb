import Layouts from "../../components/Layouts";
import React, { useEffect, useState } from "react";
import PageSubTitle from "../../components/PageSubTitle";
import BgDecoration from "../../components/BgDecoration";
import Border from "../../components/Border";
import TitlePage from "../../components/TitlePage";
import { BsFillCaretLeftFill } from "react-icons/bs";
import Dropdown from "../../components/Dropdown";
import DropdownItem from "../../components/DropdownItem";
import ChangeColorNumber from "../../components/ChangeColorNumber";
import Title from "../../components/Title";
import Link from "next/link";
import Image from "next/image";
import BackPage from "../../components/BackPage";
import { useRouter } from "next/router";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function AvatarPokemon({ pokemon, loading }) {
  return (
    <>
      {loading ? (
        <>
          <SkeletonTheme baseColor="#3a364d" highlightColor="#433e59">
            <div className="flex items-center gap-5">
              <div className="rounded-full  flex items-center">
                <Skeleton count={1} width={90} height={90} circle="true" />
              </div>
              <div className="flex flex-col gap-2">
                <Skeleton count={1} width={125} height={40} />
              </div>
            </div>
          </SkeletonTheme>
        </>
      ) : (
        <>
          <section className="my-5">
            <BgDecoration
              path={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              priority={true}
            />
            <div className="flex items-center gap-5">
              <div className="bg-th-blue-dark rounded-full  flex items-center">
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                  height={90}
                  width={90}
                  className="rounded-full"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold uppercase text-3xl">{pokemon.name}</p>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

function InfoPokemon({ pokemon, types, stats, elementColor, loading }) {
  return (
    <>
      {loading ? (
        <SkeletonTheme baseColor="#3a364d" highlightColor="#433e59">
          <div className="mt-[5rem]">
            <Skeleton count={1} width={180} height={35} />
          </div>
          <div className="my-[3rem] lg:mx-[10rem]">
            <PageSubTitle>
              <Skeleton count={1} width={200} height={35} />
            </PageSubTitle>
            <div className="mt-5">
              <div className="bg-th-blue-dark/80 p-5 shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                  {/* details */}
                  <div className="flex flex-col order-2 md:order-1 md:w-full col-span-3 md:col-span-1">
                    <div className="flex flex-col text-lg leading-3 my-2">
                      <Skeleton count={1} width={125} height={25} />
                    </div>
                    <div className="flex flex-col text-lg leading-3 my-2">
                      <div className="my-2">
                        <Skeleton count={1} width={70} height={10} />
                      </div>
                      <Skeleton count={1} width={100} height={20} />
                    </div>
                    <div className="flex flex-col text-lg leading-3 my-2">
                      <div className="my-2">
                        <Skeleton count={1} width={70} height={10} />
                      </div>
                      <Skeleton count={1} width={100} height={20} />
                    </div>
                    <div className="flex flex-col text-lg my-2 gap-2">
                      <Skeleton count={1} width={70} height={10} />
                      <div className="grid grid-cols-3 space-x-2 md:grid-cols-2 text-center">
                        <div>
                          <Skeleton count={1} width={80} height={30} />
                        </div>
                        <div>
                          <Skeleton count={1} width={80} height={30} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* images */}
                  <div className="flex flex-col justify-center items-center order-1 md:order-2 md:w-full col-span-3 md:col-span-1">
                    <div className="w-[200px] h-[200px] flex justify-center relative">
                      <Skeleton
                        count={1}
                        circle={true}
                        width={125}
                        height={125}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 items-center gap-2 order-last justify-center md:w-full col-span-3 md:col-span-1">
                    <div className="flex flex-col text-lg leading-3 my-2 col-span-2">
                      <Skeleton count={1} width={100} height={20} />
                    </div>
                    {Array(5)
                      .fill(null)
                      .map((data, i) => (
                        <div className="flex flex-col text-lg" key={i}>
                          <Skeleton count={1} width={75} height={20} />
                          <Skeleton count={1} width={75} height={20} />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SkeletonTheme>
      ) : (
        <>
          <section>
            <div className="mt-[5rem]">
              <TitlePage>Information</TitlePage>
            </div>
            <div className="my-[3rem] lg:mx-[10rem]">
              <PageSubTitle>
                <span className="text-th-cream">Pokemon </span>Profile
              </PageSubTitle>
              <div className="mt-5">
                <div className="bg-th-blue-dark/80 p-5 shadow-md">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {/* details */}
                    <div className="flex flex-col order-2 md:order-1 md:w-full col-span-3 md:col-span-1">
                      <div className="flex flex-col text-lg leading-3 my-2">
                        <p className="font-bold text-2xl text-center md:text-start capitalize">
                          {pokemon.name}
                        </p>
                      </div>
                      <div className="flex flex-col text-lg leading-3 my-2">
                        <p className="font-light text-sm">Height</p>
                        <p className="font-bold text-xl">{pokemon.height}</p>
                      </div>
                      <div className="flex flex-col text-lg leading-3 my-2">
                        <p className="font-light text-sm">Weight</p>
                        <p className="font-bold text-xl">
                          {pokemon.weight}
                          <span className="font-light text-sm"> lbs.</span>
                        </p>
                      </div>
                      <div className="flex flex-col text-lg my-2 gap-2">
                        <p className="font-light text-sm">Type</p>
                        <div className="grid grid-cols-3 md:grid-cols-2 gap-2 text-center items-stretch">
                          {elementColor.map((data, key) =>
                            types.map((i) =>
                              data.element === i["type"].name ? (
                                <p
                                  className={`rounded-lg capitalize ${
                                    data.element === i["type"].name &&
                                    data.color
                                  }`}
                                  key={key}
                                >
                                  {i["type"].name}
                                </p>
                              ) : null
                            )
                          )}
                        </div>
                      </div>
                    </div>

                    {/* images */}
                    <div className="flex flex-col justify-center items-center order-1 md:order-2 md:w-full col-span-3 md:col-span-1">
                      <div className="w-[200px] h-[200px] flex justify-center relative">
                        <Image
                          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                          fill
                          sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                          priority="true"
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 items-center gap-2 order-last justify-center md:w-full col-span-3 md:col-span-1">
                      <div className="flex flex-col text-lg leading-3 my-2 col-span-2">
                        <p className="font-bold text-2xl text-center capitalize">
                          Base Stats
                        </p>
                      </div>
                      {stats.map((item, key) => (
                        <div
                          className="flex flex-col text-lg leading-3 my-2"
                          key={key}
                        >
                          <p className="font-light text-sm capitalize">
                            {item["stat"].name}
                          </p>
                          <p className="font-bold text-xl">{item.base_stat}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

function AbilityPokemon(props) {
  const [abilityEffect, setAbilityEffect] = useState([]);

  const fetchAbility = async (name) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/ability/${name}`);
      const data = await response.json();
      setAbilityEffect((state) => [...state, data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!props.loading) {
      props.ability.map((item) => {
        fetchAbility(item.ability["name"]);
      });
    }
  }, [props.loading]);
  return (
    <>
      {props.loading ? (
        <>
          <p>Loading...</p>
        </>
      ) : (
        <section className="h-full">
          <Border />
          <div className="my-4">
            <TitlePage>Ability</TitlePage>
          </div>
          <div className="mt-[2rem] mb-[6rem] lg:mx-[10rem]">
            {/* abiilites */}
            <PageSubTitle>
              <span className="text-th-cream capitalize">ability </span>
              <span className="capitalize">list</span>
            </PageSubTitle>
            {props.ability.map((item, i) => (
              <div className="mt-5" key={i}>
                <Dropdown title={item["ability"].name.split("-").join(" ")}>
                  {abilityEffect.map((data, index) =>
                    data.name === item["ability"].name
                      ? data.effect_entries.map((ability, no) =>
                          ability.language["name"] === "en" ? (
                            <React.Fragment key={no}>
                              <DropdownItem
                                title="Effect"
                                className="text-th-blue"
                              >
                                <ChangeColorNumber
                                  text={ability.effect}
                                  hexColor="#377DCB"
                                  regex={/([0-9]+.)/g}
                                />
                              </DropdownItem>
                              <DropdownItem
                                title="Short Effect"
                                className="text-th-cream"
                              >
                                <ChangeColorNumber
                                  text={ability.short_effect}
                                  hexColor="#377DCB"
                                  regex={/([0-9]+.)/g}
                                />
                              </DropdownItem>
                            </React.Fragment>
                          ) : null
                        )
                      : ""
                  )}
                </Dropdown>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default function showPokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [elementColor, setElementColor] = useState([]);
  const { query, isReady } = useRouter();

  const fetchPokemon = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${query.name}`
      );
      const data = await response.json();
      setPokemon(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchElement = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/element");
      const data = await response.json();
      setElementColor(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!isReady) return console.log("fetching.....");
    fetchPokemon();
    fetchElement();
  }, [isReady]);
  return (
    <>
      <Title name={`Pokemon Database | ${!isReady ? "" : pokemon.name}`} />
      <Layouts>
        <BackPage url="/pokemon" title="All Pokemon" />

        {/* Avatar pokemon */}
        <AvatarPokemon pokemon={pokemon} loading={loading} />

        {/* Pokemon information */}
        <InfoPokemon
          pokemon={pokemon}
          types={pokemon.types}
          stats={pokemon.stats}
          elementColor={elementColor}
          loading={loading}
        />

        {/* ability */}
        <AbilityPokemon
          pokemon={pokemon}
          ability={pokemon.abilities}
          loading={loading}
        />
      </Layouts>
    </>
  );
}
