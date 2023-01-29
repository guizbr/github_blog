import DOMPurify from 'dompurify'
import { marked } from 'marked'
import { formatDate } from '../../utils/FormatDate'
import { CardListContent, DescripitionPost, ButtonListItem } from './styles'

interface CardListProps {
	posts: {
		number: number
		title: string
		created_at: string
		body: string
	}[]
}

export function CardList({ posts }: CardListProps) {
	function trasnformMarkdownToText(mark: string) {
		const plainText = marked(mark)
		const clean = DOMPurify.sanitize(plainText)
		const text = new DOMParser().parseFromString(clean, 'text/html').body
			.textContent
		return text
	}

	return (
		<CardListContent>
			{posts.map((post) => (
				<li key={post.number}>
					<ButtonListItem to={`/post/${post.number}`}>
						<header>
							<h2>{post.title}</h2>

							<time>{formatDate(post.created_at)}</time>
						</header>

						<DescripitionPost>
							{trasnformMarkdownToText(post.body)!.length > 185
								? trasnformMarkdownToText(post.body)!.substring(0, 183) + '...'
								: trasnformMarkdownToText(post.body)}
						</DescripitionPost>
					</ButtonListItem>
				</li>
			))}
		</CardListContent>
	)
}
