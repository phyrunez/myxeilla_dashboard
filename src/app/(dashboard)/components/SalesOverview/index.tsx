import { Box, Flex, Text, Button, Grid } from "@chakra-ui/react";
import React from "react";
import Card from "../../../components/Card";
import AmountCard from "../AmountCard";
import LineChart from "../LineChart";

export default function SalesOverview() {
	return (
		<Card className="h-full">
			<>
				<Flex justifyContent="space-between" px="22" py="16" borderRadius="16">
					<Box>
						<Text fontSize={"20px"} fontWeight={600}>
							Sales Overview
						</Text>
						<Text
							className="text-[color:var(--text-grey-1)]"
							fontSize={12}
							fontWeight={400}
							mt="12"
						>
							Showing overview Jan 2022 - Sep 2022
						</Text>
					</Box>
					<Flex alignItems="flex-end" direction="column">
						<Button className="text-[color:var(--text-disabled)] border border-[color:var(--text-disabled)] h-[46px] rounded-[12px] px-[16px]">
							View Transactions
						</Button>
						<Flex justifyContent="flex-end" alignItems="center" mt="17">
							<Text
								h="33"
								py="7"
								px="20"
								className="text-[color:var(--text-grey-2)]"
								fontSize={14}
								borderRadius={8}
								ml="8"
							>
								1 Week
							</Text>
							<Text
								h="33"
								py="7"
								px="20"
								className="text-[color:var(--text-grey-2)]"
								fontSize={14}
								borderRadius={8}
								ml="8"
							>
								1 Month
							</Text>
							<Text
								h="33"
								py="7"
								px="20"
								className="bg-[color:var(--bg-grey)]"
								fontSize={14}
								fontWeight={600}
								borderRadius={8}
								ml="8"
							>
								1 Year
							</Text>
						</Flex>
					</Flex>
				</Flex>
				<hr />
				<Grid
					gridTemplateColumns={"repeat(2, minmax(auto, 1fr))"}
					pb="21"
					gap={16}
					mt="16"
				>
					<LineChart />
					<Grid
						gap={16}
						gridTemplateColumns={"repeat(2, minmax(auto, 1fr))"}
						pr="22"
					>
						<AmountCard
							amount={0}
							name={"Balance"}
							absoluteColor={"#4545FE"}
							decimalColor={"#4545FE"}
							percentage={0}
							percentageColor={"#12D8A0"}
						/>
						<AmountCard
							amount={0}
							name={"Deposit"}
							absoluteColor={"#12D8A0"}
							decimalColor={"#12D8A0"}
							percentage={0}
							percentageColor={"#12D8A0"}
						/>
						<AmountCard
							amount={0}
							name={"Purchase"}
							absoluteColor={"#191919"}
							decimalColor={"#CBCBCB"}
							percentage={0}
							percentageColor={"#12D8A0"}
						/>
						<AmountCard
							amount={0}
							name={"Withdrawal"}
							absoluteColor={"#FF6A6A"}
							decimalColor={"#FF6A6A"}
							percentage={0}
							percentageColor={"#FF6A6A"}
						/>
					</Grid>
				</Grid>
			</>
		</Card>
	);
}
