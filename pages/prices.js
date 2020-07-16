import React from "react";
import Head from "next/head";
import Link from 'next/link'
import Page from "../layouts/main";
import {Row, Col } from "reactstrap";

const Prices = () => (
  <div>
    <Head>
      <title>Man and Van Prices</title>
      <meta name="description" content="Check the list of man and van prices. You can pay by hour, half-day, full-day or fixed prices that fits your move" />
    </Head>
    <Page>
      <article>
        <Col className="main-container">
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <br />
            <h1>Man and Van London Prices</h1>
            <p>
              All of our prices are inclusive and includes the following: 
            </p>
            <div className="prices">
              {/* <ul> */}
              <li>No Stair Charges or VAT </li>
              <li>Fully Insured Service</li>
              <li>Mileage and Fuel</li>
              <li>Our Drivers and helpers will load, unload and help you with everything you need</li>
              {/* </ul> */}
            </div>
            <br />
          </Col>
        </Col>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <br />
          <br />

          <table style={{ width: '100%' }}>
            <thead>
              <tr style={{ color:'#f90'}}>
                <th>Options</th>
                <th>1 Man</th>
                <th>2 Men</th>
                <th>3 Men</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pay per hour</td>
                <td>£35</td>
                <td>£50</td>
                <td>£65</td>
              </tr>
              <tr>
                <td>Half-day rate</td>
                <td>£150</td>
                <td>£195</td>
                <td>£240</td>
              </tr>
              <tr>
                <td>Full-day rate</td>
                <td>£290</td>
                <td>£380</td>
                <td>£480</td>
              </tr>
              <tr>
                <td>Everything else</td>
                <td colSpan="3">If none of the above works for you, please <a className='a' href='/get-a-quote'>get in touch</a> to provide a proper quote for your move</td>
              </tr>
            </tbody>
          </table>
          <br />
       </Col>
      </article>
    </Page>
  </div>
);

export default Prices;
