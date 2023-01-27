import styled from 'styled-components'

export const SearchContainer = styled.form`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;

	width: 100%;
	max-width: 864px;
	margin: 4.5rem auto 0;
	padding: 0 1.5rem;
`

export const SearchLabel = styled.label`
	display: flex;
	justify-content: space-between;

	font-weight: 700;
	font-size: 1.125rem;
	line-height: 160%;

	color: ${(props) => props.theme['blue-100']};

	> span {
		font-weight: 400;
		font-size: 0.875rem;

		text-align: right;

		color: ${(props) => props.theme['blue-300']};
	}
`

export const SearchInput = styled.input`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	padding: 0.75rem 1rem;

	background: ${(props) => props.theme['blue-900']};
	color: ${(props) => props.theme['blue-200']};

	border: 1px solid ${(props) => props.theme['blue-500']};
	border-radius: 6px;

	&:focus {
		border-color: ${(props) => props.theme['blue-light']};
		transition: border-color 0.2s;
	}
`
