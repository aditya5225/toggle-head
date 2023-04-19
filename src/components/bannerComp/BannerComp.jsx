import React from 'react';

const BannerComp = () => {

    const bannerData = [
        {
            title: 'Lorem ipsum',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
            btnName: 'Know More'
        },
        {
            title: 'Why do we use it?',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using',
            btnName: 'Click Here'
        },
        {
            title: 'Where does it come from?',
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
            btnName: 'View More'
        }
    ]

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">

                {
                    bannerData.map((bnrVal, bnrInd) => {
                        return (
                            <div
                                key={bnrInd}
                                className={`carousel-item text-right position-relative ${bnrInd == 0 ? 'active' : ''}`}
                                style={{ backgroundColor: '#F3F3F3' }}
                            >
                                <div
                                    className='container p-0'
                                    style={{
                                        position: 'absolute',
                                        zIndex: '2',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                >
                                    <div className='col-12 col-md-4 p-0 text-left px-4 px-sm-0'>
                                        <h3 className='font-weight-bold' style={{ color: '#12406F' }}> {bnrVal.title} </h3>
                                        <p className='text-muted'> {bnrVal.description} </p>
                                        <button
                                            type='button d-flex align-items-center'
                                            style={{
                                                border: 'none',
                                                backgroundColor: '#12406F',
                                                padding: '12px 32px',
                                                borderRadius: '14px',
                                                color: 'white',
                                                fontSize: '13px'
                                            }}
                                        >
                                            <span> {bnrVal.btnName} </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-caret-right-fill mb-1" viewBox="0 0 16 16">
                                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <img
                                    className="img-fluid"
                                    src="/images/bannerImg.png"
                                    alt="First slide"
                                    style={{ position: 'relative', zIndex: '1' }}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default BannerComp;