import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Map = () => {
  return (
    <Box className="wrapper">
      <Box className="map">
        <Box className="map__market">
          <Typography variant="h5">Market / Sales</Typography>
        </Box>
        <Box className="map__customer">
          <Typography variant="h5">Customer</Typography>
        </Box>
        <Box className="map__product">
          <Typography variant="h5">Product</Typography>
        </Box>
        <Box className="map__service">
          <Typography variant="h5">Serivce</Typography>
        </Box>
        <Box className="map__resource">
          <Typography variant="h5">Resource</Typography>
        </Box>
        <Box className="map__business">
          <Typography variant="h5">Business Partner</Typography>
        </Box>
        <Box className="map__common">
          <Typography sx={{ textAlign: 'center' }} variant="h5">
            Common Business Entities
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Map;
