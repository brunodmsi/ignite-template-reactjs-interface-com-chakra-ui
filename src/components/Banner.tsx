import { Box, Flex, Heading, Text, Image, Divider, useBreakpointValue } from '@chakra-ui/react';

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box
      bgImage="url('/images/background.svg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      height={isWideVersion ? '335' : '163'}
    >
      <Flex
        maxW={1240}
        h="100%"
        mx="auto"
        px={['4', '10']}
        direction="column"
        align="flex-start"
        justify="center"
        pos="relative"
      >
        <Heading
          as="h1"
          fontWeight="500"
          fontSize={['xl', '4xl']}
          color="gray.50"
          mb={['2', '5']}
        >
          6 Continentes, <Divider as="br" /> infinitas possibilidades.
        </Heading>
        <Text
          maxW={524}
          fontSize={['sm', 'xl']}
          color="gray.100"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou
        </Text>

        {isWideVersion && (
          <Image
            src="/images/airplane.svg"
            alt="Avião"
            pos="absolute"
            right="0"
            bottom="-35"
          />
        )}
      </Flex>
    </Box>
  )
}