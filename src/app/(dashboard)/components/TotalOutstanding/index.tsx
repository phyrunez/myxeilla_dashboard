import { GridItem, Text, Grid, Box, Flex } from "@chakra-ui/react";
import React from "react";
import MostActionStatus from "../MostActionStatus";
import Card from "../../../components/Card";
import WatchListCount from "../WatchListCount";
import Svg from "../../../components/Svg";

interface TotalOutstandingProps {
	title?: string;
	description?: string;
	subTitle?: string;
	amountColor?: string;
	hasMore?: boolean;
}
export default function TotalOutstanding({
	title,
	description,
	subTitle,
	amountColor,
	hasMore,
}: TotalOutstandingProps) {
	return (
		<GridItem className="h-full">
			<Card className="px-[22px] py-[13px] h-full">
				<Flex
					direction="column"
					justifyContent="space-between"
					flex={1}
					className="h-full"
				>
					<Flex alignItems="center" justifyContent="space-between">
						<Box>
							{title && (
								<Text className="text-[color:var(--text-success)]">
									{title}
								</Text>
							)}
							<Text fontSize={28} fontWeight={600} mb="18" className="inline">
								₦ 0
								<Text
									as={"span"}
									className="inline text-[color:var(--text-disabled)]"
									fontSize={28}
									fontWeight={600}
								>
									.00
								</Text>
							</Text>
							<Text
								fontSize={14}
								fontWeight={400}
								className="text-[color:var(--text-grey-1)]"
							>
								{description}
							</Text>
						</Box>
						{hasMore && (
							<Flex>
								<Text
									fontSize={12}
									fontWeight={500}
									className="text-[color:var(--text-grey)]"
								>
									View all
								</Text>
								<Svg name="chevron-right" />
							</Flex>
						)}
					</Flex>
					<Flex>
						<Flex
							width="155px"
							height={"155px"}
							className="bg-[color:var(--bg-grey)]"
							borderRadius={12}
							alignItems="center"
							justifyContent="center"
						>
							<Svg name="img" size="100" />
						</Flex>
						<Flex
							fontWeight={600}
							fontSize={20}
							flex="1"
							direction="column"
							justifyContent="space-between"
							ml="19"
						>
							<Text>None</Text>
							<Box>
								<Text
									fontSize={16}
									fontWeight={600}
									className="text-[color:var(--text-secondary)]"
									color={amountColor}
								>
									₦ 0.00
								</Text>
								<Text
									fontSize={12}
									fontWeight={400}
									className="text-[color:var(--text-grey-1)]"
								>
									{subTitle}
								</Text>
							</Box>
							<Flex justifyContent="flex-end">
								<Flex alignItems="center">
									<Text
										fontSize={12}
										fontWeight={400}
										className="text-[color:var(--text-grey-1)]"
									>
										1/5
									</Text>
									<Flex
										alignItems="center"
										className="bg-[color:var(--border-grey)] rounded-full ml-[8px]"
										justifyContent="center"
										width="32px"
										h="32"
									>
										<Svg name="arrow-left" />
									</Flex>
									<Flex
										alignItems="center"
										className="bg-[color:var(--border-grey)] rounded-full ml-[8px]"
										justifyContent="center"
										width="32px"
										h="32"
									>
										<Svg name="arrow-right" />
									</Flex>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			</Card>
		</GridItem>
	);
}
