import React from "react";
import Card from "../../../components/Card";
import { Box, Text, Flex } from "@chakra-ui/react";
import Svg from "../../../components/Svg";

interface OverviewCardProps {
	list: { name: string; count: number }[];
	name: string;
	icon: string;
}

export default function OverviewCard({ list, name, icon }: OverviewCardProps) {
	return (
		<Card className="px-[17px] py-[13px] h-full">
			<Box>
				<Flex justifyContent="space-between">
					<Flex alignItems={"center"}>
						<Svg name={icon} />
						<Text fontWeight={500} fontSize={"14px"} ml="10">
							{name}
						</Text>
					</Flex>
					<Flex>
						<Text
							fontSize={12}
							fontWeight={500}
							className="text-[color:var(--text-disabled)]"
						>
							View all
						</Text>
						<Svg name="chevron-right" />
					</Flex>
				</Flex>
				<Flex mt={24}>
					{list.map((item) => (
						<Flex
							className="border"
							h="79"
							flex={1}
							mx="6"
							direction="column"
							alignItems="center"
							justifyContent="center"
							borderRadius={12}
							key={item.name}
						>
							<Text fontWeight={600} fontSize={24}>
								0
							</Text>
							<Text
								fontWeight={400}
								fontSize={14}
								className="text-[color:var(--text-grey-1)] capitalize"
							>
								{item.name}
							</Text>
						</Flex>
					))}
				</Flex>
			</Box>
		</Card>
	);
}
