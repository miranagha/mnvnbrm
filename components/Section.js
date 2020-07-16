import React from "react";
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';
import Form from "../components/Form.js";


class Section extends React.Component {

    render() {
        return (
            <section>
                <div className="main-page-container col-lg-12">
                    <br />
                    <div >
                        <Row>
                            <Col md="8">
                                <Row>
                                    <Col md="1">
                                    </Col>
                                    <Col md="10" className='jumbotron jumb'>
                                        <h1 style={{ color: '#f90' }} className='text-center'>London's Best Man and Van Service</h1>
                                        <br />
                                        <p className="text-eft">
                                            Man and Van London is the ultimate service for removals and packing services with eighteen years of
                                            experience. We can help to relocate your home, office or  a large corporation wishing to move. We have a
                                            professional team ready to serve you providing a fast, efficient and competitively priced service.
                                            Based in the UK we cover the UK and the rest of Europe.
                                            Let our friendly staff make your next move easier than expectations.
                                            <br /><br />
                                            We provide a flexible approach to help our customers to plan an organised and effective removal that
                                            meets their needs.  Our team can be hired on an hourly basis or fixed rate.  Our customers decide which
                                            plan is best for them.
                                            <br /><br />
                                            No job is too big or too small for Man and Van 24.  We are available to move any type of belongings from
                                            single items to fully loading up our vehicles and safely transporting them locally, nationally and
                                            internationally.  We can help our customers move across Europe.
                                            <br /><br />
                                            Let Man and Van London make your next move unforgettable.
                                            <br /><br />
                                            Our professional staff are carefully recruited with CRB and DVLA checks.  We want our customers to be
                                            confident that their property is safe and secure in our hands.  Our removals team are trained to reliably
                                            handle goods, are expert packers and movers and safe drivers.
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md="4" className='jumbotron jumbo'>
                                <Form />
                            </Col>
                        </Row>

                    </div>
                    <br />
                </div>
                <br />
                <br />
                <article>
                    <h2 className='text-center h2'>Let Man and Van London take the stress out of your move</h2>
                    <br />
                    <Container>
                        <Row>
                            <Col className='jumbotron articles' md='4'>
                                <h3 className='text-center h3'>London Packing Service</h3>
                                <p>Man and Van London provides packing service that can be flexible to fit in with your needs and budget.
                        <br /> <br />
                                    We can provide expert removal porters and packing materials for your belongings in advance of the moving date.  Our representative can provide you with free advice on how to pack and move items in your home or office. We have a wealth of knowledge on how to pack fragile and breakable items such as crockery, glass, mirrors, pictures, ornaments and unusually shaped objects.
                                <br /> <br />
                                    Alternatively, the team assigned to your move will pack your belongings in advance of the move date and on the removal day.  We are accommodating and amenable and willing to help with your packing needs.  Our team can expertly pack your delicate and fragile items only to ensure maximum protection of your goods, or we can provide a staged packing service.  Whatever will work the best for your move to be as smooth as possible.
                                <br /> <br />
                                    For the full packing service, the team at Man and Van London can pack all of your belongings for your home or business move.  This is the ultimate service for saving your time and reducing stress levels.  Let the experts worry about your move so you don’t have to.
                        </p>
                            </Col>
                            <Col className='jumbotron articles' md='4'>
                                <h3 className='text-center h3'>Fully-insured Company</h3>
                                <p>Our team members and vehicles are fully covered by insurance so customers have peace of mind in the unlikely event of damages.
                        <br /> <br />
                                    Our vehicles and storage boxes are clean and fit for purpose.  We provide fully equipped vehicles
                                    to ensure that the lifting and moving takes places promptly and safely.  At Man and Van 24 we use
                                    tracking devices that inform our operators the whereabouts of vehicles and any property on the move.
                                    We fully embrace IT and want our customers to be safe in the knowledge that the whereabouts and safety of
                                    their property is a priority at Man and Van 24.
                        <br /> <br />
                                    Man and Van London has vast experience of helping customers to move home or office across the UK.
                                    What can sometimes be seen as a simple and uncomplicated move may be fraught with unexpected setbacks and
                                    last minute changes.  We can talk you through any potential pitfalls.  You have our knowledge and
                                    experience on hand to take you through any problems that may occur on the day of the move.
                                    Let us help you plan your move and reduce the burden of the removal.
                                    <br /> <br />
                                    We can handle any challenge set by our customers and our staff respect the property and precious items that they have been trusted to transport.
                        </p>
                            </Col>
                            <Col className='jumbotron articles' md='4'>
                                <h3 className='text-center h3'>Reliable Man and Van</h3>
                                <img
                                    src="/static/reliable removals.png"
                                    alt="thank you for your request"
                                    width='100%'
                                />
                                <br />
                                <br />
                                <h4 className='text-center h3'>Our Customers Love Us</h4>
                                <p>Join our happy customers today and enjoy the best man and van services in the UK.</p>

                                <p>In our experience at Man and Van 24, we understand the need to provide a flexible service to our
                                customer.  Not everything can be planned for, however, we have supported our customers and found immediate
                                solutions.  We are clear thinkers, able to solve problems, in whatever shape or size or form those removal
                                problems come in.  No matter what stress levels our customers are feeling we guide them through the pressure
                                and make the removal happen.
                        <br /> <br />
                                    Communication is key during a move and you will have access to a contact person throughout our services,
                                from when you first make contact with Man and Van 24 until the job has been completed.  We will always listen
                        to our customers and be available to talk through and provide reassurances about our removal services.</p>
                                <br /> <br />
                            </Col>
                        </Row>
                    </Container>

                </article>
            </section>
        );
    }
}
export default Section;
