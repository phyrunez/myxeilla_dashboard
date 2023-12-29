import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Svg from "../../../components/Svg";

export default function index() {
	return (
		<Box className="fixed bottom-[50px] right-[50px]">
			<Button className="bg-[#4545FE] " h="46" width="250px" borderRadius={70}>
				<Flex alignItems="center" justifyContent="center">
					<Svg name="buld" />
					<Text fontSize={20} fontWeight={400} mx="8" color="white">
						Veerge Assistant
					</Text>
					<Svg name="close" />
				</Flex>
			</Button>
		</Box>
	);
}
