import { Divider, Flex, Button, Text } from "@chakra-ui/react";
import { Settings } from ".";

const Timer: React.FC = () => {
	return (
		<>
			<Text fontSize="5xl">
				5:00
			</Text>

			<Divider />

			<Flex justifyContent="space-between">
				<Flex direction="row" alignItems="center">
					<Button
						bg="blue.300"
						m="1rem"
						// onClick={() => {
						// 	isActive ? setIsActive(false) : setIsActive(true);
						// }}
					>
						{/* {isActive ? "Stop" : "Start"} */}
            Start
					</Button>
					<Button
						bg="gray.400"
						// onClick={() => {
						// 	setTime({ hours: 0, minutes: 0, seconds: 0 });
						// 	setIsActive(false);
						// }}
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
