import { useEffect, useState } from "react";
import { Flex, Text, Button, Divider } from "@chakra-ui/react";
import { Settings } from ".";

const Timer: React.FC = () => {
	const [time, setTime] = useState(3600);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		let interval: NodeJS.Timeout;

		if (isActive && time > 0) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime - 1);
			}, 1000);
		} else if (time === 0) {
			setIsActive(false);
		}

		return () => {
			clearInterval(interval);
		};
	}, [isActive, time]);

	const hours = Math.floor(time / 3600);
	const minutes = Math.floor((time % 3600) / 60);
	const seconds = time % 60;

	return (
		<>
			<Text fontSize="5xl">
				{String(hours).padStart(2, "0")}: {String(minutes).padStart(2, "0")}:{" "}
				{String(seconds).padStart(2, "0")}
			</Text>

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
							setTime(3600);
							setIsActive(false);
						}}
					>
						Reset
					</Button>
				</Flex>

				<Settings />
			</Flex>
		</>
	);
};

export default Timer;
