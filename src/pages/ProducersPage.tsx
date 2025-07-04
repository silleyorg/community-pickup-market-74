
import React from 'react';
import Header from '../components/Header';
import ProducerCard from '../components/ProducerCard';
import { mockProducers } from '../data/mockData';

const ProducersPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartItemsCount={0}
        onCartClick={() => {}}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Nos producteurs</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProducers.map((producer) => (
            <ProducerCard
              key={producer.id}
              producer={producer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProducersPage;
