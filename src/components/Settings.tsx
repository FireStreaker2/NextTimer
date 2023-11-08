import { Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { MdFullscreen } from "react-icons/md";

const Settings: React.FC = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<>
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
		</>
	);
};

export default Settings;
