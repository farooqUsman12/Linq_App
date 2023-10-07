import Accessories from '@/components/linqStore/accessories';
import BestSelling from '@/components/linqStore/bestSelling';
import CustomDesign from '@/components/linqStore/customDesign';
import Enterprise from '@/components/linqStore/enterprise';
import LinqStoreHeader from '@/components/linqStore/header';
import ProductHelp from '@/components/linqStore/help';
import LeadCapture from '@/components/linqStore/leadCapture';
import PrintShop from '@/components/linqStore/printShop';
import ProductCategories from '@/components/linqStore/productCategories';
import StandOut from '@/components/linqStore/standOut';
import WhyLinq from '@/components/linqStore/whyLinq';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const LinqStore = () => {
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
      <div className="">
        <LinqStoreHeader />
        <ProductCategories />
        <BestSelling />
        <StandOut />
        <WhyLinq />
        <CustomDesign />
        <ProductHelp />
        <LeadCapture />
        <Enterprise />
        <Accessories />
        <PrintShop />
      </div>
    </Main>
  );
};

export default LinqStore;
