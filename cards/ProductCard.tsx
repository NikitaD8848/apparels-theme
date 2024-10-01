import Image from 'next/image';
import { FaRegHeart } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import styles from '../styles/components/ProductCard.module.scss';

function ProductCard({ data }: any) {
  const imageLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className={`${styles.card_wrapper} w-100`}>
      <div className={styles.image_container}>
        <Image src={data?.image} loader={imageLoader} alt="item-image" className={styles.product_img} width={1200} height={900} />
        <div>
          <button className={`${styles.button} ${styles.add_to_cart_btn} border w-50`}>
            Add{' '}
            <span>
              <FaRegHeart />
            </span>
          </button>
          <button className={`${styles.button} ${styles.add_to_wishlist_btn} border w-50`}>
            Add{' '}
            <span>
              <FaCartShopping />
            </span>
          </button>
        </div>
      </div>
      <div className="">
        <h6 className={styles.item_name}>{data?.item_name}</h6>
        <h6>
          {data?.currency_symbol} {data?.price}
        </h6>
        <div className="d-flex justify-content-start py-1">
          <div className={`${styles.colour_circle} mx-1`} style={{ backgroundColor: '#244671' }}></div>
          <div className={`${styles.colour_circle} mx-1`} style={{ backgroundColor: '#c6eff1' }}></div>
          <div className={`${styles.colour_circle} mx-1`} style={{ backgroundColor: '#871a24' }}></div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
