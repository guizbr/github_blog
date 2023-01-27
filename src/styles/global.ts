import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:focus {
			outline: 0;
			box-shadow: 0 0 0 2px ${(props) => props.theme['blue-light']};
	}

	body {
		background-color: ${(props) => props.theme['blue-800']};
		color: ${(props) => props.theme['blue-200']};
		-webkit-font-smoothing: antialiased;
	}

	body, input, textarea, button {
		font: 400 1rem 'Nunito', sans-serif;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
`
