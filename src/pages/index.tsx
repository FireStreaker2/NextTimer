import Head from "next/head";
import {
	Flex,
	TabList,
	Tab,
	Tabs,
	TabPanel,
	TabPanels,
	Icon,
} from "@chakra-ui/react";
import { BsStopwatch, BsHourglass } from "react-icons/bs";
import { Stopwatch, Timer } from "@/components";

const Home: React.FC = () => {
	return (
		<>
			<Head>
				<title>NextTimer</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Flex h="100vh" alignItems="center" justifyContent="center">
				<Flex direction="column" border="1px" h="250px" w="500px">
					<Tabs isFitted>
						<TabList>
							<Tab>
								<Icon as={BsHourglass} /> Timer
							</Tab>
							<Tab>
								<Icon as={BsStopwatch} mr="0.3rem" /> Stopwatch
							</Tab>
						</TabList>

						<TabPanels>
							<TabPanel textAlign="center" m="1rem">
								<Timer />
							</TabPanel>

							<TabPanel textAlign="center" m="1rem">
								<Stopwatch />
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Flex>
			</Flex>
		</>
	);
};

export default Home;
