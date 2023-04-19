import React from 'react';
import CollapseComp from './CollapseComp'


const FAQComponent = () => {
    return (
        <div className='container pt-4 px-0 faq_component'>
            <div className='row m-0'>
                <div className='col-12 text-center mt-4'>
                    <h3 className='m-0 font-weight-bold' style={{ color: '#12406F' }}> FAQ </h3>
                </div>
            </div>

            <div className='row mt-4 mx-0'>
                <div className='col-12 px-4 px-sm-0'>
                    <CollapseComp
                        uniqueId='toggle_head_collapse'
                        collapseData={[
                            {
                                title: 'How does an investor gain access to MF Utility?',
                                description: 'FXCOPIER is the worlds most reliable remote trade copier. Its allow you to copy trades almost instantly between hundreds of MT4 accounts through the use of technology. Many of the industries leading money managers use FXCopier to easily manage multiple client accounts in tandem.'
                            },
                            {
                                title: 'Will investors be able to have multiple Common Account Numbers?',
                                description: 'FXCOPIER is the worlds most reliable remote trade copier. Its allow you to copy trades almost instantly between hundreds of MT4 accounts through the use of technology. Many of the industries leading money managers use FXCopier to easily manage multiple client accounts in tandem.'
                            },
                            {
                                title: 'How does an investor gain access to MF Utility?',
                                description: 'FXCOPIER is the worlds most reliable remote trade copier. Its allow you to copy trades almost instantly between hundreds of MT4 accounts through the use of technology. Many of the industries leading money managers use FXCopier to easily manage multiple client accounts in tandem.'
                            },
                        ]}
                    />
                </div>
            </div>

            <div className='row mt-3 mx-0'>
                <div className='col-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center px-4 px-sm-0 mb-3'>
                    <div style={{ maxWidth: '80%' }}>
                        <h2 className='font-weight-bold' style={{ color: '#12406F' }}> Subscribe </h2>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  </p>
                    </div>

                    <div className='d-flex'>
                        <input
                            type="text"
                            name='subscribe_input'
                            className='w-100 border-0 mr-3 px-4'
                            placeholder='Enter your email address'
                            style={{
                                boxShadow: '0 0 2.5px gray',
                                borderRadius: '10px',
                                outline: 'none'
                            }}
                        />

                        <button
                            type='button d-flex align-items-center'
                            style={{
                                border: 'none',
                                backgroundColor: '#12406F',
                                padding: '12px 0px',
                                borderRadius: '14px',
                                color: 'white',
                                fontSize: '13px',
                                width: '200px'
                            }}
                        >
                            <span> Subscribe Now </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className='col-12 col-md-6 col-lg-6 p-0 text-right'>
                    <img
                        src="/images/subscribeImg.png"
                        alt="subscribe"
                        className='img-fluid'
                    />
                </div>
            </div>
        </div>
    )
}

export default FAQComponent;