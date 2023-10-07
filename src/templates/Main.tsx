import * as amplitude from '@amplitude/analytics-node';
import { track } from '@amplitude/analytics-node';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

import { Footer } from '@/layouts/Footer';
import { Header } from '@/layouts/Header';
import { FBPixel } from '@/lib/facebook-pixel';
import { GTag } from '@/lib/g-tag';
import { KlaviyoTag } from '@/lib/klaviyo-tag';
import { LinkedinTag } from '@/lib/linkedin-tag';
import { OptimizeTag } from '@/lib/optimize-tag';
import { TripleWhaleTag } from '@/lib/triple-whale-tag';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

amplitude.init('dc20dd174cb901911c996e4c8c5c6bbc');

const Main = (props: IMainProps) => {
  useEffect(() => {
    track('Page viewed', { page: window.location.pathname });
  }, []);

  return (
    <div>
      {props.meta}
      <GTag />
      <TripleWhaleTag />
      {/* <ClearbitTag /> */}
      <LinkedinTag />
      <KlaviyoTag />
      <OptimizeTag />
      <FBPixel />
      <div className={clsx('px-5 md:px-10 lg:mx-24')}>
        <Header />
      </div>
      <main className="mt-[70px]">{props.children}</main>
      <Footer />
    </div>
  );
};

export { Main };
