import ServiceTemplate from '@/components/ServiceTemplate'
import React from 'react'
import servicesPage from '../../data/servicesPage'
import metaTagsData from '@/data/metaTags';

export default function EmergencyLockout() {
    const serviceData = servicesPage.find(service => service.title === "Emergency Lockout");
    const metaTags = metaTagsData.find(meta => meta.page === "emergency-lockout");
    return (
        <ServiceTemplate key={serviceData?.title} title={serviceData?.title} description={serviceData?.description} image={serviceData?.image}  metaTags={metaTags} />
    );
}
