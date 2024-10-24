import React from 'react';

interface ProductItemProps {
  product: {
    id: number;
    name: string;
    href: string;
    price: string;
    imageSrc: string;
    imageAlt: string;
    description: string; 
  };
  onClick: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onClick }) => {
  return (
    <div className="group" onClick={onClick}>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          alt={product.imageAlt}
          src={product.imageSrc}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      <p className="mt-1 text-sm text-gray-500">{product.description}</p> {}
      <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Add to Cart</button> {/* Added button */}
    </div>
  );
};

export default ProductItem;