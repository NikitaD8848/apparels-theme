import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';
import { Rating } from 'react-simple-star-rating';
import useAddToWishlist from '../hooks/WishlistHooks/useAddToWishlistHook';
import styles from '../styles/components/ProductCard.module.scss';

function ProductCard({ data, addToCartItem, getPartyName, wishlistData }: any) {
  const router = useRouter();
  const [addToCartLoaderBtn, setAddToCartLoaderBtn] = useState<boolean>(false);
  const { handleAddToWishList, handleRemoveFromWishList } = useAddToWishlist();
  const imageLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  let wishProducts: any;
  const handleRenderIcon = () => {
    {
      wishlistData?.length > 0 &&
        wishlistData?.map((item: any) => {
          if (item.name === data?.name) {
            wishProducts = item?.name;
          }
        });
    }
    if (!wishProducts) {
      return (
        <span>
          <FaRegHeart onClick={() => handleAddToWishList(data)} />
        </span>
      );
    } else {
      if (router?.asPath?.startsWith('/wishlist')) {
        return (
          <span>
            <RxCross2 onClick={() => handleRemoveFromWishList(data?.name)} />
          </span>
        );
      } else {
        return (
          <span>
            <FaHeart onClick={() => handleRemoveFromWishList(data?.name)} />
          </span>
        );
      }
    }
  };
  const handleAddToCart = async () => {
    setAddToCartLoaderBtn(true);
    const addToCartParams = {
      currency: 'INR',
      item_list: [{ item_code: data.name, quantity: 1 }],
      party_name: getPartyName,
    };

    try {
      await addToCartItem(addToCartParams, null);
    } catch (error) {
      console.error('Error adding to cart', error);
    } finally {
      setAddToCartLoaderBtn(false);
    }
  };

  return (
    <div className={`${styles.card_wrapper} w-100`}>
      <div className={styles.image_container}>
        <Image src={data?.image} loader={imageLoader} alt="item-image" className={styles.product_img} width={1200} height={900} />
        <div>
          <button className={`${styles.button} ${styles.add_to_cart_btn} border w-50`}>Add {handleRenderIcon()}</button>
          <button
            className={`${styles.button} ${styles.add_to_wishlist_btn} border w-50`}
            onClick={handleAddToCart}
            disabled={addToCartLoaderBtn}
          >
            {!addToCartLoaderBtn ? (
              <>
                <span>Add</span>
                <span>
                  <FaCartShopping className="ms-1" />
                </span>
              </>
            ) : (
              <span className="spinner-border spinner-border-sm " role="status" aria-hidden="true"></span>
            )}
          </button>
        </div>
      </div>
      <div className="pt-2">
        <h6 className={styles.item_name}>{data?.item_name}</h6>
        <div className="d-flex justify-content-between">
          <h6 className="m-0 d-flex align-items-center">
            {data?.currency_symbol} {data?.price}
          </h6>
        </div>
        <Rating initialValue={4} size={20} />
        <div className="d-flex justify-content-start flex-wrap py-1 cursor-pointer">
          <div className="p-1 border rounded-circle me-1">
            <div className={`${styles.colour_circle}`} style={{ backgroundColor: '#244671' }}></div>
          </div>
          <div className="p-1 border rounded-circle me-1">
            <div className={`${styles.colour_circle}`} style={{ backgroundColor: '#c6eff1' }}></div>
          </div>
          <div className="p-1 border rounded-circle me-1">
            <div className={`${styles.colour_circle}`} style={{ backgroundColor: '#871a24' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
