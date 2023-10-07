import Image from 'next/image';
import type { FC } from 'react';

import {
  useIsMobileViewport,
  useIsTabletViewport,
} from '@/hooks/use-is-mobile-viewport';

import type { AdvanceFeaturesSchema } from './featuresData';

interface Props {
  data: AdvanceFeaturesSchema;
}

interface ITableCellData {
  data: string;
}

const TableCellData = ({ data }: ITableCellData) => {
  return typeof data === 'string' ? (
    <td className="w-[134px] text-center">{data}</td>
  ) : (
    <td className="w-[134px]">
      <Image className="mx-auto" src={data} alt="standard" />
    </td>
  );
};

const FeatureTable: FC<Props> = ({ data }) => {
  const isMobile = useIsMobileViewport();
  const isTablet = useIsTabletViewport();

  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="text-left text-base font-medium lg:text-xl">
            <th className="ml-4 px-4 pb-4 text-black">{data.heading}</th>
            <th className="pb-4 text-center text-[#161B2D]">Standard</th>
            <th className="pb-4 text-center text-[#5282FF]">Pro</th>
            {!isMobile ? (
              <th className="pb-4 text-center text-[#005CD9]">Teams</th>
            ) : null}
            {!isTablet && !isMobile ? (
              <th className="pb-4 text-center text-[#9600ED]">Enterprise</th>
            ) : null}
          </tr>
        </thead>
        <tbody className="table-body">
          {data.tableData.map((rowData) => {
            const { mainText, standard, pro, team, enterprise } = rowData || {};
            return (
              <tr
                key={mainText}
                className="h-[42px] text-xs font-normal md:text-sm lg:text-base"
              >
                <td className="px-4 lg:px-10">{mainText}</td>
                <TableCellData data={standard} />
                <TableCellData data={pro} />
                {!isMobile ? <TableCellData data={team} /> : null}
                {!isTablet && !isMobile ? (
                  <TableCellData data={enterprise} />
                ) : null}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FeatureTable;
