const AudienceContent = () => {
  return (
    <div className="mt-2">
      <h1 className="px-9 text-center font-OutfitMedium text-themeThirtyTwo font-medium text-black md:text-themeFortySize lg:mt-12">
        Elevate your brand, <br />
        Linq Pro makes it easy.
      </h1>
      <p className="mx-auto mt-4 w-full max-w-xs px-6 text-center font-NunitoRegular text-sm text-blackGrey md:mt-6 md:max-w-xl md:px-2 md:text-xl">
        Get access to intuitive tools that make you a Pro at growing your
        audience and scaling your business.
      </p>
      <div className="mt-4 flex justify-center md:mt-6">
        <a href="https://linqapp.com/subscriptions" className="button">
          Upgrade to Pro
        </a>
      </div>
    </div>
  );
};
export default AudienceContent;
