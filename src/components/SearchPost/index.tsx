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
}

export function SearchPost({ filterPost }: SearchPostProps) {
	const { register } = useForm<SearchFormInputs>({
		resolver: zodResolver(searchFormSchema),
	})

	function handleFilterPost(query: string) {
		filterPost(query)
	}

	return (
		<SearchContainer>
			<SearchLabel>
				Publicações <span>6 publicações</span>
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
