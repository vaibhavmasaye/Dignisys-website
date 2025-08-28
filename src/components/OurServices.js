// components/OurServices.js
import Image from 'next/image';

const OurServices = () => {
    const services = [
        {
            id: 1,
            title: "Logistics",
            description: "Dignisys Limited. provide cutting technology offerings apart from providing a great and unique customer service and time savings products.",
            link: "#",
            image: "/assets/servicesIcon/Logistics.png"
        },
        {
            id: 2,
            title: "Travels",
            description: "Dignisys Limited. is providing excellent Domestic and International Holidays travel based on your requirement on planning a honeymoon, solo trip..",
            link: "#",
            image: "/assets/servicesIcon/Travel.png"
        },
        {
            id: 3,
            title: "BPO",
            description: " Intelligent Finance Operations ,Sourcing and Procurement ,Supply Chain ,Compliance as a Service",
            link: "#",
            image: "/assets/servicesIcon/BPO.png"
        },
        {
            id: 4,
            title: "KPO",
            description: "The scope of KPO business includes preparation of accounts, tax returns, computer aided simulation, engineering and development, financial services.",
            link: "#",
            image: "/assets/servicesIcon/KPO.png"
        },
        {
            id: 5,
            title: "Healthcare Services",
            description: "Healthcare is the maintenance or improvement of health via the prevention, diagnosis, treatment, amelioration, or cure of disease,",
            link: "#",
            image: "/assets/servicesIcon/Healthcare.png"
        },
        {
            id: 6,
            title: "Software Solution",
            description: "The market is booming every day with continuous demand for creative and customised software development.",
            link: "#",
            image: "/assets/servicesIcon/Software.png"
        }
    ];

    return (
       <section className="py-16 md:py-20 lg:py-28 bg-white">
  <div className="px-10">
    {/* Section Header */}
    <div className="text-center mb-12 md:mb-16 lg:mb-20">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        Our Services
      </h2>
      <p className="text-gray-600 text-base md:text-lg w-full md:w-[90%] lg:w-[88%] mx-auto">
        Dignisys Limited is a newly established startup providing cost-effective timely services to different industries, enabling them to enhance their business and maximize their efficiencies to achieve their organizational mission & goals.
      </p>
    </div>

    {/* Services Grid - 3 columns, 2 rows */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mx-4 sm:mx-6 md:mx-8 lg:mx-10">
      {services.map((service) => (
        <div key={service.id} className="bg-[#F6F6F6] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col h-full">
          {/* Service Image with proper padding */}
          <div className="h-12 w-12 rounded-full bg-white p-3 mb-4 flex items-center justify-center mt-6">
            <Image
              src={service.image}
              alt={service.title}
              width={30}
              height={30}
              className="object-contain"
            />
          </div>

          {/* Service Content */}
          <div className="flex flex-col flex-grow">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">{service.title}</h3>
            <p className="text-gray-600 mb-8 sm:mb-12 text-sm sm:text-sm flex-grow lg:w-[80%] sm:w-[90%] md:w-[80%]">{service.description}</p>
            <a href={service.link} className="py-2 flex justify-center lg:w-[35%] sm:w-[45%] md:w-[55%] mb-6 bg-[#FED322] text-black text-xs sm:text-sm transition-colors duration-300 items-center mt-auto rounded-full hover:bg-[#f8c90e] shadow-md">
              Know More →
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    );
};

export default OurServices;