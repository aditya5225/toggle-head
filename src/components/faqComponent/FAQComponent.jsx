import React from 'react';
import CollapseComp from './CollapseComp'


const FAQComponent = () => {
    return (
        <div className='container pt-4 px-0 faq_component'>
            <div className='row m-0'>
                <div className='col-12 text-center'>
                    <h3> FAQ </h3>
                </div>
            </div>

            <div className='row mt-4 mx-0'>
                <div className='col-12 px-4 px-sm-0'>
                    <CollapseComp
                        uniqueId='toggle_head_collapse'
                        collapseData={[
                            {
                                title: 'What is FXCopier?',
                                description: 'FXCOPIER is the worlds most reliable remote trade copier. Its allow you to copy trades almost instantly between hundreds of MT4 accounts through the use of technology. Many of the industries leading money managers use FXCopier to easily manage multiple client accounts in tandem.'
                            },
                            {
                                title: 'What is FXCopier?',
                                description: 'FXCOPIER is the worlds most reliable remote trade copier. Its allow you to copy trades almost instantly between hundreds of MT4 accounts through the use of technology. Many of the industries leading money managers use FXCopier to easily manage multiple client accounts in tandem.'
                            },
                            {
                                title: 'What is FXCopier?',
                                description: 'FXCOPIER is the worlds most reliable remote trade copier. Its allow you to copy trades almost instantly between hundreds of MT4 accounts through the use of technology. Many of the industries leading money managers use FXCopier to easily manage multiple client accounts in tandem.'
                            },
                        ]}
                    />
                </div>
            </div>

            <div className='row mt-3 mx-0'>
                <div className='col-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center px-4 px-sm-0'>
                    <div style={{maxWidth: '80%'}}>
                        <h2> Subscribe </h2>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  </p>
                    </div>

                    <div className='d-flex'>
                        <input
                            type="text"
                            className='subscribe_input w-100'
                        />

                        <button
                        type='button'
                        > Subscribe Now </button>
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