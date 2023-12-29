"use client";

/* eslint-disable react/jsx-no-undef */
import { Flex, Link, Text, IconButton, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Svg from "../Svg";
import Calender from "../Calender";

export default function Header() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<header>
			<Flex
				height={"82px"}
				bgColor={"black"}
				className="px-[79px] w-full"
				alignItems="center"
				justifyContent="space-between"
			>
				<Link href="/">
					<Svg name="logo" />
					<Text color="white">For Mainstone</Text>
				</Link>
				<Flex alignItems="center">
					<IconButton aria-label="add" icon={<Svg name="add" />} ml="24" />
					<IconButton
						aria-label="calendar"
						icon={<Svg name="calendar" />}
						ml="24"
						onClick={onOpen}
					/>
					<IconButton
						aria-label="notification"
						icon={<Svg name="notification" />}
						ml="24"
					/>
					<Flex ml="45" alignItems="center" color="white">
						<Svg name="avatar" />
						<Text mx="14" fontWeight={500} fontSize={16}>
							Ahmed Ali
						</Text>
						<Svg name="dropdown" />
					</Flex>
				</Flex>
			</Flex>
			<Calender isOpen={isOpen} onClose={onClose} />
		</header>
	);
}
