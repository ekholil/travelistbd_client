import { CCard, CCardBody, CCardImage, CCardText, CCardTitle, CCol } from '@coreui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleSpot = (props) => {
    const {_id, name, imgurl, desc} = props.spot
    return (
        <div>
            <CCol xs>
                <CCard>
                <CCardImage orientation="top" src={imgurl} />
                <CCardBody>
                    <CCardTitle>{name}</CCardTitle>
                    <CCardText>
                   {desc}
                    </CCardText>
                    <Link className="btn btn-primary" to={`/placeorder/${_id}`}>Book Now</Link>
                </CCardBody>
            </CCard>
            </CCol>
        </div>
    );
};

export default SingleSpot;