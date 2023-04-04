import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = styled(Slider)`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ImageWrapper = styled.div``;
const BannerImage = styled.img`
  display: block;
  margin: 0px auto;
`;

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <BannerSlider {...settings}>
      <ImageWrapper>
        <BannerImage src="/images/banner_image/banner1.jpg" />
      </ImageWrapper>
      <ImageWrapper>
        <BannerImage src="/images/banner_image/banner2.jpg" />
      </ImageWrapper>
      <ImageWrapper>
        <BannerImage src="/images/banner_image/banner3.jpg" />
      </ImageWrapper>
      <ImageWrapper>
        <BannerImage src="/images/banner_image/banner4.jpg" />
      </ImageWrapper>
      <ImageWrapper>
        <BannerImage src="/images/banner_image/banner5.jpg" />
      </ImageWrapper>
    </BannerSlider>
  );
}
