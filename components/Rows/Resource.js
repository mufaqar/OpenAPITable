import RowMain from '../UI/RowMain';
import RowTitle from '../UI/RowTitle';

const Resource = (props) => {
  const { data } = props;
  const color = '#addfe9';
  const colorLight = '#c5e8ef';

  return (
    <div className="row-wrapper">
      <RowTitle color={color}>Resource</RowTitle>
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

export default Resource;
