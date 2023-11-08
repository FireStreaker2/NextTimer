import { useEffect, useState } from "react";
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
	IconButton,
	useColorMode,
	Icon,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { MdFullscreen, MdOutlineHourglassEmpty } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import { Stopwatch, Timer } from "../components";

const Home: React.FC = () => {
	return (
		<>
			<Head>
				<title>NextTimer</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Flex h="100vh" alignItems="center" justifyContent="center">
				<Flex direction="column" border="1px" h="30vh" w="40vw">
					<Tabs isFitted>
						<TabList>
							<Tab>
								<Icon as={MdOutlineHourglassEmpty} /> Timer
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
