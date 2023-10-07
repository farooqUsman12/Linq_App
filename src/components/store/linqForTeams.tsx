import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

import BackgroundLinq from '@/public/images/backgroundLIn1.png';
import IphoneIcon from '@/public/images/IphoneIcon.png';
import JaaneCard from '@/public/images/JaneCooperCard.png';
import LinqBGPhone from '@/public/images/LinqBgPhone.png';
import LinqForTeamsLogo from '@/public/images/LinqforTeamslogo.svg';

const LinqForTeams = () => {
  useEffect(() => {
    const eventListener = (className: string) => {
      const elements = document.querySelectorAll(className);
      const windowHeight = window.innerHeight;
      const elementVisible = 75;

      elements?.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        } else {
          element.classList.remove('active');
        }
      });
    };

    const handleScroll = () => {
      eventListener('.JaneCard');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="rounded-2xl px-5">
      <div
        style={{ backgroundImage: `url(${BackgroundLinq.src})` }}
        className="relative mx-auto mt-6 hidden min-h-[464px] w-full max-w-[1252px] rounded-2xl bg-cover bg-no-repeat md:block"
      >
        <div>
          <div className="relative top-48 w-2/4 pt-2">
            <div className="flex justify-center">
              <Image src={LinqForTeamsLogo} alt="linq for teams" />
            </div>
            <p className="mx-auto max-w-[225px] text-center font-OutfitRegular text-sm font-normal leading-[21px] text-white">
              Powerful sales tools that grow and scale with your team.
            </p>
            <div className="mt-4 flex justify-center">
              <Link
                href="https://buy.linqapp.com/pages/teams"
                className="flex items-center gap-2 font-NunitoSemiBold text-sm leading-[16.11px] text-primary"
              >
                Learn More
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.1327 4.37329L15.5411 9.77329L10.1327 15.1733M14.79 9.77329H3.82281"
                    stroke="#006DFF"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-2/4">
            <div>
              <Image
                src={IphoneIcon}
                alt="I-phone"
                className="w-full md:max-w-[214px] lg:max-w-[271.42px]"
              />
            </div>
            <div>
              <Image
                src={JaaneCard}
                alt="card"
                className="JaneCard absolute left-28 top-11 w-full pl-1 md:max-w-[227px] lg:max-w-[384.11px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${BackgroundLinq.src})` }}
        className="relative mx-auto mt-6 hidden min-h-[237px] w-full max-w-[655px] rounded-2xl bg-cover bg-no-repeat sm:block md:hidden"
      >
        <div>
          <div className="relative top-16 w-2/4 pt-2">
            <div className="flex justify-center">
              <Image src={LinqForTeamsLogo} alt="linq for teams" />
            </div>
            <p className="text-center text-sm font-normal leading-[21px] text-white">
              Powerful sales tools that grow and scale with your team.
            </p>
            <div className="mt-4 flex justify-center">
              <Link
                href="/"
                className="flex items-center justify-center font-NunitoSemiBold text-sm leading-[16.11px] text-primary"
              >
                Learn More
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1"
                >
                  <path
                    d="M10.1327 4.37329L15.5411 9.77329L10.1327 15.1733M14.79 9.77329H3.82281"
                    stroke="#006DFF"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-2/4">
            <div>
              <Image
                src={IphoneIcon}
                alt="I-phone"
                className="w-full max-w-[198.42px]"
              />
            </div>
            <div>
              <Image
                src={JaaneCard}
                alt="card"
                className="absolute left-28 top-11 w-full max-w-[192.11px] pl-1"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${LinqBGPhone.src})` }}
        className="relative mx-auto  mt-6 h-[450px] w-full max-w-[343px] bg-contain bg-no-repeat sm:hidden"
      >
        <div className="mx-auto w-full max-w-[181.01px] pt-[41.64px]">
          <div className="flex items-center justify-center">
            <Image src={LinqForTeamsLogo} alt="linq for teams" />
          </div>
          <p className="text-center font-NunitoRegular text-xs leading-5 text-white">
            Powerful sales tools that grow and scale with your team.
          </p>
          <Link
            href="/"
            className="flex items-center justify-center font-NunitoSemiBold text-[10px] leading-[16.11px] text-primary"
          >
            Learn More
            <svg
              width="10"
              height="10"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative ml-1"
            >
              <path
                d="M10.1327 4.37329L15.5411 9.77329L10.1327 15.1733M14.79 9.77329H3.82281"
                stroke="#006DFF"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LinqForTeams;
