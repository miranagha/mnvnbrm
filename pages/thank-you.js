import React from "react";
import Link from 'next/link';
import Head from "next/head";



const Thanks = () => (
  <div className='text-center' style={{ paddingTop: '105px' }}>
    <Head>
      <title>Thanks for your request</title>
    </Head>
    <img
      src="/static/thank-you.png"
      alt="thank you for your request"
    />
    <p className='text-center' style={{ paddingTop: '45px' }}> Thank you, we will get back to you within few minutes. 
    Return to
    <Link href='/' passHref><a> HOME</a></Link> </p>
  </div>
);

export default Thanks;
