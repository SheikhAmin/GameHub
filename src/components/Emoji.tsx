import thumbsUp from '../assets/transparent-thumbs-up-emoji-64869dc6651285.492712431686543814414.jpg';
import arrow from '../assets/download.jpeg';
import meh from '../assets/download (1).jpeg';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props { 
    rating: number;
}
const Emoji = ({rating }:Props) => { 
    if (rating < 3) return null;

    const emojiMap: { [Key: number]: ImageProps } = {
      3: { src: meh, alt: "meh", boxSize: "25px" },
      4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
      5: { src: arrow, alt: "exceptional", boxSize: "25px" },
    };
    return (
        <Image {...emojiMap[rating]} marginTop={1}/>
    )
}

export default Emoji;