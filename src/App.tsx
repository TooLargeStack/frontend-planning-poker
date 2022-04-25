import * as React from "react"
import { Router } from './router'
import {
  ChakraProvider,
  theme
} from "@chakra-ui/react"

export const App = () => {
  return (
  <ChakraProvider theme={theme}>
    <Router />
  </ChakraProvider>
)}
