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

export function Home() {
	function handleFilterPost(query: string) {
		console.log(query)
	}

	return (
		<>
			<Box>
				<ProfileContainer>
					<img
						src="https://avatars.githubusercontent.com/u/55899678?v=4"
						alt="Foto de perfil do github"
					></img>

					<ProfileContent>
						<ProfileHeader>
							<h1>Guilherme Camargo</h1>
							<a href="#">
								GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
							</a>
						</ProfileHeader>
						<ProfileDescription>
							<span>
								Full Stack Developer | React | JavaScript | TypeScript | NodeJS
								| C#
							</span>
						</ProfileDescription>
						<ProfileFooter>
							<span>
								<FontAwesomeIcon icon={faGithub} />
								guizbr
							</span>
							<span>
								<FontAwesomeIcon icon={faBuilding} />
								Rocketseat
							</span>
							<span>
								<FontAwesomeIcon icon={faUserGroup} />
								32 Seguidores
							</span>
						</ProfileFooter>
					</ProfileContent>
				</ProfileContainer>
			</Box>

			<SearchPost filterPost={handleFilterPost}></SearchPost>

			<MainContainer>
				<CardList></CardList>
			</MainContainer>
		</>
	)
}
