import Box from '@mui/material/Box';
import RowMain from '../UI/RowMain';
import RowTitle from '../UI/RowTitle';

const BusinessPartner = (props) => {
  const { data } = props;
  const color = '#22aade';
  const colorLight = '#77bfe7';

  return (
    <Box className="row-wrapper">
      <RowTitle color={color}>Business Partner</RowTitle>
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

export default BusinessPartner;
