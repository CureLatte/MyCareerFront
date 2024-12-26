export type ResumeInfoType = {
	resume_id: number;
	branch: string;
	title: string;
	createdAt: string;
	updatedAt: string;
};

export type ResumeFilterType = {
	type: string;
	branch: string[];
	order: string;
	orderType: number;
};
