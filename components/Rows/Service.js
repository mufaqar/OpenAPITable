import RowMain from '../UI/RowMain';
import RowTitle from '../UI/RowTitle';

const Service = (props) => {
  const { data } = props;
  const color = '#9dbd4b';
  const colorLight = '#b9ce80';

  return (
    <div className="row-wrapper">
      <RowTitle color={color}>Service</RowTitle>
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

export default Service;
