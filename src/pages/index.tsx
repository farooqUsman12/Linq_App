import BusinessRelation from '@/components/businessRelation';
import BookADemo from '@/components/common/BookADemo';
import CompareFeaturesButton from '@/components/compareFeatures';
import FAQ from '@/components/faq';
import AdvanceFeatures from '@/components/featuresBreakdown';
import FeatureButtons from '@/components/featuresBreakdown/featureButtons';
import PricingPlans from '@/components/pricingPlans';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          canonical={AppConfig.baseUrl}
          title="Linq"
          description="Linq Description."
        />
      }
    >
      <div className="mx-auto mt-14 w-full lg:max-w-7xl">
        <PricingPlans />
        <CompareFeaturesButton />
        <BookADemo />
        <BusinessRelation />
        <AdvanceFeatures />
        <FeatureButtons />
        <BookADemo />
        <FAQ />
      </div>
    </Main>
  );
};

export default Index;
