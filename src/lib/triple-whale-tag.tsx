import Script from 'next/script';

export const TripleWhaleTag = () => {
  // @ts-ignore
  return (
    <>
      <link
        rel="preconnect dns-prefetch"
        href="https://api.config-security.com/"
      />
      <link
        rel="preconnect dns-prefetch"
        href="https://conf.config-security.com/"
      />
      <link
        rel="preconnect dns-prefetch"
        href="https://triplewhale-pixel.web.app/"
      />

      <Script id="triple-whale-tag" strategy="afterInteractive">
        {`
          var TripleHeadless = "linqapp.myshopify.com";
          window.TriplePixelData={TripleName:"linqapp.myshopify.com",ver:"1.9.0"},function(W,H,A,L,E,_,B,N){function O(U,T,P,H,R){void 0===R&&(R=!1),H=new XMLHttpRequest,P?(H.open("POST",U,!0),H.setRequestHeader("Content-Type","application/json")):H.open("GET",U,!0),H.send(JSON.stringify(P||{})),H.onreadystatechange=function(){4===H.readyState&&200===H.status?(R=H.responseText,U.includes(".txt")?eval(R):P||(N[B]=R)):(299<H.status||H.status<200)&&T&&!R&&(R=!0,O(U,T-1))}}if(N=window,!N[H+"sn"]){N[H+"sn"]=1;try{A.setItem(H,1+(0|A.getItem(H)||0)),(E=JSON.parse(A.getItem(H+"U")||"[]")).push(location.href),A.setItem(H+"U",JSON.stringify(E))}catch(e){}var i,m,p;A.getItem('"!nC\`')||(_=A,A=N,A[H]||(L=function(){return Date.now().toString(36)+"_"+Math.random().toString(36)},E=A[H]=function(t,e){return"State"==t?E.s:(W=L(),(E._q=E._q||[]).push([W,t,e]),W)},E.s="Installed",E._q=[],E.ch=W,B="configSecurityConfModel",N[B]=1,O("//conf.config-security.com/model",5),i=L(),m=A[atob("c2NyZWVu")],_.setItem("di_pmt_wt",i),p={id:i,action:"profile",avatar:_.getItem("auth-security_rand_salt_"),time:m[atob("d2lkdGg=")]+":"+m[atob("aGVpZ2h0")],host:A.TriplePixelData.TripleName,url:window.location.href,ref:document.referrer,ver:window.TriplePixelData.ver},O("//api.config-security.com/",5,p),O("//triplewhale-pixel.web.app/dot1.9.txt",5)))}}("","TriplePixel",localStorage);
        `}
      </Script>
    </>
  );
};
