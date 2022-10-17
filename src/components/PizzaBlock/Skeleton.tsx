import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="134" cy="136" r="125" />
    <rect x="0" y="269" rx="11" ry="11" width="280" height="25" />
    <rect x="0" y="310" rx="10" ry="10" width="280" height="88" />
    <rect x="127" y="406" rx="20" ry="20" width="152" height="45" />
    <rect x="0" y="413" rx="16" ry="16" width="95" height="30" />
  </ContentLoader>
);

export default Skeleton;
