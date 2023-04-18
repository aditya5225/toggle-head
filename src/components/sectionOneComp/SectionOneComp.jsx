import React from 'react';
import './sectionOneComp.css';

const SectionOneComp = () => {
    return (
        <div className='container px-4 px-sm-0 section_one_comp my-5'>
            <div className='row justify-content-center mx-0 mb-5'>
                <div className='col-12 col-md-4 col-lg-3 px-0 pr-2 text-center text-sm-left border-right'>
                    <h4> upcoming examinations </h4>
                    <p> inquiry about the examinations & register for the exams </p>
                </div>

                <div className='col-12 col-md-4 col-lg-3 px-0 text-center'>
                    <h5> 02th October 2014 </h5>
                    <p> Level 1 exam </p>
                </div>

                <div className='col-12 col-md-4 col-lg-3 px-0 text-center'>
                    <h5> 02th October 2014 </h5>
                    <p> Level 1 exam </p>
                </div>

                <div className='col-12 col-md-4 col-lg-3 px-0 text-center'>
                    <h5> 02th October 2014 </h5>
                    <p> Level 1 exam </p>
                </div>
            </div>

            <div
                className='w-100 m-0 d-flex overflow-auto section_one_card'
                style={{ borderRadius: '15px' }}
            >
                {
                    [...Array(4).keys()].map(cardVal => {
                        return (
                            <div
                                key={cardVal}
                                className='col-8 col-md-5 col-lg-4 p-3 mr-4'
                                style={{ backgroundColor: '#12406F', borderRadius: '15px' }}
                            >
                                <h5> Lorem Ipsum </h5>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                <p> Know More </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SectionOneComp;