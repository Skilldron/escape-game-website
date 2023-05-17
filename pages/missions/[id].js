import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
  } from '@chakra-ui/react';
  import { MdPlayCircle } from 'react-icons/md';
  
  export default function Missions({ mission }) {
    return (
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={`http://127.0.0.1:1337${mission.data.attributes.images.data[0].attributes.url}`}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {mission.data.attributes.titre}
              </Heading>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  Synopsis
                </Text>
                <Text fontSize={'lg'}>
                {mission.data.attributes.description}
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Thèmes
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Chronograph</ListItem>
                    <ListItem>Master Chronometer Certified</ListItem>{' '}
                    <ListItem>Tachymeter</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Anti‑magnetic</ListItem>
                    <ListItem>Chronometer</ListItem>
                    <ListItem>Small seconds</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
                Je tente l'expérience
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdPlayCircle />
              <Text>Je joue de {mission.data.attributes.minimum_players} à {mission.data.attributes.maximum_players} participants !</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }


export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://127.0.0.1:1337/api/missions')
    const posts = await res.json()
  
    // Get the paths we want to prerender based on posts
    // In production environments, prerender all pages
    // (slower builds, but faster initial page load)
    const paths = posts.data.map((post) => ({
      params: { id: post.id.toString() },
    }))
  
    // { fallback: false } means other routes should 404
    return { paths, fallback: false }
}

export async function getStaticProps({params}) {
    const mission = await fetch(`http://127.0.0.1:1337/api/missions/${params.id}?populate=images`);
    const missionsJson = await mission.json();
    return {
        props: {
            mission: missionsJson
        }
    }
}
