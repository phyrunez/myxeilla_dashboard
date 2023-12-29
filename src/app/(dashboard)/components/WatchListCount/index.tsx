import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Svg from "../../../components/Svg";

export default function WatchListCount() {
	return (
		<Flex
			className="border border-[color:var(--border-grey)] py-[11px] px-[15px]"
			borderRadius={12}
			w="189"
			bg="white"
			justifyContent="space-between"
		>
			<Box>
				<Text fontSize={24} fontWeight={400}>
					0
				</Text>
				<Text>Number of watchlists</Text>
			</Box>
			<Box>
				<Svg name="bookmark" />
			</Box>
		</Flex>
	);
}
