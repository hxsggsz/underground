import './index.css'

export const Loading: React.FC = () => {
  return (
    <svg width="400" height="100" viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Frame 1">
        <rect width="400" height="100" fill="#780000" />
        <rect id="barra" x="75.5" y="45.5" width="299" height="11" rx="1.5" fill="#D6D5C9" stroke="black" />
        <path id="loading" d="M82 44.5H101C101.828 44.5 102.5 45.1716 102.5 46V56C102.5 56.8284 101.828 57.5 101 57.5H82C81.1716 57.5 80.5 56.8284 80.5 56V46C80.5 45.1716 81.1716 44.5 82 44.5Z" fill="#18181b" stroke="black" />
      </g>
    </svg>
  )
}