import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from '../../../cards/ProductCard';
import saleImage from '../../../public/assets/images/sale.jpg';
import styles from '../../../styles/components/FeaturedCollection.module.scss';

function FeaturedCollection({ allTagsData, addToCartItem, getPartyName, wishlistData }: any) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3,
      slidesToSlide: 3,
    },
    laptop: {
      breakpoint: { max: 1200, min: 992 },
      items: 2,
      slidesToSlide: 2,
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
            <div className="col-lg-6 p-lg-3">
              <div className="mt-4">
                <div className="d-flex justify-content-between">
                  <div>
                    <h4 className="ps-3">{tag?.tag_name}</h4>
                    <p className="ps-3">{tag?.description}</p>
                  </div>
                  <a href="" className="text-dark">
                    View all
                  </a>
                </div>
                <div className="slider-container p-0">
                  <Carousel responsive={responsive}>
                    {tag?.value?.length > 0 &&
                      tag?.value?.map((item: any) => (
                        <div className="slider px-2">
                          <ProductCard data={item} addToCartItem={addToCartItem} getPartyName={getPartyName} wishlistData={wishlistData} />
                        </div>
                      ))}
                  </Carousel>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-lg-3">
              <Link href={'/'}>
                <Image src={saleImage} alt="sale-image" className={`${styles.sale_img} mt-4`} />
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}

export default FeaturedCollection;
