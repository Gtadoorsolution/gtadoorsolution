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
        banner: "/services/access-control-system/Access-control-system Main.jpg",
        sliderImages: ["/services/access-control-system/Slider/5.jpeg", "/services/access-control-system/Slider/6.jpeg", "/services/access-control-system/Slider/7.jpeg"],
        article1: "Gtadoorsolution specializes in the installation and maintenance of Glass and Aluminum Doors, frequently utilized in retail and commercial entrances.",
        article2: "Our extensive range of styles, colors, and pricing options ensures we're equipped to meet your needs.",
        article3: "With our expertise in commercial-grade door systems, we handle everything from installation to repairs with precision.",
        article4: "Whether you require manual or automatic opening mechanisms, or high-security doors with advanced access control technology, we have the experience to deliver.",
        categories: [
            {
                image: "/services/access-control-system/Keypad, Card & Fob Keyless Entry Systems.jpg",
                title: "Keypad, Card & Fob Keyless Entry Systems:",
                description: "These systems offer convenient and secure access management using keypads, cards, or fobs. Common in commercial buildings, hospitals, schools, and residential complexes, GTADoorsolution provides tailored access control solutions for businesses of all sizes, including standalone and networked systems",
            },
            {
                image: "/services/access-control-system/Cloud-Based Access Control Solutions.jpg",
                title: "Cloud-Based Access Control Solutions",
                description: "Cloud-based access control solutions allow remote management via a web-based interface, offering flexibility and convenience. Businesses can efficiently manage access rights and monitor activities from anywhere. GTADoorsolution provides tailored cloud-based options to meet the unique needs of each business in the Greater Toronto Area.",
            },
            {
                image: "/services/access-control-system/Mobile access control.jpg",
                title: "Mobile access control",
                description: "Mobile access systems use smartphones or tablets to grant or deny entry to a building or facility. This system removes the need for physical keys, access cards, or fobs, providing a streamlined access control process. GTADoorsolution offers mobile access control systems that integrate Bluetooth, Wi-Fi, and Near Field Communication (NFC), tailored to meet the needs of businesses in the Greater Toronto Area.",
            },
            {
                image: "/services/access-control-system/Biometric Access Control System.jpg",
                title: "Biometric Access Control System",
                description: "Biometric access control systems use physical traits like fingerprints or facial recognition to manage building access, offering high security as biometric data is hard to forge. GTADoorsolution provides various biometric solutions, including facial recognition, fingerprint scanning, and iris recognition, tailored to businesses in the Greater Toronto Area.",
            },
            {
                image: "/services/access-control-system/Visitor Management Systems.jpg",
                title: "Visitor Management Systems",
                description: "Visitor management systems help businesses track and oversee visitors to their facility. These systems grant temporary access and monitor visitor activity, boosting security and safeguarding employees, visitors, and assets. At GTADoorsolution, you’ll find visitor management solutions tailored to meet the needs of businesses in the Greater Toronto Area.",
            },
            {
                image: "/services/access-control-system/Security Turnstile Systems.jpg",
                title: "Security Turnstile Systems",
                description: "Security turnstile systems regulate the movement of people into and out of buildings, often used in high-security areas like government buildings or airports to prevent unauthorized entry. GTADoorsolution offers a range of turnstiles, including full-height, tripod, and waist-high, serving the Greater Toronto Area.",
            },
            {
                image: "/services/access-control-system/ID Badging System.jpg",
                title: "ID Badging System",
                description: "ID badging systems create and manage badges for employees, contractors, or visitors, helping identify those with authorized access and track activity for added security. GTADoorsolution offers various ID badging solutions, including photo ID badges and proximity cards, serving the Greater Toronto Area.",
            },
        ]
    },
    {
        title: "Aluminum Storefronts",
        banner: "/services/aluminum-storefronts/Aluminum-Storefronts Main.jpg",
        sliderImages: [
            "/services/aluminum-storefronts/Slider/1.jpeg", 
            "/services/aluminum-storefronts/Slider/2.jpeg", 
            "/services/aluminum-storefronts/Slider/3.jpeg",
            "/services/aluminum-storefronts/Slider/4.jpeg",
            "/services/aluminum-storefronts/Slider/5.jpeg",
        ],
        article1: "We are ready to handle any aluminum storefront service you may need.",
        article2: "Whether it's installing a new storefront, repairing existing aluminum frames, replacing glass panels, or needing emergency storefront assistance, you can trust us to help.",
        article3: "Our team offers 24/7 commercial aluminum storefront services in Toronto and the Greater Toronto Area.",
        article4: "Wherever you are in the GTA, count on GTADoorsolution to be there for you!",
        categories: [
            {
                image: "/services/aluminum-storefronts/Wood storefronts.jpg",
                title: "Wood storefronts",
                description: "We have the capability to replicate any historic wood storefront, capturing every intricate detail, including the brick molding profile. We welcome architectural designs and can produce shop drawings for your project. Your imagination is our only limit.",
            },
            {
                image: "/services/aluminum-storefronts/Aluminum Storefronts.jpg",
                title: "Aluminum Storefronts",
                description: "Aluminum storefronts can be customized to meet any design specifications. You can configure as many fixed and/or operable units as needed, including tri-folding systems and curtain walls. All units are designed to withstand the challenging weather conditions of the Greater Toronto Area.",
            },
            {
                image: "/services/aluminum-storefronts/Metal Wall Panels, Aluminum Wall Curtains, Storefront Panels.jpg",
                title: "Metal Wall Panels, Aluminum Wall Curtains, Storefront Panels",
                description: "Unlock the potential of aluminum and metal wall facade panels with GTADoorsolution, serving Toronto and the GTA. Our customizable systems elevate both commercial and residential spaces, enhancing aesthetics and functionality. Picture sleek, modern lines integrating with your vision, creating a memorable first impression and enduring elegance. From sophisticated storefronts to dynamic architectural features, we transform your ideas into reality, pushing the limits of design and performance.",
            },
            {
                image: "/services/aluminum-storefronts/Aluminum Framed Partitions.jpg",
                title: "Aluminum Framed Partitions",
                description: "Enhance your office or commercial space with customizable framed partitions from GTADoorsolution in the GTA. Choose from glass, metal, or wood finishes to create stylish dividers that boost collaboration, productivity, and aesthetic appeal. Our systems provide privacy and sound control while maintaining an open environment.",
            },
            {
                image: "/services/aluminum-storefronts/Aluminum & Commercial Glass Doors.jpg",
                title: "Aluminum & Commercial Glass Doors",
                description: "With extensive experience, GTADoorsolution offers a diverse range of modern interior glass and door products to Toronto and the GTA. Our selection includes sliding glass doors, room dividers, bi-fold doors, and suspended glass doors, available in various frame finishes and glass options for both residential and commercial use. Unsure which door suits your space? Our experts, with decades of combined experience, will help you find the perfect product for your needs and budget.",
            },
            {
                image: "/services/aluminum-storefronts/Residential house windows replacement.jpg",
                title: "Residential house windows replacement",
                description: "Are you looking for a licensed, insured, and experienced installer in the Greater Toronto Area to assist with your house window replacements? GTADoorsolution provides top-quality fabrication and installation of high-thermal-performance and low-noise windows for your home",
            },
        ]
    },
    {
        title: "Automatic Doors",
        banner: "/services/automatic-door/Automatic-door-operators Main.jpg",
        sliderImages: ["/services/automatic-door/Slider/1.jpeg", "/services/automatic-door/Slider/2.jpeg", "/services/automatic-door/Slider/3.jpeg"],
        article1: "We are ready to manage any automatic door service you require.",
        article2: "Whether it's installing new automatic doors for your business, repairing current ones, performing maintenance, or providing emergency assistance, you can rely on us.",
        article3: "Our team delivers 24/7 commercial and residential automatic door services in Toronto and the Greater Toronto Area. ",
        article4: "No matter where you are in the GTA, GTADoorsolution is here to assist you!",
        categories: [
            {
                image: "/services/automatic-door/BI-FOLDING DOORS.jpg",
                title: "BI-FOLDING DOORS",
                description: "Bi-folding automatic doors are ideal for achieving the widest opening clearance in compact spaces",
            },
            {
                image: "/services/automatic-door/ICU-CCU DOORS.jpg",
                title: "ICU-CCU DOORS",
                description: "L I Automatic Doors possesses the expertise required to equip hospitals, healthcare, and medical facilities with access solutions tailored to their specific needs",
            },
            {
                image: "/services/automatic-door/Manual doors.jpg",
                title: "Manual doors",
                description: "Looking for new manual doors for your business? Pivot, hinged, and balanced doors are renowned for their excellent craftsmanship and customizable options.",
            },
            {
                image: "/services/automatic-door/SLIDING DOORS.jpg",
                title: "SLIDING DOORS",
                description: "We provide a range of sliding door systems suitable for various applications. We also stock replacement parts for all major manufacturers, and our technicians have the expertise to ensure your doors function properly and safely",
            },
            {
                image: "/services/automatic-door/Swinging doors.jpg",
                title: "Swinging doors",
                description: "Ideal for health care facilities, major retailers, supermarket chains, assisted living centers, office buildings, hotels, lodging, transportation hubs, and many other locations.",
            },
            {
                image: "/services/automatic-door/Locksmith.jpg",
                title: "Locksmith",
                description: "We are a leading authority in the physical security industry. Our reputation is unmatched, and our technicians are true experts in their field.",
            },
        ]
    },
    {
        title: "Commercial Door Repair",
        banner: "/services/commercial-door-repair/Commercial Door Repair Main.jpg",
        sliderImages: ["/services/commercial-door-repair/Slider/1.jpeg", "/services/commercial-door-repair/Slider/2.jpeg", "/services/commercial-door-repair/Slider/3.webp"],
        article1: "We are equipped to manage any commercial door repair service you need.",
        article2: "Whether it's repairing or replacing doors for your business, addressing hardware issues, or providing emergency repair assistance, you can rely on us.",
        article3: "Our team offers 24/7 commercial door repair services in Toronto and the Greater Toronto Area.",
        article4: "No matter where you are in the GTA, count on GTADoorsolution to be there for you!",
        categories: [
            {
                image: "/services/commercial-door-repair/Door Installation.jpg",
                title: "Door Installation",
                description: "Comprehensive door installation services. We provide a range of replacement options for both exterior and interior doors, available in various styles, colors, and high-quality materials.",
            },
            {
                image: "/services/commercial-door-repair/Door Repair.jpg",
                title: "Door Repairv",
                description: "Offering prompt repairs for commercial glass doors and door mechanisms, including pivots, hinges, frames, and closers.",
            },
            {
                image: "/services/commercial-door-repair/GLASS DOORS.jpg",
                title: "GLASS DOORS",
                description: "Offering prompt repairs for commercial glass doors and door mechanisms, including pivots, hinges, frames, and closers.",
            },
            {
                image: "/services/commercial-door-repair/Fire proof doors.jpg",
                title: "Fire proof doors",
                description: "Repair services for all types of fireproof doors, push bars, and exit devices, ensuring compliance with fire department regulations and city codes.",
            },
            {
                image: "/services/commercial-door-repair/ALUMINUM DOOR REPAIR.jpg",
                title: "ALUMINUM DOOR REPAIR",
                description: "Aluminum doors are highly durable and provide excellent protection against vandals, thieves, and harsh weather conditions.",
            },
            {
                image: "/services/commercial-door-repair/Automatic doors repair.jpg",
                title: "Automatic doors repair",
                description: "Automatic doors offer convenience and accessibility by opening and closing automatically when activated. Ideal for high-traffic areas, they enhance safety and ease of use while reducing manual contact and improving energy efficiency.",
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
                image: "/services/garage-doors/Garage door installation.jpg",
                title: "Garage door installation",
                description: "Enhance your home's curb appeal and value with a new, durable garage door from GTADoorsolution. Serving the Greater Toronto Area, our expert technicians offer 24/7 installation and repair, including same-day emergency services. Trust us for secure, professional installations.",
            },
            {
                image: "/services/garage-doors/Broken spring replacement.jpg",
                title: "Broken spring replacement",
                description: "A garage door spring is essential for smooth operation but wears out over time. When it needs repair, professional assistance is crucial for quick and accurate service.",
            },
            {
                image: "/services/garage-doors/Openers repair | installation.jpg",
                title: "Openers repair / installation",
                description: "For convenient garage door operation, a functional opener is essential. If yours isn't working or you need a new one, call our expert technicians. We quickly repair or install openers, ensuring your vehicles stay protected from bad weather. Our skilled team will have your door operating smoothly in no time.",
            },
            {
                image: "/services/garage-doors/Broken cable repair.jpg",
                title: "Broken cable repair",
                description: "If your garage door is misaligned, a broken cable might be the cause. Cables balance the door’s weight and are crucial for smooth operation. A snapped or frayed cable can make your door inoperable, trapping you inside or outside.",
            },
            {
                image: "/services/garage-doors/REMOTE REPAIR | PROGRAM.jpg",
                title: "REMOTE REPAIR / PROGRAM",
                description: "We know how frustrating it is when your garage door remote fails. Whether it's a handheld or wall-mounted remote, our technicians can help fix it. Your remote is essential for easy and safe garage access, especially on rainy or snowy days.",
            },
            {
                image: "/services/garage-doors/GARAGE DOOR ROLLER REPAIR.jpg",
                title: "GARAGE DOOR ROLLER REPAIR",
                description: "Your garage door has many moving parts that need to work together for optimal operation, and rollers are a crucial component. If the rollers aren’t in good condition, your garage door won’t function smoothly.",
            },
        ]
    },
    {
        title: "Locksmith Services",
        banner: "/services/Locksmith-Service.jpg",
        sliderImages: ["/default-ui.webp", "/default-ui.webp", "/default-ui.webp"],
        article1: "",
        article2: "",
        article3: "",
        article4: "",
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
        sliderImages: ["/services/metal-firerated-doors/Slider/1.jpeg", "/services/metal-firerated-doors/Slider/2.webp", "/services/metal-firerated-doors/Slider/3.jpeg"],
        article1: "Enhance the safety and security of your property with GTADoorSolution's premium metal fire-rated doors. ",
        article2: "Designed for superior fire resistance, these doors are essential for protecting your home or business in Toronto and the GTA. Our expert installation ensures a perfect fit and optimal function, providing you with peace of mind.",
        article3: "Built to last, our doors combine durability with robust construction to withstand extreme conditions. Suitable for residential, commercial, or industrial use, we offer a variety of styles and finishes to meet your needs and preferences.",
        article4: "Invest in ultimate protection. Contact GTADoorSolution today for a free consultation and discover how our fire-rated doors can elevate your safety standards. Your safety is our priority—let us help you safeguard what matters most.",
        categories: [
            {
                image: "/services/metal-firerated-doors/Fire-Rated Roll-Up Doors and Smoke Curtains.jpg",
                title: "Fire-Rated Roll-Up Doors and Smoke Curtains",
                description: "Fire-rated roll-up doors and smoke curtains are essential for enhancing fire safety in buildings. Fire-rated roll-up doors provide a robust barrier to contain fires and prevent their spread, while smoke curtains help control and direct smoke to facilitate safe evacuation and minimize damage. Both are crucial for maintaining safety standards and protecting property in commercial and industrial settings.",
            },
            {
                image: "/services/metal-firerated-doors/Commercial & Industrial Doors.jpg",
                title: "Commercial & Industrial Doors",
                description: "Commercial and industrial doors are designed to handle high-traffic and demanding environments. They offer durability, security, and functionality, with options ranging from heavy-duty roll-up doors to high-performance sectional doors. These doors are essential for ensuring efficient operations, safeguarding premises, and accommodating various operational needs in commercial and industrial settings.",
            },
            {
                image: "/services/metal-firerated-doors/HIGH-SPEED ROLL UP DOORS.jpg",
                title: "HIGH-SPEED ROLL UP DOORS",
                description: "High-speed roll-up doors are designed for rapid opening and closing, enhancing efficiency and traffic flow in high-traffic areas. Their quick operation helps reduce wait times, improve energy efficiency, and maintain security and temperature control. Ideal for industrial and commercial environments, these doors are built for durability and performance.",
            },
            {
                image: "/services/metal-firerated-doors/SECTIONAL STEEL OVERHEAD DOORS.jpg",
                title: "SECTIONAL STEEL OVERHEAD DOORS",
                description: "Sectional steel overhead doors are durable and versatile, making them ideal for commercial and industrial applications. They consist of multiple panels that slide upward along tracks, providing efficient use of space and ease of operation. These doors offer robust security, insulation, and weather resistance, making them a reliable choice for a range of environments.",
            },
            {
                image: "/services/metal-firerated-doors/Fire rated doors.jpg",
                title: "Fire rated doors",
                description: "Fire-rated doors are specially designed to withstand high temperatures and prevent the spread of fire and smoke. They are essential for enhancing building safety, providing critical protection for occupants, and ensuring compliance with fire safety regulations. These doors are commonly used in commercial, industrial, and institutional settings.",
            },
            {
                image: "/services/metal-firerated-doors/THERMACORE ROLL UP DOORS.jpg",
                title: "THERMACORE ROLL UP DOORS",
                description: "Thermacore roll-up doors are designed for superior thermal efficiency and durability. These doors feature insulated panels that help maintain temperature control, reduce energy costs, and provide robust security. Ideal for commercial and industrial applications, Thermacore roll-up doors offer reliable performance in demanding environments",
            },
        ]
    },
    {
        title: "Front Entry Doors",
        banner: "/services/Front Entry Doors.jpg",
        sliderImages: ["/services/front-etry-doors/Slider/1.jpeg", "/services/front-etry-doors/Slider/2.jpeg", "/services/front-etry-doors/Slider/3.webp"],
        article1: "We specialize in a wide range of front entry door services, including expert repairs to fix any issues and flawless installations to enhance your home’s curb appeal.",
        article2: "Our team uses only top-quality materials and cutting-edge techniques to provide durable and visually appealing solutions tailored to your specific needs.",
        article3: "Upgrade your home’s entrance with GTADoorSolution. Contact us today for a free consultation and experience unparalleled service and craftsmanship. ",
        article4: "Trust us to deliver exceptional results and enhance both the beauty and security of your property.",
        categories: [
            {
                image: "/services/front-etry-doors/Entry doors.jpg",
                title: "Entry doors",
                description: "Elevate your home's look and security with entry doors from GTADoorsolution. Choose from our premium, stylish options to enhance curb appeal and energy efficiency. We offer expert installation and repair services to ensure perfect performance.",
            },
            {
                image: "/services/front-etry-doors/Sliding patio doors.jpg",
                title: "Sliding patio doors",
                description: "Upgrade your home with sliding patio doors from GTADoorsolution. Our stylish, high-quality options enhance curb appeal and energy efficiency. Choose from modern, classic, or custom designs, and benefit from our expert installation and repair services.",
            },
            {
                image: "/services/front-etry-doors/Storm doors.jpg",
                title: "Storm doors",
                description: "Shield your home with storm doors from GTADoorsolution. Our robust and stylish storm doors improve security and energy efficiency while enhancing your home’s curb appeal. Select from a range of designs, and benefit from our professional installation and repair services for an ideal solution.",
            },
            {
                image: "/services/front-etry-doors/French doors.jpg",
                title: "French doors",
                description: "Add elegance to your home with French doors from GTADoorsolution. Our beautiful and high-quality French doors bring charm and style, enhancing both appearance and functionality. Select from a range of designs to match your taste, and trust our professional installation and repair services for a perfect finish.",
            },
            {
                image: "/services/front-etry-doors/Fiberglass Doors.jpg",
                title: " Fiberglass Doors",
                description: "Enhance your home with fiberglass doors, offering a blend of durability and low maintenance. These doors provide excellent insulation, resist dents and scratches, and come in various designs to suit any décor. Enjoy both strength and style with expert installation and repair services for a perfect fit and lasting performance.",
            },
            {
                image: "/services/front-etry-doors/Wooden doors.jpg",
                title: "Wooden doors",
                description: "We recognize the timeless charm and elegance of wooden doors. Our specialists are adept at repairing and restoring them, handling issues such as warping, rot, cracks, and hardware problems.",
            },
        ]
    },
    {
        title: "Emergency Lockout",
        banner: "/services/Emergency Lockout.jpg",
        sliderImages: ["/default-ui.webp", "/default-ui.webp", "/default-ui.webp"],
        article1: "",
        article2: "",
        article3: "",
        article4: "",
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
