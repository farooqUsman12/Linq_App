import type { FC } from 'react';

import {
  AdminManagementData,
  AdvanceFeaturesData,
  AnalyticsData,
  BrandedExperienceData,
  CapturedContactData,
  CRMIntegrationsData,
  CustomerServiceData,
  CustomizedPageData,
  DirectorySyncData,
  ManagedContactsData,
  NurtureContactsData,
  SecurityData,
  SharedLinqData,
  SingleSignOnData,
} from './featuresData';
import FeatureTable from './featureTable';

const AllFeatures = [
  AdvanceFeaturesData,
  BrandedExperienceData,
  CustomizedPageData,
  SharedLinqData,
  CapturedContactData,
  ManagedContactsData,
  NurtureContactsData,
  CRMIntegrationsData,
  AnalyticsData,
  SecurityData,
  AdminManagementData,
  CustomerServiceData,
  DirectorySyncData,
  SingleSignOnData,
];
const FeaturesBreakdown: FC = () => {
  return (
    <div>
      <div className="my-20 flex items-center justify-center px-5 text-center font-OutfitMedium text-thirtyTwoThemeSize font-medium sm:text-fortyThemeSize">
        <h1>Let us break it down for you</h1>
      </div>
      <div className="mx-auto max-w-7xl overflow-hidden">
        {AllFeatures.map((table) => (
          <div className="mb-16" key={table.heading}>
            <FeatureTable data={table} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesBreakdown;
