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

const Home: React.FC = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		let interval: NodeJS.Timeout;

		if (isActive) {
			interval = setInterval(() => {
				setTime((prevTime) => {
					let {
						hours,
						minutes,
						seconds,
					}: { hours: number; minutes: number; seconds: number } = prevTime;

					seconds++;

					if (seconds === 60) {
						seconds = 0;
						minutes++;

						if (minutes === 60) {
							minutes = 0;
							hours++;
						}
					}

					return { hours, minutes, seconds };
				});
			}, 1000);
		}

		return () => {
			clearInterval(interval);
		};
	}, [isActive]);

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
								<Text fontSize="5xl">5:00</Text>
							</TabPanel>

							<TabPanel textAlign="center" m="1rem">
								<Text fontSize="5xl">
									{String(time.hours).padStart(2, "0")}:{" "}
									{String(time.minutes).padStart(2, "0")}:{" "}
									{String(time.seconds).padStart(2, "0")}
								</Text>
							</TabPanel>
						</TabPanels>
					</Tabs>

					<Divider />

					<Flex justifyContent="space-between">
						<Flex direction="row" alignItems="center">
							<Button
								bg="blue.300"
								m="1rem"
								onClick={() => {
									isActive ? setIsActive(false) : setIsActive(true);
								}}
							>
								{isActive ? "Stop" : "Start"}
							</Button>
							<Button
								bg="gray.400"
								onClick={() => {
									setTime({ hours: 0, minutes: 0, seconds: 0 });
									setIsActive(false);
								}}
							>
								Reset
							</Button>
						</Flex>

						<Flex direction="row-reverse" alignItems="center">
							<IconButton
								m="1rem"
								onClick={() => {
									document.fullscreenElement
										? document.exitFullscreen()
										: document.documentElement.requestFullscreen();
								}}
								aria-label="Fullscreen"
								icon={<MdFullscreen />}
							/>
							<IconButton
								onClick={toggleColorMode}
								aria-label="Change Theme"
								icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
							/>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
};

export default Home;
