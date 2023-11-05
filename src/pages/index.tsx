import Head from "next/head";
import {
	Button,
	Flex,
	TabList,
	Tab,
	Tabs,
	TabPanel,
	TabPanels,
	Text,
	Divider,
} from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";

const Home: React.FC = () => {
	return (
		<>
			<Head>
				<title>NextTimer</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Flex height="100vh" alignItems="center" justifyContent="center">
				<Flex direction="column" border="1px" height="30vh" width="40vw">
					<Tabs isFitted>
						<TabList>
							<Tab>Timer</Tab>
							<Tab>Stopwatch</Tab>
						</TabList>

						<TabPanels>
							<TabPanel textAlign="center" margin="1rem">
								<Text fontSize="5xl">5:00</Text>
							</TabPanel>

							<TabPanel textAlign="center" margin="1rem">
								<Text fontSize="5xl">0:00</Text>
							</TabPanel>
						</TabPanels>
					</Tabs>

					<Divider />

					<Flex justifyContent="space-between">
						<Flex direction="row" alignItems="center">
							<Button backgroundColor="blue.300" margin="1rem">
								Start
							</Button>
							<Button backgroundColor="gray.400">Reset</Button>
						</Flex>

						<Flex direction="row-reverse" alignItems="center">
							<Button margin="1rem">Fullscreen</Button>
							<Button>Change Color</Button>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
};

export default Home;
