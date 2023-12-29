import { GridItem, Text, Grid, Box, Flex } from "@chakra-ui/react";
import React from "react";
import MostActionStatus from "../MostActionStatus";
import Card from "../../../components/Card";
import WatchListCount from "../WatchListCount";

export default function ListingOverview() {
	return (
		<GridItem>
			<Card className="px-[22px] py-[13px]">
				<>
					<Text fontSize={18} fontWeight={600} mb="18">
						Listing Overview
					</Text>
					<Grid gridTemplateColumns="auto auto" gap="31">
						<MostActionStatus name={"Most viewed"} borderColor={"#12D8A0"} />
						<MostActionStatus name={"Most shared"} borderColor={"#4545FE"} />
					</Grid>
					<Flex
						className="bg-[color:var(--bg-grey)] p-[15px]"
						mt="15"
						borderRadius={12}
						alignItems="flex-end"
						justifyContent="space-between"
					>
						<MostActionStatus
							name={"Most watchlisted"}
							borderColor={"#FF9103"}
						/>
						<WatchListCount />
					</Flex>
				</>
			</Card>
		</GridItem>
	);
}
