import React from 'react';

const BannerComp = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item text-right position-relative active" style={{ backgroundColor: '#F3F3F3' }}>
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
                            <h3> Lorem ipsum </h3>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                            <button
                                type='button'
                            > Know More </button>
                        </div>
                    </div>

                    <img
                        className="img-fluid"
                        src="/images/bannerImg.png"
                        alt="First slide"
                        style={{ position: 'relative', zIndex: '1' }}
                    />
                </div>
                {/* <div className="carousel-item text-right position-relative" style={{ backgroundColor: '#F3F3F3' }}>
                    <img
                        className="img-fluid"
                        src="/images/bannerImg.png"
                        alt="Second slide"
                        style={{ position: 'relative', zIndex: '1' }}
                    />

                    <div
                        className='border bg-danger'
                        style={{
                            position: 'absolute',
                            zIndex: '2'
                        }}
                    >
                        <p> two </p>
                    </div>
                </div>
                <div className="carousel-item text-right position-relative" style={{ backgroundColor: '#F3F3F3' }}>
                    <img
                        className="img-fluid"
                        src="/images/bannerImg.png"
                        alt="Third slide"
                        style={{ position: 'relative', zIndex: '1' }}
                    />

                    <div
                        className='border bg-danger'
                        style={{
                            position: 'absolute',
                            zIndex: '2'
                        }}
                    >
                        <p> three </p>
                    </div>
                </div> */}
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