import { Box } from "@chakra-ui/react";
import React from "react";
import { ChildrenProps } from "../../utils/types";

export default function index({
	className,
	children,
}: { className?: string } & ChildrenProps) {
	return (
		<Box
			boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.02)"
			bgColor="white"
			className={className}
			borderRadius={16}
		>
			{children}
		</Box>
	);
}
