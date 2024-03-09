import ServiceTemplate from '@/components/ServiceTemplate'
import React from 'react'
import servicesPage from '../../data/servicesPage'
import metaTagsData from '@/data/metaTags';

export default function AccessControlSystem() {
    const serviceData = servicesPage.find(service => service.title === "Access Control System");
    const metaTags = metaTagsData.find(meta => meta.page === "access-control-system");
    return (
        <ServiceTemplate key={serviceData?.title} title={serviceData?.title} description={serviceData?.description} image={serviceData?.image} metaTags={metaTags} />
    );
}
