import React, { useState, useRef } from "react";
import {
	Text,
	Drawer,
	DrawerOverlay,
	DrawerHeader,
	DrawerCloseButton,
	DrawerContent,
	DrawerBody,
} from "@chakra-ui/react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface CalenderProps {
	isOpen: boolean;
	onClose: () => void;
}
export default function Calender({ isOpen, onClose }: CalenderProps) {
	const btnRef = React.useRef();
	const [date, setDate] = useState(new Date());

	const onChange = (newDate: Date) => {
		setDate(newDate);
	};
	return (
		<Drawer
			isOpen={isOpen}
			placement="right"
			onClose={onClose}
			finalFocusRef={btnRef as any}
		>
			<DrawerOverlay />
			<DrawerContent className="bg-white w-[400px]" maxW="350px">
				<DrawerHeader
					px="24"
					display="flex"
					alignItems="center"
					justifyContent="space-between"
					h="50px"
					color="white"
					className="bg-[color:var(--bg-grey-2)]"
					py="13.15"
				>
					<Text>Calender</Text>
					<DrawerCloseButton />
				</DrawerHeader>

				<DrawerBody className="h-full">
					<Calendar
						// onChange={onChange}
						value={date}
						className="h-full w-full border-0 bg-black"
					/>
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	);
}
