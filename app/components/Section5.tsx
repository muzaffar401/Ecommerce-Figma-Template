import React from 'react';

const FeatureCard = ({ iconSrc, title, description, altText }:any) => {
  return (
    <div className="text-center">
      <div className="w-14 h-14 m-auto">
        <img
          alt={altText}
          loading="lazy"
          className="w-full h-full object-cover"
          src={iconSrc}
        />
      </div>
      <h2 className="text-xl font-medium pt-5">{title}</h2>
      <span className="text-sm">{description}</span>
    </div>
  );
};

const Section5 = () => {
  const features = [
    {
      id: 1,
      iconSrc: '/i1.webp',
      title: 'FREE AND FAST DELIVERY',
      description: 'Free delivery for all orders over $140',
      altText: 'Free delivery icon',
    },
    {
      id: 2,
      iconSrc: '/i2.webp',
      title: '24/7 CUSTOMER SERVICE',
      description: 'Friendly 24/7 customer support',
      altText: 'Customer service icon',
    },
    {
      id: 3,
      iconSrc: '/i3.webp',
      title: 'MONEY BACK GUARANTEE',
      description: 'We return money within 30 days',
      altText: 'Money back guarantee icon',
    },
  ];

  return (
    <section className="mt-0 md:mt-10 flex justify-evenly items-center m-auto w-full flex-wrap pb-16 pt-8 md:py-20 gap-6">
      {features.map((feature) => (
        <FeatureCard
          key={feature.id}
          iconSrc={feature.iconSrc}
          title={feature.title}
          description={feature.description}
          altText={feature.altText}
        />
      ))}
    </section>
  );
};

export default Section5;
