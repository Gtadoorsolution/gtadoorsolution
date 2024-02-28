import ServiceTemplate from '@/components/ServiceTemplate'
import React from 'react'
import servicesPage from '../../data/servicesPage'


export default function FireRatedWoodDoors() {
    const serviceData = servicesPage.find(service => service.title === "Fire-Rated Wood Doors");
    return (
        <ServiceTemplate key={serviceData?.title} title={serviceData?.title} description={serviceData?.description} image={serviceData?.image} />
    );
}
