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
                <div className="carousel-item text-right active" style={{ padding: '1px 0', backgroundColor: '#F3F3F3' }}>
                    <img className="img-fluid" src="/images/bannerImg.png" alt="First slide" />
                    {/* <p> One </p> */}
                </div>
                <div className="carousel-item text-right" style={{ padding: '1px 0', backgroundColor: '#F3F3F3' }}>
                    <img className="img-fluid" src="/images/bannerImg.png" alt="Second slide" />
                    {/* <p> two </p> */}
                </div>
                <div className="carousel-item text-right" style={{ padding: '1px 0', backgroundColor: '#F3F3F3' }}>
                    <img className="img-fluid" src="/images/bannerImg.png" alt="Third slide" />
                    {/* <p> three </p> */}
                </div>
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