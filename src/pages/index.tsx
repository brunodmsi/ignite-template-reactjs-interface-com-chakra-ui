import { GetStaticProps } from 'next';
import { Box, Center, Divider, Flex, Heading, useBreakpointValue } from '@chakra-ui/react';
import { Banner } from '../components/Banner';

import { Header } from '../components/Header';
import { TravelType } from '../components/TravelType';
import { Slide } from '../components/Slide';

import { api } from '../services/api';

interface Continent {
  slug: string;
  name: string;
  description: string;
  bannerImage: string;
}

interface HomeProps {
  continents: Array<Continent>;
}

export default function Home({ continents }: HomeProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />
      
      <Banner />

      <Box
        maxW={1240}
        mx="auto"
        mt={['9', '24']}
        mb={['6', '10']}
      >
        <Flex
          px={['12', '10']}
          mb={['9', '20']}
          justify="space-between"
          wrap={isWideVersion ? 'nowrap': 'wrap'}
        >
          <TravelType title="vida noturna" imageSrc="/images/icons/cocktail.svg" />
          <TravelType title="praia" imageSrc="/images/icons/surf.svg" />
          <TravelType title="moderno" imageSrc="/images/icons/building.svg" />
          <TravelType title="clássico" imageSrc="/images/icons/museum.svg" />
          <TravelType title="e mais..." imageSrc="/images/icons/earth.svg" />
        </Flex>
      </Box>

      <Center w="90px" mx="auto" borderTopWidth="2px" borderColor="gray.600"></Center>

      <Box>
        <Heading
          py={['6', '14']}
          fontWeight="normal"
          fontSize={['xl', '4xl']}
          textAlign="center"
          lineHeight={['30px', '3.375rem']}
        >
          Vamos nessa? <Divider as="br" />
        </Heading>

        <Flex
          h={['250', '450']}
          w="100%"
          maxW={1440}
          mx="auto"
          mb={['5', '10']}
        >
          <Slide continents={continents} />
        </Flex>
      </Box>
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const continents = await api.get('/continents');

  return {
    props: {
      continents: continents.data
    },
    revalidate: 60 * 30
  }
}
