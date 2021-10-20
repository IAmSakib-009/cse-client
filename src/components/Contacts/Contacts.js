import React from 'react';
import Navbar from '../Navbar/Navbar';

const Contacts = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="p-5">
                    <div className="row">
                        <div className="col-md-3">
                            <p className="card shadow p-4"><span>Address:</span> Dhaka, Bangladesh</p>
                        </div>
                        <div className="col-md-3">
                            <p className="card shadow p-4"><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                        </div>
                        <div className="col-md-3">
                            <p className="card shadow p-4"><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                        </div>
                        <div className="col-md-3">
                            <p className="card shadow p-4"><span>Website</span> <a href="https://www.google.com/">yoursite.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;