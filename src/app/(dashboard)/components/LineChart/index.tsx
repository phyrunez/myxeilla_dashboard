import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Svg from "../../../components/Svg";

export default function LineChart() {
	return (
		<Flex w="full" px="10.25" alignItems={"center"}>
			<Flex
				className="w-[13.5px] h-[13.5px] rounded-full bg-[color:var(--bg-grey)]"
				shrink={0}
				alignItems="center"
				justifyContent="center"
			>
				<Svg name="arrow-left" />
			</Flex>
			<Flex flex={1} alignItems="flex-end " className="h-full w-full">
				<Box className="w-full">
					<hr />
					<Flex justifyContent={"space-between"}>
						<Text
							className="text-[color:var(--text-grey)]"
							fontSize={10}
							fontWeight={500}
						>
							Jan
						</Text>
						<Text
							className="text-[color:var(--text-grey)]"
							fontSize={10}
							fontWeight={500}
						>
							Feb
						</Text>
						<Text
							className="text-[color:var(--text-grey)]"
							fontSize={10}
							fontWeight={500}
						>
							Mar
						</Text>
						<Text
							className="text-[color:var(--text-grey)]"
							fontSize={10}
							fontWeight={500}
						>
							Apr
						</Text>
						<Text
							className="text-[color:var(--text-grey)]"
							fontSize={10}
							fontWeight={500}
						>
							May
						</Text>
						<Text
							className="text-[color:var(--text-grey)]"
							fontSize={10}
							fontWeight={500}
						>
							Jun
						</Text>
						<Text
							className="text-[color:var(--text-grey)]"
							fontSize={10}
							fontWeight={500}
						>
							Jul
						</Text>
						<Text
							className="text-[color:var(--text-grey)]"
							fontSize={10}
							fontWeight={500}
						>
							Aug
						</Text>
						<Text
							className="text-[color:var(--text-grey)]"
							fontSize={10}
							fontWeight={500}
						>
							Sep
						</Text>
					</Flex>
				</Box>
			</Flex>
			<Flex
				className="w-[13.5px] h-[13.5px] rounded-full bg-[color:var(--bg-grey)]"
				shrink={0}
				alignItems="center"
				justifyContent="center"
			>
				<Svg name="arrow-right" />
			</Flex>
		</Flex>
	);
}
