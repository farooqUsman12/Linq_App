import Image from 'next/image';

import iPhone1 from '../../../../public/images/iPhone1.png';
import Linq1 from '../../../../public/images/linq1.svg';
import Linq2 from '../../../../public/images/linq2.svg';

const AudienceMedia = () => {
  return (
    <div className="mt-9 flex justify-center">
      <div>
        <Image
          src={Linq1}
          className="fadeInLeftAudience relative left-7 z-20"
          alt="linq"
        />
      </div>
      <div>
        <Image
          src={iPhone1}
          className="fadeInBottomAudience mt-4 pt-0.5"
          alt="iphone"
        />
      </div>
      <div>
        <Image
          src={Linq2}
          className="fadeInRightAudience relative right-7 mt-20 pt-3"
          alt="linq 2"
        />
      </div>
    </div>
  );
};
export default AudienceMedia;
