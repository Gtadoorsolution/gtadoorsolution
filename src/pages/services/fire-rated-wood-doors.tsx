import ServiceTemplate from '@/components/ServiceTemplate'
import React from 'react'
import servicesPage from '../../data/servicesPage'
import metaTagsData from '@/data/metaTags';

export default function FireRatedWoodDoors() {
    const serviceData = servicesPage.find(service => service.title === "Fire-Rated Wood Doors");
    const metaTags = metaTagsData.find(meta => meta.page === "fire-rated-wood-doors");
    return (
        <ServiceTemplate key={serviceData?.title} title={serviceData?.title} description={serviceData?.description} image={serviceData?.image}  metaTags={metaTags} />
    );
}
