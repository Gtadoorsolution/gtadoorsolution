import ServiceTemplate from '../../components/ServiceTemplate'
import React from 'react'
import servicesPage from '../../data/servicesPage'
import metaTagsData from '@/data/metaTags';

export default function AluminumStorefronts() {
    const serviceData = servicesPage.find(service => service.title === "Aluminum Storefronts");
    const metaTags = metaTagsData.find(meta => meta.page === "aluminum-storefronts");

    return (
        <ServiceTemplate key={serviceData?.title} title={serviceData?.title} description={serviceData?.description} image={serviceData?.image}  metaTags={metaTags} />
    );
}
