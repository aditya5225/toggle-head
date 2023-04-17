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
            count: '123+',
            caption: 'Lorem Ipsum',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            title: 'Lorem Ipsum',
            count: '123+',
            caption: 'Lorem Ipsum',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            title: 'Lorem Ipsum',
            count: '123+',
            caption: 'Lorem Ipsum',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
    ]

    return (
        <div
            className='container-fluid my-4 p-2'
            style={{ backgroundColor: '#F6F6F6' }}
        >
            <div className='row m-0 p-5'>
                {
                    sampleRecords.map((rcdVal, rcdInd) => {
                        return (
                            <div key={rcdInd} className='col-3 px-5'>
                                <div>
                                    <p> {rcdVal.title} </p>
                                    <h1> {rcdVal.count} </h1>
                                    <h5 className='font-weight-bold'> {rcdVal.caption} </h5>
                                    <p> {rcdVal.description} </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SectionTwoComp;