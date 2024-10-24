import React, { useEffect, useRef } from 'react';

interface ProductPopupProps {
  product: {
    name: string;
    price: string;
    imageSrc: string;
    imageAlt: string;
  } | null;
  onClose: () => void;
}

const ProductPopup: React.FC<ProductPopupProps> = ({ product, onClose }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={popupRef} className="bg-white p-5 rounded-lg shadow-lg">
        <button onClick={onClose} className="absolute top-2 right-2">X</button>
        <img src={product.imageSrc} alt={product.imageAlt} className="w-full h-64 object-cover mb-4" />
        <h3 className="text-xl font-bold">{product.name}</h3>
        <p className="text-lg">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductPopup;