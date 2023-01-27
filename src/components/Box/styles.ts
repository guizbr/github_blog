import styled from 'styled-components'

export const BoxContainer = styled.section`
	width: 100%;
	max-width: 864px;
	margin: 0 auto;
	padding: 0 1.5rem;

	margin-top: -5.5rem;
`

export const BoxContent = styled.div`
	width: 100%;
	padding: 2rem;

	background: ${(props) => props.theme['blue-700']};
	box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
`
