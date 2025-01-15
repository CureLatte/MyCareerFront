'use client';
import { DARK_BLUE_2, WHITE_0 } from '@/const/Color';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React from 'react';
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';
// import '@/app/no.css';

export default function ResumeMarkdown({ content }: { content: string }) {
	return (
		<MDEditor.Markdown
			style={{
				maxWidth: '100%',
				width: '100%',
				justifySelf: 'center',
				// backgroundColor: DARK_BLUE_2,
				color: 'white',
				borderRadius: '20px',
				padding: '20px',
				height: '600px',
				overflow: 'auto',
				boxSizing: 'border-box',
				scrollbarColor: 'transparent',
			}}
			className={'markdownDiv'}
			data-color-mode={'dark'}
			source={content}
		/>
	);
}
