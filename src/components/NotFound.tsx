import { Text } from '@chakra-ui/react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import Error404 from '../images/Error404.svg';
import { BackLinkArrow } from './../Components.styled';

export default function NotFound() {
  return (
    <div>
      <BackLinkArrow to="/">
        <HiOutlineArrowNarrowLeft /> <Text ml="8px">Home</Text>
      </BackLinkArrow>
      <img src={Error404} alt="Page not found"></img>
    </div>
  );
}
