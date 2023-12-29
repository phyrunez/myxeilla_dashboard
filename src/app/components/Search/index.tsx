import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { twMerge } from "tailwind-merge";
import Svg from "../Svg";

interface SearchProps {
	className?: string;
}
export default function index({ className }: SearchProps) {
	return (
		<Flex
			borderRadius={12}
			className={twMerge(
				"bg-[color:var(--bg-grey)] h-[43px] border-[color:var(--border-grey)] border w-[319px] overflow-hidden px-3",
				className,
			)}
			alignItems="center"
		>
			<input
				type="text"
				className={twMerge(
					"bg-transparent placeholder:text-[color:var(--text-grey)] w-full h-full outline-none border-0",
				)}
				placeholder="Search... properties, customers here"
			/>
			<Svg name="search" />
		</Flex>
	);
}
