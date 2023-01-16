import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';

const RowMain = (props) => {
  const { subtitle, children, colorLight, documentNumber } = props;
  const images = [
    {
      src: 'https://projects.tmforum.org/wiki/download/thumbnails/84575796/swaggerGreenApache.png',
      width: 40,
      height: 48.8,
      alt: 'Swagger',
    },
    {
      src: 'https://projects.tmforum.org/wiki/download/thumbnails/84575796/PDFRound.png?version=1&modificationDate=1503057309000&api=v2',
      width: 40,
      height: 40,
      alt: 'API User Guide',
    },
    {
      src: 'https://projects.tmforum.org/wiki/download/thumbnails/84575796/Conformance%20spec%20icon.png?version=1&modificationDate=1503057313000&api=v2',
      width: 40,
      height: 40,
      alt: 'Conformance Profile',
    },
    {
      src: 'https://projects.tmforum.org/wiki/download/thumbnails/84575796/ctkRand.png?version=1&modificationDate=1625085960000&api=v2',
      width: 40,
      height: 49,
      alt: 'CTK',
    },
    {
      src: 'https://projects.tmforum.org/wiki/download/thumbnails/84575796/ReferenceImplementationCodeRand.png?version=1&modificationDate=1625085960000&api=v2',
      width: 40,
      height: 49,
      alt: 'Sample Implementation Code',
    },
  ];
  return (
    <Box className="row-main" style={{ backgroundColor: colorLight }}>
      <Box className="row-main__wrapper">
        <Link href={`apis/${documentNumber}`}>
          <Box sx={{ cursor: 'pointer' }}>
            <h3 style={{ paddingBottom: '0.5rem' }}>
              {documentNumber} {subtitle}
            </h3>
            <Box
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                lineHeight: 1.4,
                marginBottom: '1rem',
              }}
            >
              {children}
            </Box>
          </Box>
        </Link>
        <Box className="row-main__images">
          {images.map(({ src, width, height, alt }) => (
            <Image
              src={src}
              width={width}
              height={height}
              alt={alt}
              key={alt}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default RowMain;
