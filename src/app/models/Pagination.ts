export interface Pagination {
	next?: {
		page: number;
		limit: number;
	};
	prev?: {
		page: number;
		limit: number;
	};
}
