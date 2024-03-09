import ServiceTemplate from '@/components/ServiceTemplate'
import React from 'react'
import servicesPage from '../../data/servicesPage'
import metaTagsData from '@/data/metaTags';

export default function AutomaticDoors() {
    const serviceData = servicesPage.find(service => service.title === "Automatic Doors");
    const metaTags = metaTagsData.find(meta => meta.page === "automatic-doors");
    return (
        <ServiceTemplate key={serviceData?.title} title={serviceData?.title} description={serviceData?.description} image={serviceData?.image}  metaTags={metaTags} />
    );
}
