import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchContainer, SearchInput, SearchLabel } from './styles'

const searchFormSchema = z.object({
	query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

interface SearchPostProps {
	filterPost: (query: string) => void
	postQuantity: number
}

export function SearchPost({ filterPost, postQuantity }: SearchPostProps) {
	const { register } = useForm<SearchFormInputs>({
		resolver: zodResolver(searchFormSchema),
	})

	function handleFilterPost(query: string) {
		filterPost(query)
	}

	return (
		<SearchContainer>
			<SearchLabel>
				Publicações{' '}
				<span>
					{postQuantity !== 1
						? `${postQuantity} publicações`
						: `${postQuantity} publicação`}
				</span>
			</SearchLabel>

			<SearchInput
				type="text"
				placeholder="Buscar conteúdo"
				{...register('query', {
					onChange: (e: React.FormEvent<HTMLInputElement>) =>
						handleFilterPost(e.currentTarget.value),
				})}
			></SearchInput>
		</SearchContainer>
	)
}
