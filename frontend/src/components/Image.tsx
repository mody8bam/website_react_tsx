import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <img src={src} alt={alt} className="w-full h-48 object-cover" /> 
    </div>
  );
};

export default Image;