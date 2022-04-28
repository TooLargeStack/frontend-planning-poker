import * as React from "react"
import { Outlet } from "react-router-dom";
import {
  Box,
  Stack,
	Container
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../ColorModeSwitcher"

export const Base = () => {

	return (
		<Box textAlign="center" fontSize="xl">
      <Stack align="end" justify="end" h="5vh">
        <ColorModeSwitcher justifySelf="flex-end" />
      </Stack>
      <Container w='xl' h="95vh">
        <Outlet />
      </Container>
    </Box>
	)
}
