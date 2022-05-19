import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L149lD3SnCuqPTCwFN97WBrNS1G5KxVBz99upweCfZYoDUtwwidTV54k8YUL2GNYoYv4NJ6dwd3KWD7FsjHgPJ600p4Tkp4aA');


const Payment = () => {
    const { id } = useParams();
    const url = `https://sheltered-earth-75473.herokuapp.com/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accesstoken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(appointment);

    return (
        <div>
            <div class="card w-50 mx-auto  max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className='text-green-500 font-bold'>Hello, {appointment?.patientName}</p>
                    <h2 class="card-title">pay for {appointment.treatment}</h2>
                    <p>Your Appointment: <span className='text-red-500'>{appointment?.date}</span> at {appointment?.slot}</p>
                    <p>Please Pay: ${appointment?.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 mx-auto max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;



/**
 * ---------------------------------------------------------
 * client-site 
 * ---------------------------------------------------------
 * 1. install stripe react stripe js
 * 2.open stripe account on stripe website 
 * 3.get published key pk......
 * 4.create Elements wrapper using published key
 * 5.create checkout form using card elenet, useStripe, useElements 
 * 6.get card elements info(credit card info) 
 * 7.fet credit card info/error
 * ---------------------------------------------------------
 * server-site 
 * ---------------------------------------------------------
 * 1.get client secret from backed via payment intent post api 
 *  */
