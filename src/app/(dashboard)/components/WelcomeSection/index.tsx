import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import hand from "../../../../assets/svg/hand.svg";

export default function WelcomeSection() {
	return (
		<Box mt="17">
			<Flex alignItems={"center"}>
				<Image src={hand.src} alt="" />
				<Text fontSize={"20px"} fontWeight={600}>
					Hi Ahmed
				</Text>
			</Flex>
			<Text fontSize={12} fontWeight={400} mt="10">
				Welcome to your Dashboard
			</Text>
		</Box>
	);
}
