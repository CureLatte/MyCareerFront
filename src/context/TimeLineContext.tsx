import { createContext, useState } from 'react';

const TimeLineContext = createContext({
	width: 1000,
	rowWidth: 50,
	gapWidth: 20,
});

function TimeLineProvider({ children }: { children: React.ReactNode }) {
	const [styleState, setStyleState] = useState<{
		rowWidth: number;
		gapWidth: number;
		width: number;
	}>({
		rowWidth: 50,
		gapWidth: 20,
		width: 500,
	});

	return (
		<TimeLineContext.Provider value={styleState}>
			{children}
		</TimeLineContext.Provider>
	);
}

export { TimeLineContext, TimeLineProvider };
