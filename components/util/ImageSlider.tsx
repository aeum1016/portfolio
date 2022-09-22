import { AspectRatio, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export interface SliderComponents {
  photoURLs: string[];
}

// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider: React.FC<SliderComponents> = ({ photoURLs }) => {
  return (
    <Carousel infiniteLoop showThumbs={false} showIndicators={false}>
      {photoURLs.map((photoURL) => {
        return photoURL.includes("youtube") ? (
          <AspectRatio key={photoURL} ratio={560 / 315} h="50vh">
            <iframe
              src={photoURL}
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </AspectRatio>
        ) : (
          <Image
            key={photoURL}
            src={photoURL}
            w="80%"
            h="50vh"
            objectFit="contain"
            borderRadius="4px"
          />
        );
      })}
    </Carousel>
  );
};

export default ImageSlider;
