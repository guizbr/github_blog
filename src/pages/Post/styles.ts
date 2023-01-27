import styled from 'styled-components'

export const PostDetailsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
`

export const HeaderNav = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	a {
		text-decoration: none;

		font-weight: 700;
		font-size: 0.75rem;
		line-height: 160%;

		color: ${(props) => props.theme['blue-light']};

		display: flex;
		gap: 0.5rem;
		align-items: center;

		border-bottom: 1px solid transparent;

		svg {
			width: 0.75rem;
			height: 0.75rem;
			line-height: 0;
		}

		&:hover {
			border-bottom: 1px solid ${(props) => props.theme['blue-light']};
		}
	}
`

export const PostDetailsContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`

export const PostTitle = styled.h1`
	font-weight: 700;
	font-size: 1.5rem;
	line-height: 130%;

	color: ${(props) => props.theme['blue-050']};
`

export const InfoFooter = styled.footer`
	display: flex;
	gap: 1.5rem;

	span {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: ${(props) => props.theme['blue-300']};
	}

	svg {
		width: 1.25rem;
		height: 1.25rem;
		color: ${(props) => props.theme['blue-400']};
		line-height: 0;
	}
`

export const PostMain = styled.main`
	display: flex;
	width: 100%;
	max-width: 864px;
	margin: 0 auto;
	padding: 2.5rem 3.5rem;
`

export const PostArticle = styled.article`
	line-height: 160%;

	h2:not(:first-child),
	h3:not(:first-child) {
		margin-top: 1.5rem;
	}
	h2,
	h3 {
		margin-bottom: 0.5rem;
	}

	pre {
		display: flex;
		align-items: center;
		margin: 0.5rem 0;
		padding: 1rem;

		background: ${(props) => props.theme['blue-600']};
		border-radius: 2px;
	}

	code {
		font-family: 'Fira Code', monospace;
		margin: 0.125rem;
		padding: 0.25rem 0.5rem;
		border-radius: 2px;

		background: ${(props) => props.theme['blue-600']};
		color: ${(props) => props.theme.white};
	}

	ul {
		list-style-type: disc;
		margin: 0.75rem 0;
		padding-left: 2.5rem;
	}

	li {
		margin: 0.25rem 0;
	}

	img {
		width: 100%;
		height: 100%;
		margin: 1rem 0;
	}
`
