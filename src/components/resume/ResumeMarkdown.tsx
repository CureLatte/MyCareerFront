'use client';
import { DARK_BLUE_2, WHITE_0 } from '@/const/Color';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React from 'react';
import styled from 'styled-components';
// import '@/app/no.css';

export default function ResumeMarkdown({ content }: { content: string }) {
	const backGroundStyle = styled.div``;

	return (
		<div
			style={{
				maxWidth: '100%',
				width: '100%',
				justifySelf: 'center',
				backgroundColor: DARK_BLUE_2,
				color: 'white',
				borderRadius: '20px',
				padding: '20px',
				minHeight: '500px',
				maxHeight: '100%',
				overflow: 'auto',
				boxSizing: 'border-box',
				scrollbarColor: 'transparent',
			}}
		>
			<Markdown
				rehypePlugins={[remarkGfm]}
				components={{
					code(props) {
						const { children, className, node, ...rest } = props;
						const match = /language-(\w+)/.exec(className || '');

						console.log(`match: ${match}`, match, rest);

						return (
							<SyntaxHighlighter
								{...rest}
								PreTag="div"
								language={
									match?.length || 0 > 0 ? match[1] : 'shell'
								}
								style={dracula}
							>
								{String(children).replace(/\n$/, '')}
							</SyntaxHighlighter>
						);
					},
				}}
			>
				{content}
			</Markdown>
		</div>
	);
}
