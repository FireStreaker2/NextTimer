import { useState, useEffect } from "react";
import { Button, Divider, Flex, Text } from "@chakra-ui/react";
import { Settings } from ".";

const Stopwatch: React.FC = () => {
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
			<Text fontSize="5xl">
				{String(time.hours).padStart(2, "0")}:{" "}
				{String(time.minutes).padStart(2, "0")}:{" "}
				{String(time.seconds).padStart(2, "0")}
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
							setTime({ hours: 0, minutes: 0, seconds: 0 });
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

export default Stopwatch;
