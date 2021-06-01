import { Box, Flex } from '@chakra-ui/react';
import { Banner } from '../components/Banner';

import { Header } from '../components/Header';
import { TravelType } from '../components/TravelType';

export default function Home() {
  return (
    <Box>
      <Header />
      
      <Banner />

      <Box>
        <Flex>
          <TravelType title="vida noturna" imageSrc="/images/icons/cocktail.svg" />
          <TravelType title="praia" imageSrc="/images/icons/surf.svg" />
          <TravelType title="moderno" imageSrc="/images/icons/building.svg" />
          <TravelType title="clássico" imageSrc="/images/icons/museum.svg" />
          <TravelType title="e mais..." imageSrc="/images/icons/earth.svg" />
        </Flex>
      </Box>
    </Box>
  )
}
