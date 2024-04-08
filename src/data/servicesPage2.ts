interface Service {
    title: string | undefined;
    banner: string | undefined;
    sliderImages: string[] | undefined;
    article1: string | undefined;
    article2: string | undefined;
    article3: string | undefined;
    article4: string | undefined;
    categories: {
        image: string | undefined;
        title: string | undefined;
        description: string | undefined;
    }[] | undefined;
}

const servicesPage: Service[] = [
    {
        title: "Access Control System",
        banner: "/services/Access-control-system.jpg",
        sliderImages: ["/services/locksmith/commercial/1.jpg", "/services/locksmith/commercial/1.jpg", "/services/locksmith/commercial/1.jpg"],
        article1: "Gtadoorsolution specializes in the installation and maintenance of Glass and Aluminum Doors, frequently utilized in retail and commercial entrances.",
        article2: "Our extensive range of styles, colors, and pricing options ensures we're equipped to meet your needs.",
        article3: "With our expertise in commercial-grade door systems, we handle everything from installation to repairs with precision.",
        article4: "Whether you require manual or automatic opening mechanisms, or high-security doors with advanced access control technology, we have the experience to deliver.",
        categories: [
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
        ]
    },
    {
        title: "Aluminum Storefronts",
        banner: "/services/Aluminum-Storefronts.jpg",
        sliderImages: ["/default-ui.webp", "/default-ui.webp", "/default-ui.webp"],
        article1: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        article2: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        article3: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        article4: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        categories: [
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
        ]
    },
    {
        title: "Automatic Doors",
        banner: "/services/Automatic-door-operators.jpg",
        sliderImages: ["/default-ui.webp", "/default-ui.webp", "/default-ui.webp"],
        article1: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        article2: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        article3: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        article4: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        categories: [
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
        ]
    },
    {
        title: "Commercial Door Repair",
        banner: "/services/Commercial Door Repair.jpg",
        sliderImages: ["/default-ui.webp", "/default-ui.webp", "/default-ui.webp"],
        article1: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        article2: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        article3: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        article4: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        categories: [
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
        ]
    },
    {
        title: "Garage Doors",
        banner: "/services/garage-doors/garage-doors.jpg",
        sliderImages: ["/services/garage-doors/2.jpg", "/services/garage-doors/3 (2).jpg", "/services/garage-doors/7.jpg"],
        article1: "Welcome to GTADoorSolution – your trusted partner for expert garage door services in the Greater Toronto Area. With years of experience and a commitment to excellence, we specialize in providing comprehensive solutions for all your garage door needs.",
        article2: "From installation to maintenance and repairs, our team of skilled technicians is dedicated to delivering prompt, reliable service tailored to your unique requirements. ",
        article3: "Whether you require garage door repair, spring replacement, or brand new garage door installation, we've got you covered. Our expertise also extends to garage door openers, and damaged panels. ",
        article4: "Customer satisfaction is our top priority. We offer transparent pricing, timely appointments, and courteous, professional service from start to finish.  ",
        categories: [
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
        ]
    },
    {
        title: "Locksmith Services",
        banner: "/services/Locksmith-Service.jpg",
        sliderImages: ["/default-ui.webp", "/default-ui.webp", "/default-ui.webp"],
        article1: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        article2: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        article3: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        article4: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        categories: [
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
        ]
    },
    {
        title: "Metal FireRated Doors",
        banner: "/services/Metal FireRated Doors.jpg",
        sliderImages: ["/default-ui.webp", "/default-ui.webp", "/default-ui.webp"],
        article1: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        article2: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        article3: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        article4: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        categories: [
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
        ]
    },
    {
        title: "Front Entry Doors",
        banner: "/services/Front Entry Doors.jpg",
        sliderImages: ["/default-ui.webp", "/default-ui.webp", "/default-ui.webp"],
        article1: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        article2: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        article3: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        article4: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        categories: [
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
        ]
    },
    {
        title: "Emergency Lockout",
        banner: "/services/Emergency Lockout.jpg",
        sliderImages: ["/default-ui.webp", "/default-ui.webp", "/default-ui.webp"],
        article1: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        article2: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        article3: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        article4: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        categories: [
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
            {
                image: "/default-ui.webp",
                title: "title",
                description: "description",
            },
        ]
    },
]

export default servicesPage
