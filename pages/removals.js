import React from "react";
import Head from "next/head";
import Page from "../layouts/main";
import Link from 'next/link'

import { Container, Row, Col } from "reactstrap";

const Removals = () => (
  <div>
    <Head>
      <title>Removals Birmingham - Get FREE quote now</title>
      <meta name="description" content="Man with a Van Birmingham is providing the best local, national and international removals services with very reasonable prices" />
    </Head>
    <Page>
      <Col className="main-container">
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <br />
          <h1>Removals Birmingham</h1>
          <p>
            Our Man and Van is based in Birmingham and we provide removal services to any postcode in the UK.  We also have
            partner companies in London who can be called on to help with your move, whether it is your home or business.
          </p>
          <div className="prices">
            <h3 className='h3'>We provide:</h3>

            <li>Expert packers and movers</li>
            <li>Packaging boxes</li>
            <li>24 Hour service available 7 days of the week</li>
            <li>Fast and efficient services</li>
            <li>Competitive prices</li>
            <li>Loading and unloading services</li>
            <li>Local, national and international moves - covering Europe</li>
            <li>Dedicated contact person</li>
            <li>Uniformed staff</li>
            <li>Partner companies in London</li>
            <li>Confidential service</li>
          </div>
          <div className="text-right">
            <Link href="/get-a-quote">
              <button className="btn btn-lg btn-removals" type="button">
                Get a quote now
              </button>
            </Link>
          </div>
          <br />
        </Col>
      </Col>
      <Col sm="12" md={{ size: 8, offset: 2 }}>
        <br />
        <h2 className="h2">UK House Moving</h2>
        <p>
          We will survey and asses your move, discuss your specific needs and identify any special, fragile and
          delicate items.  Boxes will be provided and we offer free advice and information that can help to make
          your move expertly takes place.  Man and Van team will help 24/7 to reduce the stresses and strains
          of moving home.
        </p>
        <br />
        <h2 className="h2">Moving your business</h2>
        <p>
          We can help you move your office relocating anywhere in the UK or the rest of Europe.
          Man and Van Birmingham’s expert team will plan and ensure that the business move has the right level of staffing,
          equipment and vehicles to make your move meets your business needs.  Our expert team can load furniture and
          equipment on to vehicles to maximise use of space, safely and securely.
        </p>
        <br />
        <h2 className="h2">international Removals</h2>
        <p>
          Man and Van 24 provides and an international moving service covering Europe.  We ensure that your furniture and belongings are safely transported across international borders.
          <br />
          <br />
          <br />
          Getting a quote from removals service cannot be easier – just
          <Link href='/get-a-quote' passHref><a className='a'> complete this form </a></Link>
          or call us on <a className='a' href='tel:01217692055'> 01217692055 </a>. We are here 24 hours a day.
        </p>
      </Col>
    </Page>
  </div>
);

export default Removals;
