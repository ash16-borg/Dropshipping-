import './banner.css';
import React, { useState } from 'react';
import ProductPopup from './productpop';

interface Product {
  id: number;
  name: string;
  href: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Glass Bottle',
    href: '#',
    price: '$25',
    imageSrc: '/src/assets/images/newprods/bottle.png',
    imageAlt: 'a glass bottle with cork',
  },
  {
    id: 2,
    name: 'Unisex Sneakers',
    href: '#',
    price: '$30',
    imageSrc: '/src/assets/images/newprods/sneaker.png',
    imageAlt: 'sneakers footwear for all genders',
  },
  {
    id: 3,
    name: 'Warm Curtains',
    href: '#',
    price: '$34.99',
    imageSrc: '/src/assets/images/newprods/curtains.png',
    imageAlt: 'curtains for house decor',
  },
  {
    id: 4,
    name: 'Teal & warm yellow lamps',
    href: '#',
    price: '$45',
    imageSrc: '/src/assets/images/newprods/lamps.png',
    imageAlt: 'lamps as lighting decor',
  },
  {
    id: 5,
    name: 'Note-pads',
    href: '#',
    price: '$15',
    imageSrc: '/src/assets/images/newprods/notebook.png',
    imageAlt: 'notepads to write down',
  },
  {
    id: 6,
    name: 'Scented rose oils',
    href: '#',
    price: '$59',
    imageSrc: '/src/assets/images/newprods/scented.png',
    imageAlt: 'essential oils for perfumery',
  },
  {
    id: 7,
    name: 'Flower vase (white)',
    href: '#',
    price: '$23',
    imageSrc: '/src/assets/images/newprods/vase.png',
    imageAlt: 'flower vase for table decor.',
  },
  {
    id: 8,
    name: 'Fragrant wet-wipes',
    href: '#',
    price: '$15',
    imageSrc: '/src/assets/images/newprods/wetwipes.png',
    imageAlt: 'wetwipes for cleaning ',
  },
];

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-5xl mb-5 font-light font-sans uppercase">Newly Launched Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group" onClick={() => handleProductClick(product)}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
      {selectedProduct && <ProductPopup product={selectedProduct} onClose={handleClosePopup} />}
    </div>
  );
};

export default Products;