import { Center, Image, useBreakpointValue } from '@chakra-ui/react';

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Center
      as="header"
      w="100%"
      maxW={1240}
      mx="auto"
      px={['4', '10']}
      h={isWideVersion ? '100' : '50'}
    >
      <Image src="/images/logo.svg" alt="Logo" />
    </Center>
  )
}