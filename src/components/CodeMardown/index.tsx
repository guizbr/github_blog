import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

export function CodeMarkdown({ children }: any) {
	return (
		<SyntaxHighlighter
			language="javascript"
			style={dracula}
			customStyle={{ borderRadius: 2 }}
		>
			{children}
		</SyntaxHighlighter>
	)
}
