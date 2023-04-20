import React, { useState } from 'react';
import './navbarComp.css';

const NavbarComp = () => {

    const [showSearch, setShowSearch] = useState(false);

    return (
        <nav
            className="navbar navbar-expand-lg navbar-light p-3 sticky-top shadow-sm navbar_comp"
            style={{ backgroundColor: '#12406F' }}
        >
            <a className="navbar-brand text-white ml-3 ml-sm-2 pl-0 pl-lg-2 pl-xl-5 font-weight-bold" style={{ fontSize: '25px' }} href="#"> LOGO </a>
            <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown mx-2">
                        <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Qualifications
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>

                    <li className="nav-item dropdown mx-2">
                        <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Organizations
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>

                    <li className="nav-item dropdown mx-2">
                        <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Research & Analysis
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>

                    <li className="nav-item dropdown mx-2">
                        <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Lorem ipsum
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>

                    <li className="nav-item dropdown ml-2 mr-4">
                        <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Lorem ipsum
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>

                <form className="d-flex flex-column flex-sm-row justify-content-start align-items-start align-items-sm-center my-2 my-lg-0 m-0" onSubmit={evnt => evnt.preventDefault()}>
                    <div className='ml-0 mr-3 d-flex align-items-center justify-content-end position-relative search_bar'>
                        <input
                            type="text"
                            name='serch_input'
                            className={`border-0 mr-1 search_input`}
                            placeholder='Search'
                            style={{
                                boxShadow: '0 0 2.5px gray',
                                borderRadius: '10px',
                                outline: 'none',
                                height: '40px',
                                fontSize: '14px',
                                right: '100%',
                                width: `${showSearch ? '220px' : '0px'}`,
                                padding: `${showSearch ? '0 15px' : '0 0'}`,
                                transition: 'width .3s'
                            }}
                        />
                        {
                            showSearch ?
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="white"
                                    className="bi bi-x-lg"
                                    viewBox="0 0 16 16"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setShowSearch(false)}
                                >
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                </svg>
                                : <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="white"
                                    className="bi bi-search"
                                    viewBox="0 0 16 16"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setShowSearch(true)}
                                >
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                        }
                    </div>

                    <button
                        className="btn my-2 my-sm-0 bg-white font-weight-bold"
                        style={{
                            color: '#12406F',
                            borderRadius: '15px',
                            padding: '10px 25px'
                        }}
                        type="button"
                    > Enrollment </button>
                </form>
            </div>
        </nav>
    )
}

export default NavbarComp;