import React from 'react';
import { Accordion } from 'react-bootstrap';
import faqPic from'../../components/images/Faq/FAQs.gif'

const Faq = () => {
    return (
        <div className="container">

        <div className='my-5'>
            <div className='px-5'>
                <div className='row align-content-center justify-content-around'>
                    <div className='col-12 col-md-6'>

                    <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>What should I know about glasses?</Accordion.Header>
    <Accordion.Body>
    There are four standard glasses features to consider before buying your first pair – lenses, feel, colour, and shape.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Can any frame be used for prescription glasses?</Accordion.Header>
    <Accordion.Body>
    Whether you have a high quality frame from an old pair of sunglasses that you want to still get use out of or you need your tinted shades to provide you with corrective lenses, you can indeed get your sunglasses converted into prescription glasses.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Can you put lenses in the frames I bought at another store?</Accordion.Header>
    <Accordion.Body>
    You can put old lenses in new frames in most cases, as long as the new frames are the same ones you used to have. An eye care professional will just need to make sure your prescription doesn't restrict the type of eyewear you use so that
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Can opticians put lenses in any frames?</Accordion.Header>
    <Accordion.Body>
    Once they get to the opticians working with rx-able.com, your old lenses are removed, and your new ones are put in. The process used by this company allows them to put new lenses in any set of frames, no matter how long you've had them and no matter what brand they are
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
                        </div>
                    <div className='col-12 col-md-6'>
                        <img className="w-50 mt-4" src={faqPic} alt="" />

                    </div>

                </div>

            </div>
        </div>

    </div>
    );
};

export default Faq;