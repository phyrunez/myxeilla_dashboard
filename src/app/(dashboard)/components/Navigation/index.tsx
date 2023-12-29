import { Box, Card, Flex } from "@chakra-ui/react";
import React from "react";
import NavigationItem from "../NavigationItem";
import Search from "../../../components/Search";

export default function index() {
	return (
		<Flex
			h="67"
			boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.02)"
			bgColor="white"
			px="78"
			alignItems="center"
			justifyContent="space-between"
		>
			<NavigationItem active={true} name={"dashboard"} icon="home" />
			<NavigationItem active={false} name={"Listings"} icon="marker" />
			<NavigationItem active={false} name={"Users"} icon="user" />
			<NavigationItem active={false} name={"Account"} icon="wallet" />
			<NavigationItem active={false} name={"Request"} icon="calender-outline" />
			<NavigationItem active={false} name={"Settings"} icon="settings" />
			<Search />
		</Flex>
	);
}
