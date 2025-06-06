
import React, { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
import StageContainer from '@/components/StageContainer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <StageContainer />
    </div>
  );
};

export default Index;
