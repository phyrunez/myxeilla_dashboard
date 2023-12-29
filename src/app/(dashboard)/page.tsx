import { Container, Grid, GridItem } from "@chakra-ui/react";
import WelcomeSection from "./components/WelcomeSection";
import SalesOverview from "./components/SalesOverview";
import OverviewCard from "./components/OverviewCard";
import ListingOverview from "./components/ListingOverview";
import TotalOutstanding from "./components/TotalOutstanding";

export default function Home() {
	return (
		<Container className="px-[78px]">
			<WelcomeSection />
			<Grid templateColumns="60% 1fr" mt="20" gap="17">
				<GridItem w={"100%"}>
					<SalesOverview />
				</GridItem>
				<GridItem>
					<Grid className="h-full" gap="17">
						<OverviewCard
							list={[
								{ name: "Total", count: 0 },
								{ name: "Available", count: 0 },
								{ name: "Sold Out", count: 0 },
							]}
							name={"Property Overview"}
							icon={"property"}
						/>
						<OverviewCard
							list={[
								{ name: "Total", count: 0 },
								{ name: "New", count: 0 },
								{ name: "Active", count: 0 },
								{ name: "Inactive", count: 0 },
							]}
							name={"Customers Overview"}
							icon={"user-solid"}
						/>
					</Grid>
				</GridItem>
			</Grid>
			<Grid gap="20" mt="20" gridTemplateColumns={"auto auto 350px"}>
				<ListingOverview />
				<TotalOutstanding
					description="Total Outstanding Balance"
					subTitle="Outstanding Balance"
					hasMore
				/>
				<TotalOutstanding
					title="Top Selling"
					description="Total Sold"
					subTitle="Whole units sold"
					amountColor="#CBCBCB"
				/>
			</Grid>
		</Container>
	);
}
