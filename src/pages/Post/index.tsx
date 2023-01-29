import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Markdown from 'markdown-to-jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
	faCalendarDay,
	faComment,
	faChevronLeft,
	faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

import { Box } from '../../components/Box'
import { CodeMarkdown } from '../../components/CodeMardown'
import { PMarkdown } from '../../components/PMarkdown'

import { api } from '../../lib/axios'
import { formatDate } from '../../utils/FormatDate'

import { PostsType, repository, user } from '../Home'

import {
	HeaderNav,
	InfoFooter,
	PostArticle,
	PostDetailsContainer,
	PostDetailsContent,
	PostMain,
	PostTitle,
} from './styles'

export function Post() {
	const { postId } = useParams()
	const [loadingPost, setLoadingPost] = useState(true)
	const [errorPost, setErrorPost] = useState(false)
	const [post, setPost] = useState<PostsType>({
		number: 0,
		title: '',
		created_at: '',
		body: '',
		user: {
			login: '',
			html_url: '',
		},
		comments: 0,
	})

	const fetchPost = useCallback(async () => {
		setLoadingPost(true)
		setErrorPost(false)
		const response = await api
			.get(`/repos/${user}/${repository}/issues/${postId}`)
			.catch(function (error) {
				return error.toJSON()
			})

		if (response.status === 200) {
			setPost(response.data)
		} else {
			console.error(response)
			setErrorPost(true)
		}
		setTimeout(() => setLoadingPost(false), 1000)
	}, [postId])

	useEffect(() => {
		fetchPost()
	}, [fetchPost])

	return (
		<>
			{loadingPost === true && (
				<h1 style={{ textAlign: 'center', marginTop: 32 }}>Carregando...</h1>
			)}
			{errorPost === true && loadingPost === false && (
				<h1 style={{ textAlign: 'center', marginTop: 32 }}>
					Ocorreu um problema :(
				</h1>
			)}
			{loadingPost === false && errorPost === false && (
				<>
					<Box>
						<PostDetailsContainer>
							<HeaderNav>
								<a href="/">
									<FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
								</a>
								<a href={post.user.html_url} target="_blank" rel="noreferrer">
									VER NO GITHUB{' '}
									<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
								</a>
							</HeaderNav>

							<PostDetailsContent>
								<PostTitle>{post.title}</PostTitle>

								<InfoFooter>
									<span>
										<FontAwesomeIcon icon={faGithub} /> {post.user.login}
									</span>
									<span>
										<FontAwesomeIcon icon={faCalendarDay} />{' '}
										{formatDate(post.created_at)}
									</span>
									<span>
										<FontAwesomeIcon icon={faComment} />
										{post.comments !== 1
											? `${post.comments} comentários`
											: `${post.comments} comentário`}
									</span>
								</InfoFooter>
							</PostDetailsContent>
						</PostDetailsContainer>
					</Box>

					<PostMain>
						<PostArticle>
							<Markdown
								options={{
									overrides: {
										code: {
											component: CodeMarkdown,
										},
										p: {
											component: PMarkdown,
										},
									},
								}}
							>
								{post.body}
							</Markdown>
						</PostArticle>
					</PostMain>
				</>
			)}
		</>
	)
}
