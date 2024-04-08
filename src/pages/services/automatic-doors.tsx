import ServiceTemplate from '@/components/ServiceTemplate'
import React from 'react'
import servicesPage from '../../data/servicesPage'
import servicesPage2 from '../../data/servicesPage2'
import metaTagsData from '@/data/metaTags';
import ServiceTemplate2 from '@/components/ServiceTemplate2';

export default function AutomaticDoors() {
    const serviceData = servicesPage.find(service => service.title === "Automatic Doors");
    const serviceData2 = servicesPage2.find(service => service.title === "Automatic Doors");
    const metaTags = metaTagsData.find(meta => meta.page === "automatic-doors");
    const template = process.env.TEMPLATE;
    if (template === "WD") return <ServiceTemplate
        key={serviceData?.title}
        title={serviceData?.title}
        description={serviceData?.description}
        image={serviceData?.image}
        lastImage={serviceData?.lastImage}
        sliderImages={serviceData?.sliderImages}
        metaTags={metaTags}
        article1={serviceData?.article1}
        article2={serviceData?.article2}
        article3={serviceData?.article3}
        article4={serviceData?.article4}
        article5={serviceData?.article5}
        title2={serviceData?.title2}
        title3={serviceData?.title3}
    />
    return <ServiceTemplate2
        title={serviceData2?.title}
        banner={serviceData2?.banner}
        sliderImages={serviceData2?.sliderImages}
        article1={serviceData2?.article1}
        article2={serviceData2?.article2}
        article3={serviceData2?.article3}
        article4={serviceData2?.article4}
        categories={serviceData2?.categories}
    />
}
