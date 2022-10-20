import Box from '@mui/material/Box';
import RowMain from '../UI/RowMain';
import RowTitle from '../UI/RowTitle';

const Customer = (props) => {
  const { data } = props;
  const color = '#f0dc35';
  const colorLight = '#f6e57d';

  return (
    <Box className="row-wrapper">
      <RowTitle color={color}>Customer</RowTitle>
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

export default Customer;
