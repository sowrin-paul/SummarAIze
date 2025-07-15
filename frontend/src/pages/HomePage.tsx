import {
    Box,
    Container,
    Heading,
    Text,
    Button,
    VStack,
    HStack,
    SimpleGrid,
    Icon,
    Flex,
    Badge,
    Stack,
    AvatarGroup,
} from '@chakra-ui/react'
import { RiArrowRightLine } from "react-icons/ri"
import { useColorModeValue, ColorModeButton } from '../components/ui/color-mode'
import {
    FileText,
    Search,
    MessageCircle,
    Users,
    Shield,
    ArrowRight,
    Star,
    BookOpen,
    Brain,
    Sparkles,
} from 'lucide-react'

const features = [
    {
        icon: FileText,
        title: 'Smart Paper Management',
        description: 'Upload PDFs and get instant AI-powered summaries, keyword extraction, and metadata organization.',
        color: 'blue',
    },
    {
        icon: Search,
        title: 'Semantic Search',
        description: 'Find relevant papers using natural language queries with advanced vector similarity search.',
        color: 'purple',
    },
    {
        icon: MessageCircle,
        title: 'AI Research Assistant',
        description: 'Chat with your papers using GPT-powered AI to get insights and answers to your questions.',
        color: 'green',
    },
    {
        icon: Users,
        title: 'Collaboration Tools',
        description: 'Share folders, collaborate with peers, and build knowledge together with real-time annotations.',
        color: 'orange',
    },
    {
        icon: Brain,
        title: 'Knowledge Discovery',
        description: 'Discover connections between papers and uncover hidden insights in your research collection.',
        color: 'pink',
    },
    {
        icon: Shield,
        title: 'Secure & Private',
        description: 'Your research data is protected with enterprise-grade security and privacy controls.',
        color: 'teal',
    },
]

const testimonials = [
    {
        name: 'Dr. Sarah Chen',
        role: 'PhD Researcher, MIT',
        content: 'This platform has revolutionized how I manage my research. The AI summaries save me hours every week.',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    },
    {
        name: 'Prof. Michael Rodriguez',
        role: 'Computer Science, Stanford',
        content: 'The semantic search is incredibly powerful. I can find relevant papers I never would have discovered otherwise.',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    },
    {
        name: 'Emma Thompson',
        role: 'Graduate Student, Harvard',
        content: 'The collaboration features make working with my research group seamless. Highly recommended!',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    },
]

const stats = [
    { label: 'Research Papers Processed', value: '50K+' },
    { label: 'Active Researchers', value: '2.5K+' },
    { label: 'AI Summaries Generated', value: '100K+' },
    { label: 'Hours Saved Weekly', value: '10K+' },
]

export const HomePage = () => {
    // Dynamic color values that respond to theme changes
    const bgGradient = useColorModeValue(
        'linear(to-br, blue.50, purple.50, pink.50)',
        'linear(to-br, gray.900, gray.800, gray.900)'
    )
    const cardBg = useColorModeValue('white', 'gray.800')
    const textColor = useColorModeValue('gray.600', 'gray.300')
    const headingColor = useColorModeValue('gray.800', 'white')
    const borderColor = useColorModeValue('gray.100', 'gray.700')
    const avatarBg = useColorModeValue('gray.200', 'gray.600')
    const footerBg = useColorModeValue('gray.50', 'gray.900')
    const testimonialsBg = useColorModeValue('white', 'gray.700')

    return (
        <Box>
            {/* Navigation */}
            <Box bg={cardBg} shadow="sm" position="sticky" top={0} zIndex={10}>
                <Container maxW="7xl" py={4}>
                    <Flex justify="space-between" align="center">
                        <HStack gap={2}>
                            <Icon as={BookOpen} w={8} h={8} color="blue.500" />
                            <Heading size="lg" color="blue.500" fontWeight="bold">
                                Summar{''}
                                <Text as="span" bgGradient="linear-gradient(to right, #4299e1, #9f7aea)" bgClip="text">
                                    AI
                                </Text>
                                ze
                            </Heading>
                        </HStack>
                        <HStack gap={4}>
                            <ColorModeButton />
                            <Button colorPalette="blue" variant="outline" onClick={() => window.location.href = '/login'}>
                                Sign In
                            </Button>
                            <Button colorPalette="blue" variant="outline" onClick={() => window.location.href = '/register'}>
                                Get Started <RiArrowRightLine />
                            </Button>
                        </HStack>
                    </Flex>
                </Container>
            </Box>

            {/* Hero Section */}
            <Box bgGradient={bgGradient} py={20}>
                <Container maxW="7xl">
                    <VStack gap={8} textAlign="center">
                        <Badge
                            colorPalette="blue"
                            px={4}
                            py={2}
                            rounded="full"
                            fontSize="sm"
                            fontWeight="medium"
                        >
                            <HStack gap={1}>
                                <Icon as={Sparkles} w={4} h={4} />
                                <Text>AI-Powered Research Platform</Text>
                            </HStack>
                        </Badge>

                        <Heading
                            size="3xl"
                            fontWeight="bold"
                            color={headingColor}
                            maxW="4xl"
                            lineHeight="shorter"
                        >
                            Transform Your Research with{' '}
                            <Text as="span" bgGradient="linear-gradient(to right, #4299e1, #9f7aea)" bgClip="text">
                                AI Intelligence
                            </Text>
                        </Heading>

                        <Text
                            fontSize="xl"
                            color={textColor}
                            maxW="2xl"
                            lineHeight="tall"
                        >
                            Upload, organize, and discover insights from your research papers with powerful AI tools.
                            Collaborate seamlessly and accelerate your academic journey.
                        </Text>

                        <HStack gap={4}>
                            <Button size="lg" colorPalette="blue" onClick={() => window.location.href = '/register'}>
                                Start Free Trial <ArrowRight size={20} />
                            </Button>
                            <Button
                                size="lg"
                                variant="surface"
                                // colorPalette="blue"
                                px={8}
                                py={6}
                                fontSize="lg"
                            >
                                Watch Demo
                            </Button>
                        </HStack>

                        <HStack gap={4} pt={4}>
                            <AvatarGroup size="md">
                                {testimonials.map((_, index) => (
                                    <Box key={index} w={8} h={8} bg={avatarBg} rounded="full" />
                                ))}
                            </AvatarGroup>
                            <VStack gap={0} align="start">
                                <HStack>
                                    {[...Array(5)].map((_, i) => (
                                        <Icon key={i} as={Star} w={4} h={4} color="yellow.400" fill="currentColor" />
                                    ))}
                                </HStack>
                                <Text fontSize="sm" color={textColor}>
                                    Trusted by 2,500+ researchers worldwide
                                </Text>
                            </VStack>
                        </HStack>
                    </VStack>
                </Container>
            </Box>

            {/* Stats Section */}
            <Box py={16} bg={cardBg}>
                <Container maxW="7xl">
                    <SimpleGrid columns={{ base: 2, md: 4 }} gap={8}>
                        {stats.map((stat, index) => (
                            <VStack key={index} gap={2}>
                                <Heading size="2xl" color="blue.500" fontWeight="bold">
                                    {stat.value}
                                </Heading>
                                <Text color={textColor} textAlign="center" fontSize="sm">
                                    {stat.label}
                                </Text>
                            </VStack>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Features Section */}
            <Box py={20}>
                <Container maxW="7xl">
                    <VStack gap={16}>
                        <VStack gap={4} textAlign="center">
                            <Heading size="2xl" color={headingColor} fontWeight="bold">
                                Everything You Need for Research Excellence
                            </Heading>
                            <Text fontSize="lg" color={textColor} maxW="2xl">
                                Powerful features designed to streamline your research workflow and enhance collaboration.
                            </Text>
                        </VStack>                            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
                            {features.map((feature, index) => (
                                <Box
                                    key={index}
                                    bg={cardBg}
                                    p={8}
                                    rounded="2xl"
                                    shadow="lg"
                                    border="1px"
                                    borderColor={borderColor}
                                    transition="all 0.3s"
                                    _hover={{
                                        transform: 'translateY(-4px)',
                                        shadow: 'xl',
                                    }}
                                >
                                    <VStack gap={4} align="start">
                                        <Box
                                            p={3}
                                            rounded="xl"
                                            bg={`${feature.color}.50`}
                                            color={`${feature.color}.500`}
                                        >
                                            <Icon as={feature.icon} w={6} h={6} />
                                        </Box>
                                        <Heading size="md" color={headingColor}>
                                            {feature.title}
                                        </Heading>
                                        <Text color={textColor} lineHeight="tall">
                                            {feature.description}
                                        </Text>
                                    </VStack>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </VStack>
                </Container>
            </Box>

            {/* Testimonials Section */}
            <Box py={20} bg={cardBg}>
                <Container maxW="7xl">
                    <VStack gap={16}>
                        <VStack gap={4} textAlign="center">
                            <Heading size="2xl" color={headingColor} fontWeight="bold">
                                Loved by Researchers Worldwide
                            </Heading>
                            <Text fontSize="lg" color={textColor}>
                                See what our community has to say about their experience.
                            </Text>
                        </VStack>                            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
                            {testimonials.map((testimonial, index) => (
                                <Box
                                    key={index}
                                    bg={testimonialsBg}
                                    p={8}
                                    rounded="2xl"
                                    shadow="lg"
                                    border="1px"
                                    borderColor={borderColor}
                                >
                                    <VStack gap={4} align="start">
                                        <HStack>
                                            {[...Array(5)].map((_, i) => (
                                                <Icon key={i} as={Star} w={4} h={4} color="yellow.400" fill="currentColor" />
                                            ))}
                                        </HStack>
                                        <Text color={textColor} lineHeight="tall" fontStyle="italic">
                                            "{testimonial.content}"
                                        </Text>
                                        <HStack gap={3}>
                                            <Box w={8} h={8} bg={avatarBg} rounded="full" />
                                            <VStack gap={0} align="start">
                                                <Text fontWeight="semibold" color={headingColor} fontSize="sm">
                                                    {testimonial.name}
                                                </Text>
                                                <Text color={textColor} fontSize="xs">
                                                    {testimonial.role}
                                                </Text>
                                            </VStack>
                                        </HStack>
                                    </VStack>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </VStack>
                </Container>
            </Box>

            {/* CTA Section */}
            <Box py={20} bgGradient={bgGradient}>
                <Container maxW="4xl">
                    <VStack gap={8} textAlign="center">
                        <Heading size="2xl" color={headingColor} fontWeight="bold">
                            Ready to Revolutionize Your Research?
                        </Heading>
                        <Text fontSize="lg" color={textColor} maxW="2xl">
                            Join thousands of researchers who are already using AI to accelerate their academic work.
                            Start your free trial today.
                        </Text>
                        <HStack gap={4}>
                            <Button
                                size="lg"
                                variant="surface"
                                colorPalette="blue"
                                px={8}
                                py={6}
                                fontSize="lg"
                            >
                                Contact Sales
                            </Button>
                        </HStack>
                        <Text fontSize="sm" color={textColor}>
                            No credit card required • 30-day free trial • Cancel anytime
                        </Text>
                    </VStack>
                </Container>
            </Box>

            {/* Footer */}
            <Box bg={footerBg} py={12}>
                <Container maxW="7xl">
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        gap={8}
                        justify="space-between"
                        align="center"
                    >
                        <HStack gap={2}>
                            <Icon as={BookOpen} w={6} h={6} color="blue.500" />
                            <Text fontWeight="bold" color={headingColor}>
                                SummarAIze | Research Journal Assistant
                            </Text>
                        </HStack>
                        <HStack gap={8}>
                            <Text color={textColor} fontSize="sm">Privacy Policy</Text>
                            <Text color={textColor} fontSize="sm">Terms of Service</Text>
                            <Text color={textColor} fontSize="sm">Contact</Text>
                        </HStack>
                        <Text color={textColor} fontSize="sm">
                            © 2025 SummarAIze. All rights reserved.
                        </Text>
                    </Stack>
                </Container>
            </Box>
        </Box>
    )
}