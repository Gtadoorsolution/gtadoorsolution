import ServiceTemplate from '@/components/ServiceTemplate'
import React from 'react'
import servicesPage from '../../data/servicesPage'

export default function GarageDoors() {
    const serviceData = servicesPage.find(service => service.title === "Metal FireRated Doors");
    return (
        <ServiceTemplate key={serviceData?.title} title={serviceData?.title} description={serviceData?.description} image={serviceData?.image} />
    );
}
