import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchContainer, SearchInput, SearchLabel } from './styles'
import { useEffect } from 'react'

const searchFormSchema = z.object({
	query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

interface SearchPostProps {
	filterPost: (query: string) => void
}

export function SearchPost({ filterPost }: SearchPostProps) {
	const { register, watch } = useForm<SearchFormInputs>({
		resolver: zodResolver(searchFormSchema),
	})

	const watchInput = watch('query')

	useEffect(() => {
		filterPost(watchInput)
	}, [watchInput, filterPost])

	return (
		<SearchContainer>
			<SearchLabel>
				Publicações <span>6 publicações</span>
			</SearchLabel>

			<SearchInput
				type="text"
				placeholder="Buscar conteúdo"
				{...register('query')}
			></SearchInput>
		</SearchContainer>
	)
}
