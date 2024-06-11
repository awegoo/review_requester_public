import React from 'react';

const CustomBarShape = (props) => {
  const { fill, x, y, width, height } = props;
  const radius = 10;

  return (
    <g>
    <path
      d={`
        M${x},${y + height}
        h${width}
        v-${height - radius}
        a${radius},${radius} 0 0 0 -${radius},-${radius}
        h-${width - 2 * radius}
        a${radius},${radius} 0 0 0 -${radius},${radius}
        z
      `}
      fill={fill}
    />
  </g>
  );
};

export default CustomBarShape;