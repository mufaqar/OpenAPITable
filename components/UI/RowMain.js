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
    <Link href={`apis/${documentNumber}`}>
      <div className="row-main" style={{ backgroundColor: colorLight }}>
        <div className="row-main__wrapper">
          <div>
            <h3 style={{ paddingBottom: '0.5rem' }}>
              {documentNumber} {subtitle}
            </h3>
            <div
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                lineHeight: 1.4,
                marginBottom: '1rem',
              }}
            >
              {children}
            </div>
          </div>
          <div className="row-main__images">
            {images.map(({ src, width, height, alt }) => (
              <Image
                src={src}
                width={width}
                height={height}
                alt={alt}
                key={alt}
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RowMain;
