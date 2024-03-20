import ServiceTemplate from '@/components/ServiceTemplate'
import React from 'react'
import servicesPage from '../../data/servicesPage'
import metaTagsData from '@/data/metaTags';

export default function GarageDoors() {
    const serviceData = servicesPage.find(service => service.title === "Garage Doors");
    const metaTags = metaTagsData.find(meta => meta.page === "garage-doors");
    return (
        <ServiceTemplate key={serviceData?.title} title={serviceData?.title} description={serviceData?.description} image={serviceData?.image}  metaTags={metaTags} />
    );
}
