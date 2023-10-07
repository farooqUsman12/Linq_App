import Script from 'next/script';

export const OptimizeTag = () => {
  return (
    <Script
      id="optimize"
      src="https://www.googleoptimize.com/optimize.js?id=OPT-NQ2F98W"
      strategy="afterInteractive"
    />
  );
};
