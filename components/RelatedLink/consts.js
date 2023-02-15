import moment from 'moment';
export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4.5,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1290,
      settings: {
        slidesToShow: 3.5,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
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
