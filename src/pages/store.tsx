import Accessories from '@/components/store/accessories';
import Banner from '@/components/store/banner';
import Cards from '@/components/store/cards';
import CollectionNav from '@/components/store/collection-nav';
import Customs from '@/components/store/customs';
import Teams from '@/components/store/linqForTeams1';
import Support from '@/components/store/support';
import { Wearables } from '@/components/store/wearables';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          canonical={AppConfig.baseUrl}
          title="Linq Store - Smart Products & Digital Business Cards"
          description="rFom cards to bracelets, Linq has all the smart products you need to send digital business cards while networking. Find the perfect Linq product for you, and get networking."
        />
      }
    >
      <Banner />
      <CollectionNav />
      <Cards />
      <Wearables />
      <Accessories />
      <Customs />
      <Teams />
      <Support />
    </Main>
  );
};

export default Index;
