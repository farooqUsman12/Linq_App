import type { FC } from 'react';

interface Props {
  children: JSX.Element;
  parentClass?: string;
  childClass?: string;
}

const Wrapper: FC<Props> = ({ children, parentClass, childClass }) => {
  return (
    <div className={`relative mt-4 ${parentClass || ''}`}>
      <div
        // className={`after:left-[-3px] after:bottom-[-2px] after:border-b-[#e9ebec] after:border-l-[#e9ebec] dark:after:border-b-[#fff] dark:after:border-l-[#fff] after:border-t-transparent after:border-r-transparent after:content-[''] after:h-[13px] after:w-[13px] after:absolute after:border-[3px] before:right-[-2px] before:top-[-3px] before:border-b-transparent before:border-l-transparent before:border-t-[#e9ebec] dark:before:border-t-[#fff] before:border-r-[#e9ebec] dark:before:border-r-[#fff] before:content-[''] before:h-[13px] before:w-[13px] before:absolute before:border-[3px]  border border-[rgba(0, 0, 0, 0.125)] dark:border-[#fff] dark:shadow-none  rounded ${childClass||''}`}
        className={`boxShadowIdeal h-full rounded-md bg-white dark:bg-transparent ${
          childClass || ''
        }`}
      >
        {children}
      </div>
    </div>
  );
};
export default Wrapper;
