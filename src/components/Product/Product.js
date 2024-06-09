import React from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Product = () => {
  const { productId } = useParams();
  const products = [
    {
      id: '1',
      title: 'Colors',
      price: 100,
      images: [
        'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        'https://prasadyash2411.github.io/ecom-website/img/Album%204.png'
      ],
      reviews: [
        { customer: 'Alice', review: 'Great product!', rating: 4.5 },
        { customer: 'Bob', review: 'Loved the colors.', rating: 5 },
      ],
    },
    {
      id: '2',
      title: 'Black and white Colors',
      price: 50,
      images: [
        'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      ],
      reviews: [
        { customer: 'Charlie', review: 'Excellent quality!', rating: 4 },
        { customer: 'Dave', review: 'Good value for money.', rating: 3.5 },
      ],
    },
    {
      id: '3',
      title: 'Yellow and Black Colors',
      price: 70,
      images: [
        'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      ],
      reviews: [
        { customer: 'Eve', review: 'Amazing colors!', rating: 5 },
        { customer: 'Frank', review: 'Would buy again.', rating: 4.5 },
      ],
    },
    {
      id: '4',
      title: 'Blue Color',
      price: 100,
      images: [
        'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      ],
      reviews: [
        { customer: 'Grace', review: 'Best blue ever!', rating: 5 },
        { customer: 'Heidi', review: 'Stunning product.', rating: 4.5 },
      ],
    }
  ];

  const product = products.find(p => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    return (
      <>
        {Array(fullStars).fill(<FaStar color="gold" />)}
        {halfStar && <FaStarHalfAlt color="gold" />}
        {Array(emptyStars).fill(<FaRegStar color="gold" />)}
      </>
    );
  };

  return (
    <div>
      <h2>{product.title}</h2>
      <div>
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={product.title} style={{ width: '200px', height: '200px', margin: '10px' }} />
        ))}
      </div>
      <div>
        <h3>Reviews</h3>
        {product.reviews.map((review, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <p><strong>{review.customer}:</strong> {review.review}</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {renderStars(review.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
