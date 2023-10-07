import clsx from 'clsx';

import { Meta } from '@/layouts/Meta';
import { Saasquatch } from '@/lib/saasquatch-tag';
import { TestHubspotForm } from '@/lib/test-hubspot-form-tag';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const LinqForTeamsReferral = () => (
  <Main
    meta={
      <Meta
        title="Linq for Teams Referral"
        description="Try out Linq for Teams."
        canonical={`${AppConfig.baseUrl}/linqforteams-referral`}
      />
    }
  >
    <Saasquatch />
    <div className={clsx('max-w-screen-xl', 'mx-auto')}>
      <div className={clsx('w-9/12', 'mx-auto', 'mb-24')}>
        <div className={clsx(' text-4xl font-bold', 'mb-5')}>
          You have been referred to try out Linq for Teams by a friend!
        </div>
        <p className={clsx(' text-2xl')}>
          Linq Pro gives you access to advanced features, like embedding videos
          + music, forms, calendar integrations, and more.
        </p>
        <div className={clsx(' mt-10 text-2xl')}>
          <a
            href={`${AppConfig.marketingUrl}/pages/teams#linq-form`}
            className="background-transparent mb-1 mr-1 px-6 py-2 text-lg font-bold uppercase text-blue-500 outline transition-all duration-150 ease-linear"
            type="button"
          >
            Book a Demo
          </a>
          <TestHubspotForm />
        </div>
      </div>
    </div>
  </Main>
);
export default LinqForTeamsReferral;
