import { ReactNode } from 'react';
import { Flex, Icon, Text, Image, useBreakpointValue } from '@chakra-ui/react';
import { FaCircle } from 'react-icons/fa';

interface TravelTypeProps {
  imageSrc?: string;
  title: string;
  isLastChild?: boolean;
}

export function TravelType({ 
  title, 
  imageSrc, 
  isLastChild = false 
}: TravelTypeProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  if (!isWideVersion) {
    return (
      <Text
        fontSize="lg"
        fontWeight="500"
        mb={isLastChild ? '0' : '27px'}
      >
        <Icon as={FaCircle} fontSize="0.5rem" color="yellow.500" mr={2} />
        {title}
      </Text>
    )
  }

  return (
    <Flex direction="column" align="center">
      <Image src={imageSrc} alt={title} maxW="85" />
      <Text
        mt={6}
        fontSize="2xl"
        fontWeight="600"
      >
        {title}
      </Text>
    </Flex>
  )
}