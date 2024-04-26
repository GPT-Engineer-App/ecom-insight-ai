import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaChartLine, FaCog, FaDatabase, FaRobot } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={10}>
        <Flex justifyContent="space-between" alignItems="center" w="full">
          <Heading as="h1" size="xl">
            Forloop.ai
          </Heading>
          <Button colorScheme="blue">Login</Button>
        </Flex>
        <Box textAlign="center">
          <Heading as="h2" size="lg">
            AI-powered E-commerce Monitoring & Insights
          </Heading>
          <Text mt={4}>Boost your online sales growth with actionable analytics.</Text>
        </Box>
        <SimpleGrid columns={2} spacing={10}>
          <VStack>
            <FaRobot size="3em" />
            <Heading as="h3" size="md">
              AI-Driven Insights
            </Heading>
            <Text>Utilize machine learning to analyze market trends and automate operations to reduce costs.</Text>
          </VStack>
          <VStack>
            <FaChartLine size="3em" />
            <Heading as="h3" size="md">
              Real-Time Global Coverage
            </Heading>
            <Text>Monitor any online retailer or brand across various markets with minimal latency.</Text>
          </VStack>
          <VStack>
            <FaDatabase size="3em" />
            <Heading as="h3" size="md">
              Integration with Internal Data
            </Heading>
            <Text>Integrate specific data for personalized insights and verify price adherence.</Text>
          </VStack>
          <VStack>
            <FaCog size="3em" />
            <Heading as="h3" size="md">
              Autonomous Matching
            </Heading>
            <Text>Employ AI to match products autonomously, enhancing data collection accuracy.</Text>
          </VStack>
        </SimpleGrid>
        <Box>
          <Heading as="h2" size="lg">
            Interactive Dashboard
          </Heading>
          <Text mt={4}>Visualize data in real-time to highlight key metrics and insights.</Text>
          <Image src="https://images.unsplash.com/photo-1501300140941-6c556d26c1b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbnRlcmFjdGl2ZSUyMGRhc2hib2FyZHxlbnwwfHx8fDE3MTQxMzYzMTV8MA&ixlib=rb-4.0.3&q=80&w=1080" mt={4} />
        </Box>
        <Flex justifyContent="space-between" w="full">
          <Button leftIcon={<FaCog />} colorScheme="teal" variant="solid">
            Settings
          </Button>
          <Button leftIcon={<FaChartLine />} colorScheme="purple" variant="solid">
            Reports
          </Button>
          <Button leftIcon={<FaDatabase />} colorScheme="orange" variant="solid">
            Alerts
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
