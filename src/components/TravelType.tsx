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
      <Text>
        <Icon as={FaCircle} />
        {title}
      </Text>
    )
  }

  return (
    <Flex>
      <Image src={imageSrc} alt={title} maxW="85" />
      <Text>
        {title}
      </Text>
    </Flex>
  )
}