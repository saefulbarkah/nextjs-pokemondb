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

function AvatarPokemon({ pokemon }) {
  return (
    <section className="my-5">
      <BgDecoration
        path={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
      />
      <div className="flex items-center gap-5">
        <div className="bg-th-blue-dark rounded-full  flex items-center">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            height={90}
            width={90}
            priority
            className="rounded-full object-cover h-[90px] w-[90px] bg-center"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold uppercase text-3xl">{pokemon.name}</p>
        </div>
      </div>
    </section>
  );
}

function InfoPokemon({ pokemon, types, stats, elementColor }) {
  return (
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
                              data.element === i["type"].name && data.color
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
                    priority
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
  );
}

function AbilityPokemon({ ability, abilityEffect }) {
  return (
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
        {ability.map((item, i) => (
          <div className="mt-5" key={i}>
            <Dropdown title={item["ability"].name.split("-").join(" ")}>
              {abilityEffect.map((data, index) =>
                data.name === item["ability"].name
                  ? data.effect_entries.map((ability, no) =>
                      ability.language["name"] === "en" ? (
                        <React.Fragment key={no}>
                          <DropdownItem title="Effect" className="text-th-blue">
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
  );
}

export default function showPokemon({ pokemon, ability, elementColor }) {
  return (
    <>
      <Title name={`Pokemon Database | ${pokemon.name}`} />
      <Layouts>
        <BackPage url="/pokemon" title="All Pokemon" />

        {/* Avatar pokemon */}
        <AvatarPokemon pokemon={pokemon} />

        {/* Pokemon information */}
        <InfoPokemon
          pokemon={pokemon}
          types={pokemon.types}
          stats={pokemon.stats}
          elementColor={elementColor}
        />

        {/* ability */}
        <AbilityPokemon
          pokemon={pokemon}
          abilityEffect={ability}
          ability={pokemon.abilities}
        />
        <BackPage url="/pokemon" title="All Pokemon" />
      </Layouts>
    </>
  );
}

export async function getServerSideProps(context) {
  // get params
  const name = context.params.name;
  // pokemon
  const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const dataPokemon = await poke.json();
  // element
  const resElement = await fetch(`${process.env.BASE_URL}/api/element`);
  const dataElement = await resElement.json();
  // get ability
  const abilities = dataPokemon.abilities.map(async (item) => {
    const resAbilities = await fetch(
      `https://pokeapi.co/api/v2/ability/${item["ability"].name}`
    );
    return resAbilities.json();
  });
  return {
    props: {
      pokemon: dataPokemon,
      ability: await Promise.all(abilities),
      elementColor: dataElement,
    },
  };
}
