import React from "react";
import Header from "./components/Header";
import { Box } from "@chakra-ui/react";
import { ChildrenProps } from "./utils/types";

export default function RootTemplate({ children }: ChildrenProps) {
	return (
		<Box className="min-h-screen" bgColor="bggrey.100">
			<Header />
			{children}
		</Box>
	);
}
