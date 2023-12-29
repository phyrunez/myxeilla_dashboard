import { Box, Flex, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import Svg from "../../../components/Svg";

interface MostActionStatus {
	name: string;
	borderColor: string;
}

export default function MostActionStatus({
	name,
	borderColor,
}: MostActionStatus) {
	return (
		<GridItem>
			<Text
				fontSize={10}
				fontWeight={400}
				className="text-[color:var(--text-grey-3)]"
			>
				{name}
			</Text>
			<hr
				className="mt-[4px] border-[color:var(--bg-grey) border-t-[1px]"
				style={{ borderColor: "#F5F5F5" }}
			/>
			<Flex alignItems="center">
				<Flex
					className="border"
					alignItems="center"
					justifyContent="center"
					borderRadius={12}
					borderColor={borderColor}
					h="68"
					width={"68px"}
					mt="10"
					shrink={0}
				>
					<Svg name="img" />
				</Flex>
				<Text fontSize={16} fontWeight={600} ml="14">
					None
				</Text>
			</Flex>
		</GridItem>
	);
}
