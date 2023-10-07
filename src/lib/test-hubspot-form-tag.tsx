import Script from 'next/script';

export const TestHubspotForm = () => {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        type="text/javascript"
        src="https://js.hsforms.net/forms/embed/v2.js"
      />
      <Script strategy="afterInteractive" id="hubspot-test-form">
        {`
          // hbspt.forms.create({
          //   region: "na1",
          //   portalId: "7918833",
          //   formId: "d7b1f121-3181-41c5-a72a-44bfb29281e9",
          //   target: "#hubspot-test-form"
          // });

          // 1. When squatch.js is ready, run the following function.
          squatch.ready(function () {
          // 2. Configure squatch.js for the tenant you are using.
          squatch.init({
            // Your tenant alias can be found at https://app.referralsaasquatch.com/portal/p/6467b42118b6790bc82784da/t/test/general
            tenantAlias: 'test_adx0xdzq8nee0', 
          });

          // 3. Load your HubSpot form
          //  To fill in the region, portalId and formId use the following steps
          //      3a. Navigate to the form editor in HubSpot
          //      3b. Click the Embed button in the top right
          //      3c. Copy and paste the region, portalId and formId into this code
          hbspt.forms.create({
            region: "na1",
            portalId: "7918833",
            formId: "d7b1f121-3181-41c5-a72a-44bfb29281e9",
            target: "#hubspot-test-form",

            // 4. Add a function to run when the form is loaded
            onReady: ($form) => {

              // 5. Make the request to retrieve referral information from the dropped cookie
              //  Cookies are dropped after a user clicks on a sharelink
              //  This cookie includes important referral information such as the referrer's referral code
              //  To read more on our referral cookies see https://docs.saasquatch.com/developer/squatchjs/cookies/
              squatch
              .api()
              .squatchReferralCookie()
              .then(function (response) {

                // 6. Retrieve the form field you want to autofill the referral cookie into
                const referralCookieField = Array.from($form).find(
                  (input) => input.name === "ssqt_referralcookies"
                );

                // 7. Set the value of the form field to be the participants referral cookie
                referralCookieField.value = response.encodedCookie;
              });
            },
          });
        });
        `}
      </Script>
      <div className="mt-10" id="hubspot-test-form" />
    </>
  );
};
