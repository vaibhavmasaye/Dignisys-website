// components/CompanySuccess.js
import Image from 'next/image';

const CompanySuccess = () => {
  const stats = [
    {
      id: 1,
      title: 'Custom Apps',
      value: '200',
    },
    {
      id: 2,
      title: 'Happy Customers',
      value: '45',
    },
    {
      id: 3,
      title: 'Hours of Work',
      value: '3560',
    },
    {
      id: 4,
      title: 'Development Awards',
      value: '750',
    },
  ];

  return (
    <section className="relative min-h-[60vh] sm:min-h-[75vh] md:min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Background Image Container with Limited Height */}
        <div className="absolute inset-0 z-0 h-[70vh] sm:h-[75vh] md:h-[80vh]">
          <Image
            src="/assets/map.png"
            alt="Contact Us Background"
            fill
            className="object-cover"
            priority
          />
        </div>
  
        <div className="relative z-10 w-full mx-4 sm:mx-6 md:mx-8 lg:mx-10 my-4 sm:my-6 md:my-8">
          <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
           Company Success
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id} className=' text-center'>
              <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                {stat.value}
              </div>
              <p className="text-gray-600 font-medium">{stat.title}</p>
            </div>
          ))}
        </div>
        
      </div>
      </section>
  );
};

export default CompanySuccess;