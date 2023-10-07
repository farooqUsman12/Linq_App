import Script from 'next/script';

export const KlaviyoTag = () => {
  return (
    <Script
      id="klaviyo"
      src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=VnUJAU"
      strategy="afterInteractive"
    />
  );
};
