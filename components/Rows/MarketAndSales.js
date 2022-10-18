import RowMain from '../UI/RowMain';
import RowTitle from '../UI/RowTitle';

const MarketAndSales = (props) => {
  const { data } = props;
  const color = '#d55370';
  const colorLight = '#e18591';

  return (
    <div className="row-wrapper">
      <RowTitle color={color}>Market / Sales</RowTitle>
      <div className="row-main-wrapper" style={{ backgroundColor: color }}>
        {data?.map(({ apiName, apiDescription }) => (
          <RowMain key={apiName} subtitle={apiName} colorLight={colorLight}>
            {apiDescription}
          </RowMain>
        ))}
      </div>
    </div>
  );
};

export default MarketAndSales;
