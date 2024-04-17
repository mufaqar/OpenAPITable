export const APITablesettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    initialSlide: 0,
    autoplaySpeed: 2000,
    responsive: [
        
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          }
        }
      ]
};


export const ProductsSetting = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "100px",
  slidesToShow: 3,
  speed: 500,
  autoplay: true,
  initialSlide: 0,
  dots: true,
  autoplaySpeed: 2000,
  responsive: [
      
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
};