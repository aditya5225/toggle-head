import React from 'react';

const FooterCmp = () => {
    return (
        <footer
            className="container-fluid text-white"
            style={{ backgroundColor: '#092956' }}
        >
            <div className="row justify-content-center py-5">
                <div className="col-6 col-md text-center d-flex justify-content-center">
                    <div className='text-left'>
                        <h5> Contact us </h5>
                        <p> Address: Lorem Ipsum is simply dummy text of </p>
                        <p> Address: Lorem Ipsum is simply dummy text of </p>
                        <p> Address: Lorem Ipsum is simply dummy text of </p>
                    </div>
                </div>
                <div className="col-6 col-md text-center d-flex justify-content-center">
                    <div className='text-left'>
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Resource</a></li>
                            <li><a className="text-muted" href="#">Resource name</a></li>
                            <li><a className="text-muted" href="#">Another resource</a></li>
                            <li><a className="text-muted" href="#">Final resource</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-6 col-md text-center d-flex justify-content-center">
                    <div className='text-left'>
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Business</a></li>
                            <li><a className="text-muted" href="#">Education</a></li>
                            <li><a className="text-muted" href="#">Government</a></li>
                            <li><a className="text-muted" href="#">Gaming</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="row shadow-sm" style={{backgroundColor: '#002F5F', borderTop: 'solid #0B3567 1px'}}>
                <div className='col-12 text-center'>
                    <div className="col-12 col-md">
                    <small className="d-block mb-3 text-muted">&copy; 2017-2018</small>
                </div>
                </div>
                </div>
        </footer>
    )
}

export default FooterCmp;