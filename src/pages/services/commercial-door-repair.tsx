import ServiceTemplate from '@/components/ServiceTemplate'
import React from 'react'
import servicesPage from '../../data/servicesPage'
import metaTagsData from '@/data/metaTags';

export default function CommercialDoorRepair() {
    const serviceData = servicesPage.find(service => service.title === "Commercial Door Repair");
    const metaTags = metaTagsData.find(meta => meta.page === "commercial-door-repair");
    return (
        <ServiceTemplate key={serviceData?.title} title={serviceData?.title} description={serviceData?.description} image={serviceData?.image} metaTags={metaTags} />
    );
}
