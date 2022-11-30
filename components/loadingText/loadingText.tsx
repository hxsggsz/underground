'use client';
import Typist from "react-typist-component"

interface TextTypes {
  first: string
  second?: string
  third?: string
}

export const LoadingText: React.FC<TextTypes> = ({ first, second, third }: TextTypes) => (
  <Typist cursor='|' loop={true}>
    <div className='text-center text-just-white font-bold text-xl'>
      <h1>{first}</h1>
      <Typist.Delay ms={500} />

      <h1>{second}</h1>
      <Typist.Delay ms={500} />
      <Typist.Backspace count={11} />

      <h1>{third}</h1>
      <Typist.Delay ms={500} />
      <Typist.Backspace count={20} />
    </div>
  </Typist>
)