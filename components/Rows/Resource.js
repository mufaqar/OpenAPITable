import Box from '@mui/material/Box';
import RowMain from '../UI/RowMain';
import RowTitle from '../UI/RowTitle';

const Resource = (props) => {
  const { data } = props;
  const color = '#addfe9';
  const colorLight = '#c5e8ef';

  return (
    <Box className="row-wrapper">
      <RowTitle color={color}>Resource</RowTitle>
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

export default Resource;
