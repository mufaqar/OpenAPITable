import moment from 'moment';
export const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 2_000, //milliseconds
  slidesToShow: 4.5,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 10_000, //milliseconds

  responsive: [
    {
      breakpoint: 1445,
      settings: {
        slidesToShow: 3.5,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 840,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 570,
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
