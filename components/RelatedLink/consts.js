import moment from 'moment';
export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3.5,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: '174px',
  responsive: [
    {
      breakpoint: 1372,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1110,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 0.5,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const displayDateAndAuthor = (date, authors) => {
  const formatedDate = moment(date).format('MMMM YYYY');
  const formatedAuthor =
    authors.length > 0 ? ` | by ${authors[0].author_display_name}` : '';
  return formatedDate + formatedAuthor;
};
