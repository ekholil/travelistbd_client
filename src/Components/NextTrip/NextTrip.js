import React from 'react';
const NextTrip = () => {
    return (
        <div>
            <h2 className="text-success text-center mb-3">Get inspiration For your next trip</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-4" style={{position: 'relative', cursor: 'pointer'}}>
                        <img className="img-fluid" src="https://i.ibb.co/FKYKCKL/img1.jpg" alt="" />
                        <h4 style={{position: 'absolute', bottom: '10px', left: '20px', color: '#fff'}}>Top Rivers of Bangladesh</h4>
                    </div>
                    <div className="col-md-4" style={{position: 'relative', cursor: 'pointer'}}>
                        <img className="img-fluid" src="https://i.ibb.co/C0gbRWL/img2.jpg" alt="" />
                        <h4 style={{position: 'absolute', bottom: '10px', left: '20px', color: '#fff'}}>Top historical places</h4>
                    </div>
                    <div className="col-md-4" style={{position: 'relative', cursor: 'pointer'}}>
                        <img className="img-fluid" src="https://i.ibb.co/yqksBW2/img5.jpg" alt="" />
                        <h4 style={{position: 'absolute', bottom: '10px', left: '20px', color: '#fff'}}>Enjoy Countryside beauties</h4>
                    </div>
                    
                </div>
                <div className="row mb-4 mt-4">
                <div className="col-md-6" style={{position: 'relative', cursor: 'pointer'}}>
                        <img className="img-fluid" src="https://i.ibb.co/hFHXwvg/img3.jpg" alt="" />
                        <h4 style={{position: 'absolute', bottom: '10px', left: '20px', color: '#fff'}}>Top Mountains of Bangladesh</h4>
                    </div>
                    <div className="col-md-6" style={{position: 'relative', cursor: 'pointer'}}>
                        <img className="img-fluid" src="https://i.ibb.co/NxW97HP/img4.jpg" alt="" />
                        <h4 style={{position: 'absolute', bottom: '10px', left: '20px', color: '#fff'}}>Old Mosques of Bangladesh</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NextTrip;