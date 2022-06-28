import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { FiDownloadCloud } from 'react-icons/fi'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import Panel from '../panels';
import Header from '../panels/header';

export const AppMain = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
    <Flex
      as="section"
      direction={{ base: 'column', lg: 'row' }}
      height="100vh"
      bg="bg-canvas"
      overflowY="auto"
    >
      {isDesktop ? <Sidebar /> : <Navbar />}
     
      <Box bg="bg-surface" pt={{ base: '0', lg: '3' }} flex="1">
        <Box bg="bg-canvas" borderTopLeftRadius={{ base: 'none', lg: '2rem' }} height="full">
          <Container py="8" height="full">
            <Stack spacing={{ base: '8', lg: '6' }} height="full">
              <Stack
                spacing="4"
                direction={{ base: 'column', lg: 'row' }}
                justify="space-between"
                align={{ base: 'start', lg: 'center' }}
              >
                <Header />
              </Stack>
              <Box bg="bg-surface" borderRadius="lg" borderWidth="1px" height="full">
                <Panel />
              </Box>
            </Stack>
          </Container>
        </Box>
      </Box>
    </Flex>
  )
}
