import React from 'react';
import Navbar from '../Navbar/Navbar';

const Gallery = () => {
    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <div className="row">
                    <div
                        className="col-md-6">
                        <div class="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/iDVItAX-meU?rel=0" title="YouTube video" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/An2VTBjuAA4?rel=0" title="YouTube video" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="col-md-6 col-sm-12 mt-5">
                        <div class="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/An2VTBjuAA4?rel=0" title="YouTube video" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Gallery;