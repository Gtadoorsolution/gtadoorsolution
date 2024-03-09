import ServiceLocksmith from '@/components/ServiceLocksmith'
import React from 'react'
import servicesPage from '../../data/servicesPage'
import metaTagsData from '@/data/metaTags';

export default function LocksmithServices() {
    const serviceData = servicesPage.find(service => service.title === "Locksmith Services");
    const metaTags = metaTagsData.find(meta => meta.page === "locksmith-services");
    return (
        <ServiceLocksmith key={serviceData?.title} title={serviceData?.title} description={serviceData?.description} image={serviceData?.image} metaTags={metaTags}/>
    );
}
