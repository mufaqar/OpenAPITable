import Box from '@mui/material/Box';
import RowMain from '../UI/RowMain';
import RowTitle from '../UI/RowTitle';

const Service = (props) => {
  const { data } = props;
  const color = '#9dbd4b';
  const colorLight = '#b9ce80';

  return (
    <Box className="row-wrapper">
      <RowTitle color={color}>Service</RowTitle>
      <Box className="row-main-wrapper" style={{ backgroundColor: color }}>
        {data?.map(({ apiName, apiDescription, document_number }) => (
          <RowMain
            key={apiName}
            subtitle={apiName}
            colorLight={colorLight}
            document_number={document_number}
          >
            {apiDescription}
          </RowMain>
        ))}
      </Box>
    </Box>
  );
};

export default Service;
