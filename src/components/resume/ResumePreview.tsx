'use client';
import styled from 'styled-components';
import MTextWhite from '@/components/text/MTextWhite';
import React, { useEffect, useState } from 'react';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { DARK_BLUE_2, DARK_BLUE_5 } from '@/const/Color';

export default function ResumePreview() {
	const [postData, setPostData] = useState<any>({});

	const BackGroundStyle = styled.div`
		// background-color: ${DARK_BLUE_5};
	`;

	useEffect(() => {
		getData().then(() => {
			console.log('done');
		});
	}, []);

	const getData = async () => {
		const content = `
# 대제목

## 소제목

### 소제목 2


*** 

- [ ] 리스트 11
	- [ ] 리스트 11
	
> line



~~~js
console.log('It works!')
~~~


~~~ 
hello
~~~


~~~ 
hello
~~~

~~~ 
hello
~~~

~~~ 
hello
~~~

~~~
hello
~~~

~~~ 
hello
~~~


그래서~~

~~~mysql
hello
select * from database;
~~~


 - heloow

	* hellow 22

		`;

		const matterResult = matter(content);

		const processedContent = await remark()
			.use(html)
			.process(matterResult.content);
		const contentHtml = processedContent.toString();

		console.log(`cotentHtml: ${contentHtml}`);
		console.log(
			`matterResult: ${matterResult.data.toString()}`,
			matterResult,
		);

		setPostData({
			test: content,
			contentHtml,
			...matterResult.data,
		});

		// const testPath = fs.readFileSync('./');
	};

	return (
		<BackGroundStyle>
			<div
				style={{
					backgroundColor: DARK_BLUE_2,
					width: '80px',
					height: '30px',
					borderRadius: '15px',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					marginBottom: '20px',
				}}
			>
				<MTextWhite text={'미리보기'}></MTextWhite>
			</div>

			<div
				style={{
					width: '100%',
					justifySelf: 'center',
					backgroundColor: DARK_BLUE_2,
					color: 'white',
					borderRadius: '20px',
					padding: '20px',
					maxHeight: '700px',
					overflowY: 'auto',
					boxSizing: 'border-box',
					scrollbarColor: 'transparent',
				}}
			>
				<Markdown
					rehypePlugins={[remarkGfm]}
					components={{
						code(props) {
							const { children, className, node, ...rest } =
								props;
							const match = /language-(\w+)/.exec(
								className || '',
							);

							console.log(`match: ${match}`, match, rest);

							return (
								<SyntaxHighlighter
									{...rest}
									PreTag="div"
									language={
										match?.length || 0 > 0
											? match[1]
											: 'shell'
									}
									style={dracula}
								>
									{String(children).replace(/\n$/, '')}
								</SyntaxHighlighter>
							);
						},
					}}
				>
					{postData.test}
				</Markdown>
			</div>
		</BackGroundStyle>
	);
}
