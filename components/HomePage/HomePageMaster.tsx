import useFeaturedCollections from '../../hooks/HomePageHooks/useFeaturedCollections';
import Slider from './FeaturedCollection/FeaturedCollection';
import FeaturedCollection from './FeaturedCollection/FeaturedCollection';

function HomePageMaster() {
  const { allTagsData, fetchDisplayTagsDataFunction, isLoading, errorMessage } = useFeaturedCollections();
  return (
    <>
      <FeaturedCollection allTagsData={allTagsData} />
      {/* <Slider /> */}
    </>
  );
}

export default HomePageMaster;
