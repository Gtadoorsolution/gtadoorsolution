import ServiceTemplate from '@/components/ServiceTemplate'
import React from 'react'
import servicesPage from '../../data/servicesPage'


export default function LocksmithServices() {
    const serviceData = servicesPage.find(service => service.title === "Locksmith Services");
    return (
        <ServiceTemplate key={serviceData?.title} title={serviceData?.title} description={serviceData?.description} image={serviceData?.image} />
    );
}
