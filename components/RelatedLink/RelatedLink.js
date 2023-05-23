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
import moment from 'moment';
import { Tooltip } from '@mui/material';

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
      hoverColor: '#1D52A2',
      hoverBorder: '#2A5FAE',
    },
    {
      name: 'Article',
      src: '/oda/open-apis/table/images/relatedLink/article.svg',
      backgroundColor: '#B71A5D',
      borderColor: '#5C0E2F',
      hoverColor: '#5C0E2F',
      hoverBorder: '#4A0C26',
    },
    {
      name: 'Video',
      src: '/oda/open-apis/table/images/relatedLink/video.svg',
      backgroundColor: '#B32EB6',
      borderColor: '#7A1D7C',
      hoverColor: '#7A1D7C',
      hoverBorder: '#8F2592',
    },
    {
      name: 'Webinar',
      src: '/oda/open-apis/table/images/relatedLink/webinar.svg',
      backgroundColor: '#98BD29',
      borderColor: '#657E1B',
      hoverColor: '#657E1B',
      hoverBorder: '#789B21',
    },
  ];

  const getImagePath = (content_type) => {
    const found = filterButtons.find(({ name }) => name === content_type);
    return found
      ? found.src
      : '/oda/open-apis/table/images/relatedLink/article.svg';
  };

  const getBackgroundColor = (content_type) => {
    const found = filterButtons.find(({ name }) => name === content_type);

    return found ? found.backgroundColor : '#B71A5D';
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
        {filterButtons.map(
          ({
            name,
            src,
            borderColor,
            backgroundColor,
            hoverColor,
            hoverBorder,
          }) => (
            <Tooltip
              key={name}
              title={!name && 'SHOW ALL'}
              placement="top"
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: '#102338',
                  },
                },
              }}
            >
              <Box
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
                  '&:hover': {
                    backgroundColor: hoverColor,
                    border: `3px solid ${hoverBorder}`,
                  },
                }}
              >
                <Image src={src} alt="icon" width={24} height={24} />
              </Box>
            </Tooltip>
          )
        )}
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
                <Box className="article-wrapper">
                  <Box
                    className="article-icon"
                    sx={{
                      backgroundColor: getBackgroundColor(post.content_type),
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
                  <Box sx={{ marginTop: '0.5rem', color: '#CD1A5D' }}>
                    <span
                      className={gothamFont.className}
                      style={{
                        color: '#FFFFFF',
                        fontWeight: 600,
                        fontSize: '12px',
                        lineHeight: '140%',
                        textTransform: 'uppercase',
                      }}
                    >
                      {post.content_type}
                    </span>
                    <span
                      style={{
                        color: '#FFFFFF',
                        fontWeight: 600,
                      }}
                    >
                      {' | '}
                    </span>
                    <span
                      className={gothamFont.className}
                      style={{
                        fontWeight: 600,
                        fontSize: '12px',
                        lineHeight: '140%',
                        textTransform: 'uppercase',
                        color: '#CD1A5D',
                      }}
                    >
                      {post.topics[0]?.topic_name}
                    </span>
                    {post.topics[1]?.topic_name && ', '}
                    <span
                      className={gothamFont.className}
                      style={{
                        fontWeight: 600,
                        fontSize: '12px',
                        lineHeight: '140%',
                        textTransform: 'uppercase',
                        color: '#CD1A5D',
                      }}
                    >
                      {post.topics[1]?.topic_name}
                    </span>
                    <span
                      className={gothamFont.className}
                      style={{
                        fontWeight: 600,
                        fontSize: '12px',
                        lineHeight: '140%',
                        textTransform: 'uppercase',
                        color: '#CD1A5D',
                      }}
                    >
                      {post.topics.length > 2 &&
                        ' + ' + (post.topics.length - 2) + ' more'}
                    </span>
                  </Box>
                  <Link href={post.full_url}>
                    <Box sx={{ marginTop: '7px' }}>
                      <span
                        className={gothamFont.className}
                        style={{
                          fontStyle: 'normal',
                          fontWeight: 700,
                          fontSize: '20px',
                          lineHeight: '125%',
                          color: '#FFFFFF',
                        }}
                      >
                        {post.title}
                      </span>
                    </Box>
                  </Link>
                  <Box style={{ marginTop: '7px' }}>
                    <span
                      className={gothamFont.className}
                      style={{
                        fontWeight: 500,
                        fontSize: '12px',
                        color: '#9DA6AB',
                        textTransform: 'uppercase',
                      }}
                    >
                      {moment(post.first_published).format('MMMM YYYY')} &nbsp;
                    </span>
                    <>
                      <span>
                        {post.authors.length > 0 && (
                          <>
                            <span
                              style={{
                                fontWeight: 600,
                                color: '#9DA6AB',
                                textTransform: 'uppercase',
                              }}
                            >
                              {`|`}&nbsp;
                            </span>
                            <span
                              className={gothamFont.className}
                              style={{
                                fontWeight: 500,
                                fontSize: '12px',
                                color: '#9DA6AB',
                                textTransform: 'uppercase',
                              }}
                            >
                              by {post.authors[0].author_display_name}
                            </span>
                          </>
                        )}
                      </span>
                    </>
                  </Box>
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
