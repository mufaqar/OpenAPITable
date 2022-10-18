import RowMain from '../UI/RowMain';
import RowTitle from '../UI/RowTitle';

const Customer = (props) => {
  const { data } = props;
  const color = '#f0dc35';
  const colorLight = '#f6e57d';

  return (
    <div className="row-wrapper">
      <RowTitle color={color}>Customer</RowTitle>
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

export default Customer;
