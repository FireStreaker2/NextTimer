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
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
					name="description"
					content="Simple timer made with Next + ChakraUI"
				/>
				<meta name="keywords" content="FireStreaker2, NextTimer" />
				<meta name="copyright" content="FireStreaker2" />
				<meta property="og:title" content="NextTimer" />
				<meta property="og:type" content="website" />
				<meta
					property="og:description"
					content="Simple timer made with Next + ChakraUI"
				/>
				<meta name="theme-color" content="#000000" />
				<meta name="twitter:card" content="summary_large_image" />

				<title>NextTimer</title>
				<link rel="icon" type="image/x-icon" href="/icon.svg" />
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
