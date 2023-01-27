import { ReactNode } from 'react'
import { BoxContainer, BoxContent } from './styles'

interface BoxProps {
	children: ReactNode
}

export function Box({ children }: BoxProps) {
	return (
		<BoxContainer>
			<BoxContent>{children}</BoxContent>
		</BoxContainer>
	)
}
