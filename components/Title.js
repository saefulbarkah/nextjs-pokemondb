import Head from "next/head";
import React from "react";

const Title = (props) => {
  return (
    <Head>
      <title>{props.name}</title>
    </Head>
  );
};

export default Title;
