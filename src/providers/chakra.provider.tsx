

import { ChakraProvider as Provider } from "@chakra-ui/react";

export function ChakraProvider({ children }: { children: React.ReactNode }) {
	const theme = {
		colors: {
			bggray: {
				100: "#FBFCFC",
				200: "#F5F5F5",
			},
			textgrey: {
				1: "#3D3D3D",
				2: "#191919",
			},
		},
	};
	return <Provider theme={theme}>{children}</Provider>;
}
