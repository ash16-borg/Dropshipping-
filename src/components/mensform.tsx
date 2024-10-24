import React, {useState} from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import './mensform.css';

type SizePrices = {
  [key: string]: number;
};

type Product = {
  image: string;
  brandName: string;
  sizes: string[];
  sizePrices: SizePrices;
  selectedSize: string | null;
  price: number;
  added: boolean;
};

const mensform: React.FC = () => {
  const initialProducts: Product[] = [
    {
      image: "src/assets/images/products/mencas1.jpg",
      brandName: "Louis Vitton inner tights",
      sizes: ["37", "38", "39", "40", "41"],
      sizePrices: { "37": 90, "38": 104, "39": 129, "40": 135, "41": 140 },
      selectedSize: null,
      price: 90,
      added: false,
    },
    {
      image: "src/assets/images/products/mencas2.png",
      brandName: "Allen Solly round-neck t-shirts",
      sizes: ["37", "38", "39", "40", "41"],
      sizePrices: { "37": 104, "38": 129, "39": 135, "40": 150, "41": 165 },
      selectedSize: null,
      price: 104,
      added: false,
    },
    {
      image: "src/assets/images/products/mencas3.png",
      brandName: "Peter England full sleeves t-shirts",
      sizes: ["35", "37", "39", "41", "42"],
      sizePrices: { "35": 100, "37": 129, "39": 140, "41": 154, "42": 165 },
      selectedSize: null,
      price: 100,
      added: false,
    },
    {
      image: "src/assets/images/products/mencas4.png",
      brandName: "Nike cotton sweat-shirt",
      sizes: ["32", "36", "42", "44", "46"],
      sizePrices: { "32": 95, "36": 104, "42": 175, "44": 189, "46": 200 },
      selectedSize: null,
      price: 95,
      added: false,
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  const handleSizeClick = (index: number, size: string) => {
    const updatedProducts = [...products];
    if (updatedProducts[index].selectedSize === size) {
      updatedProducts[index].selectedSize = null;
      updatedProducts[index].price = initialProducts[index].price;
    } else {
      updatedProducts[index].selectedSize = size;
      updatedProducts[index].price = updatedProducts[index].sizePrices[size];
    }
    setProducts(updatedProducts);
  };

  const handleClick = (index: number) => {
    const updatedProducts = [...products];
    updatedProducts[index].added = true;
    setProducts(updatedProducts);
  };
    return (
      <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('src/assets/images/banner.png')" }}></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <Navbar />
        <h3 className="text-orange-300 text-5xl p-4 font-mono ml-24 font-semibold">MEN'S CASUALS</h3>
        <div className="flex flex-wrap justify-center gap-8 p-8 mt-4">
        {products.map((product, index) => (
          <div key={index} className="card bg-amber-900 bg-opacity-90 m-4 p-4 w-80">
            <div className="image_container">
              <img src={product.image} alt={`Image of ${product.brandName}`} className="image" />
            </div>
            <div className="title">
            <span className="word-wrap">{product.brandName}</span>
             </div>
            <div className="size">
              <span>Size</span>
              <ul className="list-size">
                {product.sizes.map((size) => (
                  <li className="item-list" key={size}>
                    <button
                      className={`item-list-button ${product.selectedSize === size ? 'bg-yellow-500' : ''}`}
                      onClick={() => handleSizeClick(index, size)}
                    >
                      {size}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="action">
              <div className="price">
                <span>${product.price}</span>
              </div>
              <button className="cart-button" onClick={() => handleClick(index)}>
                <FontAwesomeIcon icon={product.added ? faCircleCheck : faCartShopping} className="cart-icon" />
                <span>{product.added ? 'Added!' : 'Add to cart'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
        <Outlet />
      </div>
    </div>
    );
  };

export default mensform;