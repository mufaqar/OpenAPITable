import RowMain from '../UI/RowMain';
import RowTitle from '../UI/RowTitle';

const Product = (props) => {
  const { data } = props;
  const color = '#dd6b32';
  const colorLight = '#e89365';

  return (
    <div className="row-wrapper">
      <RowTitle color={color}>Product</RowTitle>
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

export default Product;
