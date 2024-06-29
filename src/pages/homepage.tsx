// components
import PageLayout from '../components/layouts/page-layout';
import Recommendations from '../components/recommendations/recommendations';

const Homepage = () => {
  return (
    <PageLayout>
      <div className="homepage">
        <Recommendations />
      </div>
    </PageLayout>
  );
};

export default Homepage;
