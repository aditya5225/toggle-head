import React from "react";
import './faqComponent.css';

const CollapseComp = ({
    uniqueId = 'accordion',
    collapseData = [],
}) => {

    return (
        <div className="custome_collapse">
            <div id={uniqueId}>
                {
                    collapseData.map((colItem, colIInd) => {
                        return (
                            <div key={colIInd}>
                                <div className={`${colIInd == collapseData.length - 1 ? '' : 'border-bottom'}`} id={`heading-${colIInd}`}>
                                    <h5 className="collapse_button d-flex align-items-center justify-content-between pt-4 pb-3">
                                        <a
                                            role="button"
                                            data-toggle="collapse"
                                            href={`#collapse-${colIInd}`}
                                            aria-expanded="false"
                                            aria-controls={`collapse-${colIInd}`}
                                            style={{
                                                color: 'black',
                                                fontSize: '16px'
                                            }}
                                        >
                                            {colItem.title}
                                        </a>

                                        <div
                                            className="collapce_icon"
                                            role="button"
                                            data-toggle="collapse"
                                            href={`#collapse-${colIInd}`}
                                            aria-expanded="false"
                                            aria-controls={`collapse-${colIInd}`}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
                                            </svg>
                                        </div>
                                    </h5>
                                </div>
                                <div id={`collapse-${colIInd}`} className="collapse" data-parent={`#${uniqueId}`} aria-labelledby={`heading-${colIInd}`}>
                                    <div className="py-4">
                                        {colItem.description}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}


export default CollapseComp