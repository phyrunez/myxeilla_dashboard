import React from "react";
import { ChildrenProps } from "../utils/types";
import { Box, Flex, Text } from "@chakra-ui/react";
import Navigation from "./components/Navigation";
import VeergeAssistant from "./components/VeergeAssistant";
import Svg from "../components/Svg";

export default function DashboardTemplate({ children }: ChildrenProps) {
	return (
		<Flex direction="column" flex={1}>
			<Navigation />
			{children}
			<VeergeAssistant />
			<Flex alignItems="center" justifyContent="center" py="20">
				<Svg name="lock" />
				<Text
					textAlign={"center"}
					fontSize={16}
					fontWeight={400}
					ml="3"
					className="text-[color:var(--text-grey)]"
				>
					End-to-end encryption
				</Text>
			</Flex>
		</Flex>
	);
}
