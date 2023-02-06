import { useCallback, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
	faArrowUpRightFromSquare,
	faBuilding,
	faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

import { Box } from '../../components/Box'
import {
	MainContainer,
	ProfileContainer,
	ProfileContent,
	ProfileDescription,
	ProfileFooter,
	ProfileHeader,
} from './styles'
import { SearchPost } from '../../components/SearchPost'
import { CardList } from '../../components/CardList'
import { api } from '../../lib/axios'

interface UserType {
	login: string
	avatar_url: string
	html_url: string
	bio: string | null
	name: string
	company: string | null
	followers: number
}

export interface PostsType {
	number: number
	title: string
	created_at: string
	body: string
	user: {
		login: string
		html_url: string
	}
	comments: 0
}

export const user = 'guizbr'
export const repository = 'blog-challenge'

export function Home() {
	const [infoUser, setInfoUser] = useState<UserType>({
		login: '',
		avatar_url: '',
		html_url: '',
		bio: null,
		name: '',
		company: null,
		followers: 0,
	})
	const [loadingUser, setLoadingUser] = useState(true)
	const [errorUser, setErrorUser] = useState(false)
	const [posts, setPosts] = useState<PostsType[]>([])
	const [loadingPosts, setLoadingPosts] = useState(true)
	const [errorPosts, setErrorPosts] = useState(false)

	async function fetchUser() {
		setLoadingUser(true)
		setErrorUser(false)

		const response = await api.get(`/users/${user}`).catch(function (error) {
			return error.toJSON()
		})

		if (response.status === 200) {
			setInfoUser(response.data)
		} else {
			console.error(response)
			setErrorUser(true)
		}
		setTimeout(() => setLoadingUser(false), 1000)
	}

	const fetchPosts = useCallback(async (query?: string) => {
		setLoadingPosts(true)
		setErrorPosts(false)
		const response = await api
			.get('/search/issues', {
				params: {
					q: `${query}repo:${user}/${repository}`,
				},
			})
			.catch(function (error) {
				return error.toJSON()
			})

		if (response.status === 200) {
			setPosts(response.data.items)
		} else {
			console.error(response)
			setErrorPosts(true)
		}
		setTimeout(() => setLoadingPosts(false), 1000)
	}, [])

	useEffect(() => {
		fetchUser()
		fetchPosts('')
	}, [fetchPosts])

	function handleFilterPost(query: string) {
		fetchPosts(query)
	}

	return (
		<>
			<Box>
				<ProfileContainer>
					{loadingUser === true && <span>Carregando...</span>}
					{errorUser === true && loadingUser === false && (
						<span>Ocorreu um problema :(</span>
					)}
					{loadingUser === false && errorUser === false && (
						<>
							<img
								src={infoUser.avatar_url}
								alt="Foto de perfil do github"
							></img>

							<ProfileContent>
								<ProfileHeader>
									<h1>{infoUser.name}</h1>
									<a href={infoUser.html_url} target="_blank" rel="noreferrer">
										GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
									</a>
								</ProfileHeader>
								<ProfileDescription>
									<span>{infoUser.bio}</span>
								</ProfileDescription>
								<ProfileFooter>
									<span>
										<FontAwesomeIcon icon={faGithub} />
										{infoUser.login}
									</span>
									<span>
										<FontAwesomeIcon icon={faBuilding} />
										{infoUser.company !== null ? infoUser.company : '-'}
									</span>
									<span>
										<FontAwesomeIcon icon={faUserGroup} />
										{infoUser.followers !== 1
											? `${infoUser.followers} seguidores`
											: `${infoUser.followers} seguidor`}
									</span>
								</ProfileFooter>
							</ProfileContent>
						</>
					)}
				</ProfileContainer>
			</Box>

			<SearchPost
				filterPost={handleFilterPost}
				postQuantity={posts.length}
			></SearchPost>

			<MainContainer>
				{loadingPosts === true && (
					<h1 style={{ marginTop: 20 }}>Carregando...</h1>
				)}
				{errorPosts === true && loadingPosts === false && (
					<h1 style={{ marginTop: 20 }}>Ocorreu um problema :(</h1>
				)}
				{loadingPosts === false && errorPosts === false && (
					<CardList posts={posts}></CardList>
				)}
			</MainContainer>
		</>
	)
}
