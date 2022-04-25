import * as React from "react"
import { Base } from '../layouts/Base'
import { Routes, Route } from "react-router-dom";

import { PlanningPoker } from "../components/PlanningPoker";
import { PresentationForm } from "../components/forms/PresentationForm"

export const Router = () => {
	const [username, setUsername] = React.useState(localStorage.getItem('username'))

  return (
		<Routes>
			<Route path="/" element={<Base />} >
				{ !!username ? 
					<Route index element={<PlanningPoker />} />
					: <Route index element={<PresentationForm onChange={setUsername} />} />
				}
			</Route>
		</Routes>
)}
