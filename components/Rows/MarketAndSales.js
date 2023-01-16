import Box from '@mui/material/Box';
import RowMain from '../UI/RowMain';
import RowTitle from '../UI/RowTitle';

const MarketAndSales = (props) => {
  const { data } = props;
  const color = '#d55370';
  const colorLight = '#e18591';

  return (
    <Box className="row-wrapper">
      <RowTitle color={color}>Market / Sales</RowTitle>
      <Box className="row-main-wrapper" style={{ backgroundColor: color }}>
        {data?.map(({ apiName, apiDescription, documentNumber }) => (
          <RowMain
            key={apiName}
            subtitle={apiName}
            colorLight={colorLight}
            documentNumber={documentNumber}
          >
            {apiDescription}
          </RowMain>
        ))}
      </Box>
    </Box>
  );
};

export default MarketAndSales;
