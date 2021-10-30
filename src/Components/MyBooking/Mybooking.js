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
                fetch(`https://obscure-river-55852.herokuapp.com/mybookings/${id}`, {
                    method: 'DELETE', 
                    headers: {'content-type' : 'application/json'}
                })
                .then(res => res.json())
                .then(data => {
                    if(data.acknowledged){
                        const remaining = bookings.filter(item => item._id !== id)
                        setBookings(remaining)
                        swal("Your Trip cancelled", {
                            icon: "success",
                          });
                    }
                    console.log(data)
                })
              
            } 
          });      
    }
    return (
        <div>
            <h2 className="text-success text-center" style={{margin:'70px 0'}}>List of my bookings</h2>
            {
            bookings.length === 0? <h4 className="text-center" style={{margin:'70px 0'}}>You have no bookings</h4> : ''
            }
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