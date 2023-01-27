import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
	faCalendarDay,
	faComment,
	faChevronLeft,
	faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { Box } from '../../components/Box'
import {
	HeaderNav,
	InfoFooter,
	PostArticle,
	PostDetailsContainer,
	PostDetailsContent,
	PostMain,
	PostTitle,
} from './styles'
import { useEffect, useState } from 'react'

export function Post() {
	const [txt, setTxt] = useState('')

	async function teste() {
		const response = await fetch(
			'https://api.github.com/search/issues?q=repo:guizbr/blog-challenge',
		)
		const data = await response.json()
		const parse = marked.parse(data.items[2].body)
		const clean = DOMPurify.sanitize(parse)
		setTxt(clean)
		console.log(clean)
	}

	useEffect(() => {
		teste()
	}, [])

	return (
		<>
			<Box>
				<PostDetailsContainer>
					<HeaderNav>
						<a href="#">
							<FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
						</a>
						<a href="#">
							VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
						</a>
					</HeaderNav>

					<PostDetailsContent>
						<PostTitle>JavaScript data types and data structures</PostTitle>

						<InfoFooter>
							<span>
								<FontAwesomeIcon icon={faGithub} /> guizbr
							</span>
							<span>
								<FontAwesomeIcon icon={faCalendarDay} /> Há 1 dia
							</span>
							<span>
								<FontAwesomeIcon icon={faComment} /> 5 comentários
							</span>
						</InfoFooter>
					</PostDetailsContent>
				</PostDetailsContainer>
			</Box>

			<PostMain>
				<PostArticle dangerouslySetInnerHTML={{ __html: txt }}></PostArticle>
			</PostMain>
		</>
	)
}
