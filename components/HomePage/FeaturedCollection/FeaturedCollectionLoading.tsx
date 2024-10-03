import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';
import ProductCardSkeleton from '../../../cards/ProductCardSkeleton';

function FeaturedCollectionLoading() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 p-lg-3">
          <div className="row">
            {[...Array(3)].map(() => (
              <div className="col-lg-4">
                <ProductCardSkeleton />
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-6 p-lg-3">
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder style={{ width: '100%', height: 382 }} />
          </Placeholder>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCollectionLoading;
