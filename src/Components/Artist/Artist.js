import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Contact from '../Home/Contract/Contract';
import Footer from '../Home/Footer/Footer';
import BigSign from '../../Resorce/Img/anna-sentina.jpg';
import SmallSign from '../../Resorce/Img/aj-bartholomew.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Artist.css';
const Artist = () => {
    return (
        <div className="artist-container">
            <Navbar/>
            <div>
                <div className="artists-title-container text-center text-light">
                    <h1>ARTISTS</h1>
                    <p>THE KIESEL GUITARS ARTIST FAMILY</p>
                </div>
                <h2 className="py-3 ms-4">Signature Artists</h2>
                <div className="row sinature-container">
                    <div className="col-md-4">
                        <div>
                            <div className="icon-hover">
                                <img className="signature-img" src={BigSign}/>
                                <div className="icon-container">
                                    <ul className="d-flex justify-content-center align-items-center icon-items">
                                        <li><FacebookIcon className="icon-item"/></li>
                                        <li><TwitterIcon className="icon-item me-1 ms-1"/></li>
                                        <li><InstagramIcon className="icon-item"/></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="text-center">
                                <h4>Anna Sentian</h4>
                                <h5>Solo Artist</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="py-3 ms-4">Endorsers</h2>
                <div className="row sinature-container">
                            <div className="col-md-3">
                                <div>
                                    <img className="signature-img" src={SmallSign}/>
                                    <div className="text-center">
                                        <h6>AJ Bartholomew</h6>
                                        <p>Eyes Set To Kill</p>
                                    </div>
                                </div>
                            </div>
                           
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Artist;