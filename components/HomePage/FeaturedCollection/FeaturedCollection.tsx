import React from 'react';
import ProductCard from '../../../cards/ProductCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import saleImage from '../../../public/assets/images/sale.jpg';
import Image from 'next/image';

function FeaturedCollection({ allTagsData }: any) {
  console.log(allTagsData, 'data');
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3,
      slidesToSlide: 4,
    },
    laptop: {
      breakpoint: { max: 1200, min: 992 },
      items: 2,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 992, min: 767 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="container">
      {allTagsData?.length > 0 &&
        allTagsData?.map((tag: any) => (
          <div className="row">
            <div className="col-lg-7 p-lg-4">
              <div className="mt-4">
                <h4 className="ps-3">{tag?.tag_name}</h4>
                <p className="ps-3">{tag?.description}</p>
                <div className="slider-container p-0">
                  <Carousel responsive={responsive}>
                    {tag?.value?.length > 0 &&
                      tag?.value?.map((item: any) => (
                        <div className="slider px-3">
                          <ProductCard data={item} />
                        </div>
                      ))}
                  </Carousel>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <Image src={saleImage} alt="sale-image" width={1400} height={400} style={{ objectFit: 'cover' }} />
            </div>
          </div>
        ))}
    </div>
  );
}

export default FeaturedCollection;
