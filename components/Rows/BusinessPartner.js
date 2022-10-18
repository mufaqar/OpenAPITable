import RowMain from '../UI/RowMain';
import RowTitle from '../UI/RowTitle';

const BusinessPartner = (props) => {
  const { data } = props;
  const color = '#22aade';
  const colorLight = '#77bfe7';

  return (
    <div className="row-wrapper">
      <RowTitle color={color}>Business Partner</RowTitle>
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

export default BusinessPartner;
