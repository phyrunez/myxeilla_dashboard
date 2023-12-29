import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Svg from "../../../components/Svg";

interface NavigationItemProps {
	active: boolean;
	name: string;
	icon: string;
}
export default function index({ active, name, icon }: NavigationItemProps) {
	return (
		<Flex
			bgColor={active ? "bggray.200" : ""}
			h="38"
			px="21"
			borderRadius="8"
			alignItems={"center"}
		>
			<Svg name={icon} />
			<Text
				className="ml-[8px] capitalize"
				color={active ? "textgrey.1" : "textgrey.2"}
				fontWeight={active ? "600" : "400"}
			>
				{name}
			</Text>
		</Flex>
	);
}
