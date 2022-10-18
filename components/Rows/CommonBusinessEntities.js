import RowMain from '../UI/RowMain';
import RowTitle from '../UI/RowTitle';

const CommonBusinessEntities = (props) => {
  const { data } = props;
  const color = '#d34f9c';
  const colorLight = '#de85b7';

  return (
    <div className="row-wrapper">
      <RowTitle color={color}>Common Business Entities</RowTitle>
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

export default CommonBusinessEntities;
