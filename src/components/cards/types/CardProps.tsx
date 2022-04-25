import React, { InputHTMLAttributes } from "react"

export interface CardProps extends InputHTMLAttributes<HTMLInputElement> {
	title?: string,
	desc?: string,
	w?: string
	bg?: string,
}