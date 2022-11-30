'use client';
import { ReactNode } from "react";
import Typist from "react-typist-component"

interface TextProps {
  first: string
  second?: string
}

export const Text = ({ first, second }: TextProps) => (
  <Typist loop={true}>
    <h1>{first}</h1>
    <Typist.Delay ms={1000} />
    <Typist.Backspace count={20} />

    <h1>{second}</h1>
    <Typist.Delay ms={1000} />
    <Typist.Backspace count={20} />
  </Typist>
)