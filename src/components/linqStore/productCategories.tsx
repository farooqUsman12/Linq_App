import type { FC } from 'react';

import ProductsSlider from '../store/collection-nav';

const ProductCategories: FC = () => {
  return (
    <div className="mt-10 ml-auto max-w-[1575px]">
      <ProductsSlider />
    </div>
  );
};
export default ProductCategories;
