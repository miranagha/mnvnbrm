import React from "react";
import Form from "../components/Form.js";
import Page from "../layouts/main";
import Head from "next/head";
import { Col } from "reactstrap";

const GetAquote = () => (
  <div>
    <Head>
      <title>Get a free man and van quote</title>
      <meta name="description" content="Man and Van Birmingham is able to provide you the cheapest and competative quote for free no obligation."/>
    </Head>
    <Page>
      <Col className="main-container">
        <Col sm="12" md={{ size: 8, offset: 2 }}>
        <br />
          <h1>Man and Van Birmingham Quotes</h1>
          <p>Contact us for competitive quotes.  We also provide free advice and information to help 
            your move.  Our friendly staff can talk through all the stages of your move, identify what are your 
            priorities and time frames.  Our word is our bond.  We want our customers to have the confidence that 
            what Man and Van Birmingham have contracted to do we aim to keep to our promises.
          </p>
          <br />
        </Col>
      </Col>
      <Col sm="12" md={{ size: 8, offset: 2 }}>
      <br />
        <p>
          To get a free quote for Man with a Van services in Birmingham please send your details by
          completing this form below or  call us now <a className='a' href='tel:01217692055'> 01217692055 </a>
          (24/7).
        </p>
        <br />
        <div className='getAQuote jumbotron'>
        <Form />
        </div>
      </Col>
    </Page>
    <br />
  </div>
);

export default GetAquote;
