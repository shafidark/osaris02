import React from 'react';
import './ClientBuilder.css'
const BuildCategory = () => {
    return (
        <div className="maincategoryOfbuild pt-5 pb-5">
           <div className='d-flex justify-content-center '>
           <div className='buildDivision'>
                <h1 className="text-light">BUILD YOUR GUITAR</h1>
            </div>
           </div>
           <p className='text-center text-light mt-2'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
            <div className=" row  mt-5" style={{paddingLeft:'10%'}}>
                <div className="col-md-4 mb-5">
                    <div className='categoryDv'>
                        <h1 className='text-light'>Acousitc</h1>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className='categoryDv'>
                        <h1 className='text-light'>Electric</h1>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className='categoryDv'>
                        <h1 className='text-light'>Bass</h1>
                    </div>
                </div>
            </div>
            <div>
                <div className="row mt-5">
                    <div className="col-md-2 mb-5">
                    <div>
                            <button className="btn btn-danger customButton">3 String</button>
                        </div>
                    </div>
                    <div className="col-md-2 mb-5">
                        <div>
                            <button className="btn btn-danger customButton">4 String</button>
                        </div>
                    </div>
                    <div className="col-md-2 mb-5">
                    <div>
                            <button className="btn btn-danger customButton">5 String</button>
                        </div>
                    </div>
                    <div className="col-md-2 mb-5">
                    <div>
                            <button className="btn btn-danger customButton">6 String</button>
                        </div>
                    </div>
                    <div className="col-md-2 mb-5">
                    <div>
                            <button className="btn btn-danger customButton">7 String</button>
                        </div>
                    </div>
                    <div className="col-md-2 mb-5">
                    <div>
                            <button className="btn btn-danger customButton">8 String</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuildCategory;