import * as React from "react"
import { Base } from './layouts/Base'
import { ChakraProvider, theme } from "@chakra-ui/react"
import {io} from "socket.io-client"


const socket = io('http://localhost:5000', {
  withCredentials: true,
  transports: ["websocket", "polling"]
});
console.log(socket)



export const App = () => {
  return (
  <ChakraProvider theme={theme}>
    <Base />
  </ChakraProvider>
)}
