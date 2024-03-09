import ServiceTemplate from '@/components/ServiceTemplate'
import React from 'react'
import servicesPage from '../../data/servicesPage'
import metaTagsData from '@/data/metaTags';

export default function FrontEntryDoors() {
    const serviceData = servicesPage.find(service => service.title === "Front Entry Doors");
    const metaTags = metaTagsData.find(meta => meta.page === "front-entry-doors");
    return (
        <ServiceTemplate key={serviceData?.title} title={serviceData?.title} description={serviceData?.description} image={serviceData?.image}  metaTags={metaTags} />
    );
}
