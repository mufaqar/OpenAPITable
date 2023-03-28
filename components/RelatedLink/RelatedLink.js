import { useState, useEffect } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { fetchRelatedContent } from '../../services/relatedContent/api';
import { displayDateAndAuthor, settings } from './consts';
import Skeleton from '@mui/material/Skeleton';
import { gothamFont } from '../../helpers/gothamFont';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RelatedLink = () => {
  const [relatedContentData, setRelatedContentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState('');

  const filterButtons = [
    {
      name: '',
      src: '/oda/open-apis/table/images/relatedLink/all.svg',
      backgroundColor: '#3577DA',
      borderColor: '#1D52A2',
    },
    {
      name: 'Article',
      src: '/oda/open-apis/table/images/relatedLink/article.svg',
      backgroundColor: '#B71A5D',
      borderColor: '#5C0E2F',
    },
    {
      name: 'Video',
      src: '/oda/open-apis/table/images/relatedLink/video.svg',
      backgroundColor: '#B32EB6',
      borderColor: '#7A1D7C',
    },
    {
      name: 'Webinar',
      src: '/oda/open-apis/table/images/relatedLink/webinar.svg',
      backgroundColor: '#98BD29',
      borderColor: '#657E1B',
    },
  ];

  const getImagePath = (content_type) => {
    const found = filterButtons.find(({ name }) => name === content_type);
    return found ? found.src : '/images/relatedLink/article.svg';
  };

  const handleCategoryChange = async (name) => {
    setCategory(name);
    setIsLoading(true);
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
    <Box className="related-link">
      <Box className="related-link__title">
        <Box className="related-link__title__inside">
          <h1 className={gothamFont.className}>Related Content</h1>
          <Image
            src="/oda/open-apis/table/images/relatedLink/title.svg"
            alt="icon"
            width={24}
            height={24}
          />
        </Box>
      </Box>
      <Box className="related-link__icons">
        {filterButtons.map(({ name, src, borderColor, backgroundColor }) => (
          <Box
            key={name}
            name={name}
            onClick={() => handleCategoryChange(name)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              width: 50,
              height: 50,
              backgroundColor: category === name && backgroundColor,
              border: `3px solid ${borderColor}`,
              cursor: 'pointer',
            }}
          >
            <Image src={src} alt="icon" width={24} height={24} />
          </Box>
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
              <article key={i}>
                <Box sx={{ maxWidth: '280px' }}>
                  <Box
                    sx={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: '#B71A5D',
                      position: 'absolute',
                      boxShadow: '0px 0px 24px -4px rgba(0, 0, 0, 0.25)',
                      borderRadius: '0px 0px 16px 0px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Image
                      src={getImagePath(post.content_type)}
                      alt="icon"
                      width={20}
                      height={20}
                    />
                  </Box>
                  <Link href={post.full_url}>
                    <Image
                      src={post.thumbnail_url}
                      alt={post.title}
                      width={280}
                      height={157}
                      style={{ objectFit: 'cover' }}
                    />
                  </Link>
                  <Box sx={{ marginTop: '0.5rem' }}>
                    <Typography color="white">
                      <span
                        style={{
                          fontStyle: 'normal',
                          fontWeight: 500,
                          fontSize: '12px',
                          lineHeight: '140%',
                          textTransform: 'uppercase',
                        }}
                      >
                        {post.content_type}
                      </span>
                      {' | '}
                      <span
                        className={gothamFont.className}
                        style={{
                          fontStyle: 'normal',
                          fontWeight: 600,
                          fontSize: '12px',
                          lineHeight: '140%',
                          textTransform: 'uppercase',
                          color: '#B71A5D',
                        }}
                      >
                        {post.topics[0]?.topic_name}
                      </span>
                      {post.topics[1]?.topic_name && ' | '}
                      <span
                        className={gothamFont.className}
                        style={{
                          fontStyle: 'normal',
                          fontWeight: 600,
                          fontSize: '12px',
                          lineHeight: '140%',
                          textTransform: 'uppercase',
                          color: '#B71A5D',
                        }}
                      >
                        {post.topics[1]?.topic_name}
                      </span>
                    </Typography>
                  </Box>
                  <Link href={post.full_url}>
                    <Typography
                      color="white"
                      className={gothamFont.className}
                      sx={{
                        fontStyle: 'notmal',
                        fontWeight: 800,
                        fontSize: '20px',
                        lineHeight: '125%',
                        marginTop: '7px',
                      }}
                    >
                      {post.title}
                    </Typography>
                  </Link>
                  <Typography
                    color="gray"
                    className={gothamFont.className}
                    sx={{ marginTop: '7px' }}
                  >
                    {displayDateAndAuthor(post.first_published, post.authors)}
                  </Typography>
                </Box>
              </article>
            ) : (
              <Box key={i} sx={{ maxWidth: '280px' }}>
                <Skeleton variant="rectangular" width={280} height={157} />
                <Skeleton width={260} />
                <Skeleton width={140} />
                <Skeleton width={280} />
                <Skeleton width={210} />
                <Skeleton width={140} />
              </Box>
            )
          )}
        </Slider>
      </Box>
    </Box>
  );
};

export default RelatedLink;
