import React from 'react';

const SectionTwoComp = () => {

    const sampleRecords = [
        {
            title: 'Lorem Ipsum',
            count: '123+',
            caption: 'Lorem Ipsum',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            title: 'Lorem Ipsum',
            count: '2367+',
            caption: 'Lorem Ipsum',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            title: 'Lorem Ipsum',
            count: '12+',
            caption: 'Lorem Ipsum',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            title: 'Lorem Ipsum',
            count: '34532+',
            caption: 'Lorem Ipsum',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
    ]

    return (
        <div
            className='container-fluid'
            style={{ backgroundColor: '#F6F6F6' }}
        >
            <div
                className='container p-0 py-5'
            >
                <div className='row m-0'>
                    {
                        sampleRecords.map((rcdVal, rcdInd) => {
                            return (
                                <div
                                    key={rcdInd}
                                    className='col-12 text-center text-sm-left col-md-4 col-lg-3 pl-0 pr-0 pr-sm-5 my-3'
                                    style={{ color: '#12406F' }}
                                >
                                    <div>
                                        <p className='mb-1'> {rcdVal.title} </p>
                                        <h1 className='m-0 font-weight-bold'> {rcdVal.count} </h1>
                                        <h5 className='font-weight-bold'> {rcdVal.caption} </h5>
                                        <p> {rcdVal.description} </p>
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

export default SectionTwoComp;