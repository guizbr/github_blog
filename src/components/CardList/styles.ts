import styled from 'styled-components'

export const CardListContent = styled.ul`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
	margin-bottom: 2rem;
`

export const ListItem = styled.li`
	max-width: 24.5rem;
	max-height: 16.25rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 2rem;
	gap: 1.125rem;

	background: ${(props) => props.theme['blue-600']};
	border-radius: 10px;
	border: 2px solid transparent;

	cursor: pointer;
	transition: 0.5s;

	header {
		display: flex;
		align-items: start;
		justify-content: space-between;

		h2 {
			font-weight: 700;
			font-size: 1.25rem;
			line-height: 160%;

			color: ${(props) => props.theme['blue-050']};
		}

		time {
			white-space: nowrap;
			margin-top: 0.25rem;
			margin-left: 1rem;

			font-size: 0.875rem;
			line-height: 160%;

			color: ${(props) => props.theme['blue-300']};
		}
	}

	&:hover {
		border: 2px solid ${(props) => props.theme['blue-400']};
	}
`

export const DescripitionPost = styled.p``
