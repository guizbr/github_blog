import styled from 'styled-components'

export const ProfileContainer = styled.div`
	width: 100%;
	display: flex;
	gap: 2rem;

	img {
		max-width: 140px;
		max-height: 140px;
		object-fit: cover;

		border-radius: 8px;
	}
`

export const ProfileContent = styled.div`
	width: 100%;
`

export const ProfileHeader = styled.header`
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.5rem;

	h1 {
		font-weight: 700;
		font-size: 1.5rem;
		line-height: 130%;

		color: ${(props) => props.theme['blue-050']};
	}

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

export const ProfileDescription = styled.div`
	margin-bottom: 1.5rem;
`

export const ProfileFooter = styled.footer`
	display: flex;
	gap: 1.5rem;

	span {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	svg {
		width: 1.25rem;
		height: 1.25rem;
		color: ${(props) => props.theme['blue-400']};
		line-height: 0;
	}
`

export const MainContainer = styled.main`
	display: flex;
	width: 100%;
	max-width: 864px;
	margin: 3rem auto 0;
	padding: 0 1.5rem;
`
