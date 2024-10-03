import { useSelector } from 'react-redux';
import useAddToCartHook from '../../../hooks/CartPageHook/useAddToCart';
import useFeaturedCollections from '../../../hooks/HomePageHooks/useFeaturedCollections';
import FeaturedCollection from './FeaturedCollection';
import FeaturedCollectionLoading from './FeaturedCollectionLoading';
import { selectWishlist } from '../../../store/slices/wishlist-slices/wishlist-local-slice';

function FeaturedCollectionMaster() {
  const { allTagsData, isLoading, errorMessage } = useFeaturedCollections();
  const { addToCartItem, getPartyName } = useAddToCartHook();
  const wishlistData = useSelector(selectWishlist).items;

  if (isLoading) {
    return <FeaturedCollectionLoading />;
  } else if (allTagsData?.length > 0) {
    return (
      <FeaturedCollection allTagsData={allTagsData} addToCartItem={addToCartItem} getPartyName={getPartyName} wishlistData={wishlistData} />
    );
  } else if (errorMessage) {
    return (
      <div className="p-3 d-flex justify-content-center align-items-center" style={{ fontSize: '40px' }}>
        {/* <Image src={ErrorImage} width={250} height={250} alt="Error Image" /> */}
        {errorMessage}
      </div>
    );
  } else {
    return <></>;
  }
}

export default FeaturedCollectionMaster;
