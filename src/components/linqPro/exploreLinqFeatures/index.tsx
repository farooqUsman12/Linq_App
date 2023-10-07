import Image from 'next/image';
import { useState } from 'react';

import useEventListener from '@/utils/eventListener';

import Capture from '../../../../public/images/capture.svg';
import Capture2 from '../../../../public/images/capture2.svg';
import Highly from '../../../../public/images/highly.svg';
import Highly2 from '../../../../public/images/highly2.svg';
import Visitor from '../../../../public/images/visitor.svg';
import Visitor2 from '../../../../public/images/visitor2.svg';
import ExploreLiqContent from './exploreLinqContent';
import CaptureContact from './featureTabs/captureContent';
import HighlyCustomize from './featureTabs/highlyCustomize';
import VisitorAnalytic from './featureTabs/visitorAnalytics';

interface ActiveTab {
  [key: string]: JSX.Element;
  Customization: JSX.Element;
  'Capture Contacts': JSX.Element;
  'Advanced Analytics': JSX.Element;
}

const tabs = [
  {
    name: 'Customization',
    src: Highly2,
    alt: 'Customize',
    activeSrc: Highly,
  },
  {
    name: 'Capture Contacts',
    src: Capture,
    alt: 'Capture',
    activeSrc: Capture2,
  },
  {
    name: 'Advanced Analytics',
    src: Visitor,
    alt: 'Capture',
    activeSrc: Visitor2,
  },
];

const activeTabData: ActiveTab = {
  Customization: <HighlyCustomize />,
  'Capture Contacts': <CaptureContact />,
  'Advanced Analytics': <VisitorAnalytic />,
};

const ExploreLiqFeatures = () => {
  useEventListener('.BottomAnimation');

  const [activeTab, setActiveTab] = useState<string>('Customization');

  return (
    <div className="mx-auto -mt-[4.313rem] w-full bg-darkBlue pb-12 pt-24 md:max-w-oneHundredFourtyFour md:rounded-3xl">
      <ExploreLiqContent />

      <div className="slideNavigation BottomAnimation mx-auto mt-0.5 flex w-full max-w-threeHundredThirteen flex-col rounded-2xl bg-lightBlue p-1 md:max-w-fiveFiftyOne md:flex-row md:pb-[0.438rem] md:pt-1.5">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`list md:items-normal md:leading-0 z-50 mb-0.5 flex h-[50px] items-center justify-center font-NunitoBold text-sm leading-normal sm:h-14 md:mb-0 md:pb-0 ${
              activeTab === tab.name
                ? ' active flex w-full justify-center rounded-2xl text-blackNormal md:ml-1 md:max-w-oneNintySeven md:px-1.5 '
                : 'pt-0 text-darkGray md:mx-5'
            }`}
            type="button"
            onClick={() => setActiveTab(tab.name)}
          >
            <div>
              {activeTab === tab.name ? (
                <Image
                  src={tab.activeSrc}
                  className="mr-1.5 w-full max-w-twentyFour"
                  alt={tab.alt}
                />
              ) : (
                <Image
                  src={tab.src}
                  className="mr-1.5 w-full max-w-twentyFour"
                  alt={tab.alt}
                />
              )}
            </div>

            {tab.name}
          </button>
        ))}
        <div className="indicator" />
      </div>

      {activeTabData[activeTab]}
    </div>
  );
};

export default ExploreLiqFeatures;
