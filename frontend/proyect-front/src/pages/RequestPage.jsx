import React from 'react';
import RequestForm from '../components/Requests/RequestForm';
import './RequestPage.css';
import { useLocation } from 'react-router-dom';

export default function RequestPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('type');
    const title = type === 'maintenance' ? 'Solicita tu mantenimiento' : 'Solicita tu reparación';

    return (
        <div className='p-request'>
            <div className='p-request title'><h2>{title}</h2></div>
            <RequestForm />
        </div>
    );
}