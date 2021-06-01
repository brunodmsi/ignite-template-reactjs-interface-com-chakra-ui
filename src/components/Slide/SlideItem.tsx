import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface SlideItemProps {
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
}

export function SlideItem({ title, description, slug, imageUrl }: SlideItemProps) {
  return (
    <Link href={`/continents/${slug}`}>
      <a>
        <Flex
          bgImage={`url(${imageUrl})`}
          w="100%"
          h="100%"
          align="center"
          justify="center"
          direction="column"
          bgPosition="no-repeat"
          bgRepeat="no-repeat"
          bgSize="cover"
          textAlign="center"
        >
          <Heading
            fontSize={['2xl', '5xl']}
            color="gray.50"
            fontWeight="700"
          >
            {title}
          </Heading>
          <Text
            fontWeight="bold"
            color="gray.100"
            fontSize={['sm', 'lg']}
            mt={['12px', '4']}
          >
            {description}
          </Text>
        </Flex>
      </a>
    </Link>
  )
}