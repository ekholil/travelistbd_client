import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import swal from "sweetalert";

const ManageBooking = () => {
    const [allBookings, setAllBookings] = useState([])
    const [approve, setApprove] = useState(false)
    useEffect(() => {
        fetch('https://obscure-river-55852.herokuapp.com/allbookings')
        .then(res => res.json())
        .then(data => setAllBookings(data))
        console.log(allBookings)
    }, [approve])

    const deleteBooking = id => {
        swal({
            title: "Are you sure?",
            text: "This booking Will be deldeted",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                fetch(`https://obscure-river-55852.herokuapp.com/deletebooking/${id}`, {
                    method: 'DELETE', 
                    headers: {'content-type' : 'application/json'}
                })
                .then(res => res.json())
                .then(data => {
                    if(data.acknowledged){
                        const remaining = allBookings.filter(item => item._id !== id)
                        setAllBookings(remaining)
                        swal("Booking is Deleted", {
                            icon: "success",
                          });
                    }
                    console.log(data)
                })
              
            } 
          });      
    }
    
    const handleApprove = (id, index) => {
        const ApprovedItem = allBookings[index]
        ApprovedItem.status = "Approved"
        fetch(`https://obscure-river-55852.herokuapp.com/approve/${id}`, {
            method: "PUT", 
            headers: {'content-type': 'application/json'} ,
            body : JSON.stringify(ApprovedItem)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                setApprove(!approve)
                swal('Success', 'This booking is now Approved', 'success')
            }
        })
    }
    return (
        <div className="container">
            <h1 className="mb-4 text-center" style={{marginTop:'70px'}}>Manage All Bookings </h1>
            <CTable hover style={{verticalAlign:'middle'}}>
                <CTableHead>
                    <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Tour Spot</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Number</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {
                        allBookings.map((item, index) => {
                           return <CTableRow >
                        <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                        <CTableDataCell>{item.name}</CTableDataCell>
                        <CTableDataCell>{item.spotname}</CTableDataCell>
                        <CTableDataCell>{item.number}</CTableDataCell>
                        <CTableDataCell>{item.date}</CTableDataCell>
                        <CTableDataCell>{item.status}</CTableDataCell>
                        <CTableDataCell>
                            {item.status === 'pending'? <div>
                            <button onClick={() => handleApprove(item._id, index)} className="btn btn-success text-white me-3">Approve</button>
                            <button onClick={() => deleteBooking(item._id)} className="btn btn-danger text-white">Delete</button>
                            </div> :''}
                        </CTableDataCell>
                    </CTableRow>
                        })
                    }
                </CTableBody>
                </CTable>
        </div>
    );
};

export default ManageBooking;