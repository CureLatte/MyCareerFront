export type ResumeInfoType = {
	resumeId: number;
	branch: string;
	title: string;
	createdAt: string;
	updatedAt: string;
};

export type ResumeDetailInfoType = {
	resumeId: number;
	branch: string;
	title: string;
	content: string;
	createdAt: string;
	updatedAt: string;
};

export type ResumeFilterType = {
	type: string;
	branch: string[];
	order: string;
	orderType: number;
};
