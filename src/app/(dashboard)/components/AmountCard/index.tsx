import { Box, Flex, GridItem, Text } from "@chakra-ui/react";
import React, { useMemo } from "react";
import Svg from "../../../components/Svg";

interface AmountCardProps {
	name: string;
	absoluteColor: string;
	decimalColor: string;
	percentage: number;
	amount: number;
	percentageColor: string;
}
export default function AmountCard({
	name,
	absoluteColor,
	decimalColor,
	percentage,
	amount,
	percentageColor,
}: AmountCardProps) {
	const splittedAmount = useMemo(
		() => amount.toFixed(2).toString().split("."),
		[amount],
	);
	return (
		<GridItem
			className="border-[color:var(--border-grey)] border"
			px="15"
			py="13"
			borderRadius="12"
		>
			<Text fontSize={20} fontWeight={600}>
				<Text display="inline" color={absoluteColor} as="span">
					&#8358; {splittedAmount[0]}
					<Text display="inline" color={decimalColor} as="span">
						.{splittedAmount[1]}
					</Text>
				</Text>
			</Text>
			<Flex alignItems="center">
				<Text fontSize={10} fontWeight={500} className="capitalize">
					{name}
				</Text>
				<Box mx="4">
					<Svg name="percentage-up" color={percentageColor} />
				</Box>
				<Text fontSize={10} fontWeight={400} color={percentageColor}>
					{percentage}%
				</Text>
			</Flex>
		</GridItem>
	);
}
