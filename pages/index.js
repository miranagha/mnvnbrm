import React from "react";
import Head from "next/head";
import Section from "../components/Section.js";
import Page from "../layouts/main";
import "../static/style.css";
import "bootstrap/dist/css/bootstrap.css";


const Home = () => (
  <div>
    <Head>
      <title>Man and Van London | Cheap Professional Removal Service 24/7</title>
      <meta name="description" content='Man and Van London is a specialist removals service with eighteen years of experience in the UK. We can move single item or large businesses across the uk and europe.'/>
    </Head>
    <Page>
          <Section />
    </Page>
  </div>
);

export default Home; 