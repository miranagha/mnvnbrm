import React from "react";
import Head from "next/head";
import Page from "../layouts/main";
import Link from 'next/link'

import {Col} from "reactstrap";

const Services = () => (
  <div>
    <Head>
      <title>Man And Van service London</title>
      <meta name="description" content="Do you need us now? We are READY just give us a call now and pay us later" />
    </Head>
    <Page>
      <Col className="main-container">
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <br />
          <h1>Man And Van service London</h1>
          <p>
            Man and Van 24 provides packers and movers.  We can supply one or more from our team of experts.
          </p>
          <div className="prices">
            <h2 className="h2">Our services include:</h2>
            {/* <ul> */}
            <li>Packaging and moving services</li>
            <li>Delivery services</li>
            <li>Loading and unloading</li>
            <li>UK and Europe wide coverage</li>
            <li>Safe handling</li>
            {/* </ul> */}
          </div>
          <br />
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
        <h2 className="h2">Packaging and Moving Service</h2>
        <p>
          We ensure that packaging materials, equipment and methods used for our removal services are suitable to the purposes required.  Where possible, environmentally friendly, disposable materials are used in appropriate quantities to provide protection and safe transportation of belongings.
        <br /><br />
          Man and Van 24 promises to safely handle and adequately protect the property of our customers.  Our expert staff will ensure that property is stored and transported safely.
  
        </p>
        <br />
        <h2 className="h2">Safety</h2>
        <p>Safe handling is at the core of our services.  At Man and Van 24 we ensure that customers’ property are carried and stored well to minimise the likelihood of any accidental damage.
        <br /><br />
          Crews assigned to customers are fully briefed on the jobs and are aware of their duties to comply with any relevant statutory and regulatory requirements e.g. Health and Safety regulations, transport legislation governing the operation of goods vehicles.
        <br /><br />
          Our vehicles are equipped with lifting equipment to ensure that furniture of all shapes and sizes, fragile and delicate belongings are stored and transported safely.
  
        </p>
        <br />
        <h2 className="h2">Reliable Man and Van Company</h2>
        <p>From our first contact with customers we pledge to deal reliably and with integrity.  We pride ourselves in sticking our agreements with customers including our prices.  Our assessors work closely with customers to ensure that we provide an accurate evaluation of the work required and honour our written quotes.
        <br /><br />
          Man and Van 24 provides free of charge information and advice prior to, during and after the removal occurs.
          <br /><br />
          Our word is out bond.  We avoid extra or additional charges e.g. stair charges, by giving customers clear information and make sure that we ask the right questions.
          </p>
        <h2 className="h2">Quality</h2>
        <p>Man and Van 24 is committed to providing high standards of removal services to our customers and a confidential and safe service.  We are clear and open with our customers and our team members behave with honesty and integrity, not only with our customers and also the general public.  We recognise that when we provide our removal services we are also representing our customers and value their reputation as well as that of Man and Van 24.
          <br />
          <br />
          <br />
          Why not <Link href='/get-a-quote' passHref><a className='a'> get in touch </a></Link> 
          if you need Man and Van for your next move?
        </p>
      </Col>
    </Page>
  </div>
);

export default Services;
