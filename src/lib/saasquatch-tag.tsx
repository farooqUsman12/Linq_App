import Script from 'next/script';

export const Saasquatch = () => {
  return (
    <Script id="saasquatch" strategy="afterInteractive">
      {`
          !function(a,b){a("squatch","https://fast.ssqt.io/squatch-js@2",b)}(function(a,b,c){var d,e,f;c["_"+a]={},c[a]={},c[a].ready=function(b){c["_" + a].ready =  c["_" + a].ready || [];c["_" + a].ready.push(b);},e=document.createElement("script"),e.async=1,e.src=b,f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(e,f)},this);
        `}
    </Script>
  );
};
