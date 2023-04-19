import React from 'react';
import './sectionOneComp.css';

const SectionOneComp = () => {

    const cradsData = [
        {
            title: 'Lorem Ipsum 1',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            title: 'Lorem Ipsum 2',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            title: 'Lorem Ipsum 3',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            title: 'Lorem Ipsum 4',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
    ]

    return (
        <div className='container px-4 px-sm-0 section_one_comp my-5'>
            <div className='row justify-content-center mx-0 mb-5'>
                <div className='col-12 col-md-4 col-lg-3 px-0 pr-2 text-center text-sm-left border-right'>
                    <h2 className='font-weight-bold' style={{ color: '#12406F' }}> Upcoming Examinations </h2>
                    <p> inquiry about the examinations & register for the exams </p>
                </div>

                <div className='col-12 col-md-4 col-lg-3 p-4'>
                    <div className='d-flex align-items-start justify-content-start justify-content-sm-left justify-content-md-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#12406F" className="bi bi-calendar mt-1 mr-3" viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                        </svg>

                        <div className='text-left'>
                            <p className='m-0 font-weight-bold' style={{ color: '#12406F' }}> 02th October 2014 </p>
                            <p className='m-0' style={{ fontSize: '15px' }}> Level 1 exam </p>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-4 col-lg-3 p-4'>
                    <div className='d-flex align-items-start justify-content-start justify-content-sm-left justify-content-md-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#12406F" className="bi bi-calendar mt-1 mr-3" viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                        </svg>

                        <div className='text-left'>
                            <p className='m-0 font-weight-bold' style={{ color: '#12406F' }}> Nov-Dec 2016 </p>
                            <p className='m-0' style={{ fontSize: '15px' }}> Level 2 </p>
                            <p className='m-0' style={{ fontSize: '15px' }}> Lorem ipsum </p>
                            <p className='m-0' style={{ fontSize: '15px' }}> Lorem ipsum </p>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-4 col-lg-3 p-4'>
                    <div className='d-flex align-items-start justify-content-start justify-content-sm-left justify-content-md-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#12406F" className="bi bi-calendar mt-1 mr-3" viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                        </svg>

                        <div className='text-left'>
                            <p className='m-0 font-weight-bold' style={{ color: '#12406F' }}> Ongoing this year </p>
                            <p className='m-0' style={{ fontSize: '15px' }}> Level 3 (Grad) </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-100 position-relative'>
                <div
                    style={{
                        position: 'absolute',
                        zIndex: '5',
                        left: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                    }}
                    onClick={() => {
                        // ary.push(ary.shift())
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                    </svg>
                </div>

                <div
                    style={{
                        position: 'absolute',
                        zIndex: '5',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                    </svg>
                </div>

                <div
                    className='w-100 m-0 d-flex overflow-auto section_one_card'
                    style={{ borderRadius: '15px' }}
                >
                    {
                        cradsData.map((cardVal, cardInd) => {
                            return (
                                <div
                                    key={cardInd}
                                    className='col-8 col-md-5 col-lg-4 mr-4 text-white'
                                    style={{ backgroundColor: '#12406F', borderRadius: '15px', padding: '35px 25px' }}
                                >
                                    <p className='font-weight-bold'> {cardVal.title} </p>
                                    <p style={{ fontSize: '14px' }}> {cardVal.description} </p>
                                    <div className='d-flex align-items-center mt-4'>
                                        <p className='m-0'> Know More </p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-circle-fill ml-2" viewBox="0 0 16 16">
                                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                        </svg>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SectionOneComp;