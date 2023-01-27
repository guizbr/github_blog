import styled from 'styled-components'

import coverImg from '../../assets/Cover.svg'

export const HeaderContainer = styled.header`
	height: 18.5rem;
	background-image: url(${coverImg});
	background-repeat: no-repeat;
	background-size: 100%;
`

export const HeaderContent = styled.div`
	width: 100%;
	max-width: 864px;
	margin: 0 auto;
	padding: 4rem 1.5rem 0;
	display: flex;
	justify-content: center;
	align-items: center;
`
