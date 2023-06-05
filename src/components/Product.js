import React from 'react';
import casioWatchImage from '../img/casio-watch.jpg';
import tommyHilfigerPantImage from '../img/tommy-hilfiger-pant.jpg';
import giorgioArmaniPerfumeImage from '../img/giorgio-armani-acqua-di-perfume.jpg';
import giorgioArmaniBlazerImage from '../img/giorgio-armani-blazer.jpg';

const Product = ({ product }) => {
  const { name, slug, category, price, countInStock, brand, rating, numReviews, description } = product;
  
  let image;
  
  switch(slug) {
    case 'casio-watch':
      image = casioWatchImage;
      break;
    case 'tommy-hilfiger-pant':
      image = tommyHilfigerPantImage;
      break;
    case 'giorgio-armani-perfume':
      image = giorgioArmaniPerfumeImage;
      break;
    case 'giorgio-armani-blazer':
      image = giorgioArmaniBlazerImage;
      break;
    default:
      image = casioWatchImage;
  }

  return (
    <div className="product-info">
      <img
        src={image}
        alt={slug}
      />
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="product-details">
        <p>Category: {category}</p>
        <p>Brand: {brand}</p>
        <p>Price: ${price}</p>
        <p>Rating: {rating} stars ({numReviews} reviews)</p>
        <p>Count in Stock: {countInStock}</p>
      </div>
    </div>
  );
};

export default Product;