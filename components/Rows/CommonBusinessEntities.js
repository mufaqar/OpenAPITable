import Box from '@mui/material/Box';
import RowMain from '../UI/RowMain';
import RowTitle from '../UI/RowTitle';

const CommonBusinessEntities = (props) => {
  const { data } = props;
  const color = '#d34f9c';
  const colorLight = '#de85b7';

  return (
    <Box className="row-wrapper">
      <RowTitle color={color}>Common Business Entities</RowTitle>
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

export default CommonBusinessEntities;
