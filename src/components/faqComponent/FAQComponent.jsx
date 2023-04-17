import React from 'react';
import CollapseComp from './CollapseComp'


const FAQComponent = () => {
    return (
        <div className='container py-4 px-0 faq_component'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h3> FAQ </h3>
                </div>
            </div>

            <div className='row mt-4 mx-0'>
                <div className='col-12 p-0'>
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
        </div>
    )
}

export default FAQComponent;