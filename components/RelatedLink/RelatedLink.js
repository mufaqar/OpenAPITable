import { useState, useEffect } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { fetchRelatedContent } from '../../services/relatedContent/api';
import { displayDateAndAuthor, settings } from './consts';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import VideocamIcon from '@mui/icons-material/Videocam';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Skeleton from '@mui/material/Skeleton';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RelatedLink = () => {
  const [relatedContentData, setRelatedContentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState('');
  const filterButtons = [
    {
      name: '',
      icon: <AcUnitIcon sx={{ color: 'white' }} fontSize={'large'} />,
    },
    {
      name: 'Article',
      icon: <InsertDriveFileIcon sx={{ color: 'white' }} fontSize={'large'} />,
    },
    {
      name: 'Video',
      icon: <VideocamIcon sx={{ color: 'white' }} fontSize={'large'} />,
    },
    {
      name: 'Webinar',
      icon: <VolumeUpIcon sx={{ color: 'white' }} fontSize={'large'} />,
    },
  ];

  const handleCategoryChange = async (name) => {
    setIsLoading(true);
    setCategory(name);
    try {
      const { results } = await fetchRelatedContent(name);
      setRelatedContentData(results);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { results } = await fetchRelatedContent();
        setRelatedContentData(results);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#0D2548',
        height: '550px',
        width: '100%',
      }}
    >
      <Box
        sx={{
          width: 600,
          backgroundColor: '#1d52a2',
          margin: '0 auto',
          padding: '10px',
          borderRadius: '6px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            backgroundColor: '#3577DA',
            padding: '5px',
            width: '270px',
            borderRadius: '6px',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textTransform: 'uppercase',
              color: 'white',
              letterSpacing: 1,
            }}
          >
            Related Content
          </Typography>
          <AllInclusiveIcon
            sx={{ color: 'white', transform: 'rotate(-45deg)' }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: '350px',
          margin: '0 auto',
          marginTop: '50px',
          height: '50px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {filterButtons.map(({ name, icon }) => (
          <Button
            key={name}
            name={name}
            variant={category === name ? 'contained' : 'outlined'}
            onClick={() => handleCategoryChange(name)}
            sx={{
              borderRadius: '50%',
              padding: 0,
              width: 58,
              height: 58,
              border: '2px solid #1D52A2',
            }}
          >
            {icon}
          </Button>
        ))}
      </Box>
      <Box
        sx={{
          maxWidth: '1550px',
          margin: '0 auto',
          marginTop: '50px',
        }}
      >
        <Slider {...settings}>
          {relatedContentData.map((post, i) =>
            !isLoading ? (
              <article>
                <Box key={i} sx={{ maxWidth: '280px' }}>
                  <Link href={post.full_url}>
                    <Image
                      src={post.thumbnail_url}
                      alt={post.title}
                      width={280}
                      height={157}
                      style={{ objectFit: 'cover' }}
                    />
                  </Link>
                  <Typography color="white">{post.content_type}</Typography>
                  <Typography color="white">{post.title}</Typography>
                  <Typography color="gray">
                    {displayDateAndAuthor(post.first_published, post.authors)}
                  </Typography>
                </Box>
              </article>
            ) : (
              <Box key={i} sx={{ maxWidth: '280px' }}>
                <Skeleton variant="rectangular" width={280} height={157} />
                <Skeleton width={100} />
                <Skeleton width={280} />
                <Skeleton width={140} />
                <Skeleton width={210} />
              </Box>
            )
          )}
        </Slider>
      </Box>
    </Box>
  );
};

export default RelatedLink;
