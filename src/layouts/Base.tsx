import * as React from "react"
import { Routes, Route } from "react-router-dom";
import {
  Box,
  Grid,
	Container
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { PresentationForm } from '../components/forms/PresentationForm'

export const Base = () => {

	return (
		<Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Container maxW="lg">
					<Routes>
						<Route path="/" element={<PresentationForm />} />
						<Route path="/test" element={<h1>test</h1>} />
					</Routes>
        </Container>
      </Grid>
    </Box>
	)
}
