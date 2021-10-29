import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle, CCol, CRow } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import swal from "sweetalert";
import UseAuth from '../../Hooks/UseAuth';

const Mybooking = () => {
    const [bookings, setBookings] = useState([])
    const {user} = UseAuth()
    useEffect(() => {
        fetch(`http://localhost:5000/mybookings/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setBookings(data)
            console.log(data)
        })
    }, [])
    const handleCancel = id => {
        swal({
            title: "Are you sure?",
            text: "Your trip will be cancelled",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                fetch(`http://localhost:5000/mybookings/${id}`, {
                    method: 'DELETE', 
                    headers: {'content-type' : 'application/json'}
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deleteCount === 1){
                        swal('Success', 'You Have canceled your tour trip', 'warning')
                    }
                    console.log(data)
                })
              swal("Your Trip cancelled", {
                icon: "success",
              });
            } 
          });      
    }
    return (
        <div>
            <h2 className="text-success text-center" style={{marginTop:'70px'}}>List of my bookings</h2>
            <div className="container">
                
            <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
                {
                    bookings.map(item => <div>

<CCol xs>
                    <CCard>
                    <CCardImage orientation="top" src={item.imgurl} />
                    <CCardBody>
                        <CCardTitle>{item.spotname}</CCardTitle>
                        <button onClick={() => handleCancel(item._id)} className="btn btn-warning">Cancel</button>
                    </CCardBody>
                    
                    </CCard>
                </CCol>

                    </div>)
                }
            </CRow>
            </div>
        </div>
    );
};

export default Mybooking;