export interface CreateWikiSpaceParams {
    name: string;
    description?: string;
    visibility?: 'private' | 'public';
}
export interface ListWikiSpacesParams {
    page_index?: number;
    page_size?: number;
}
export interface ListWikiPagesParams {
    space_id: string;
    page_index?: number;
    page_size?: number;
}
export interface CreateWikiPageParams {
    space_id: string;
    name: string;
    parent_id?: string;
    content?: string;
    format_type?: 'text' | 'markdown' | 'html';
}
export interface GetWikiPageParams {
    page_id: string;
    format_type?: 'markdown' | 'html';
}
export declare function createWikiSpace(params: CreateWikiSpaceParams): Promise<unknown>;
export declare function listWikiSpaces(params?: ListWikiSpacesParams): Promise<unknown>;
export declare function listWikiPages(params: ListWikiPagesParams): Promise<unknown>;
export declare function getWikiPage(params: GetWikiPageParams): Promise<unknown>;
export declare function createWikiPage(params: CreateWikiPageParams): Promise<unknown>;
export interface UpdateWikiPageParams {
    page_id: string;
    name?: string;
    parent_id?: string;
}
export declare function updateWikiPage(params: UpdateWikiPageParams): Promise<unknown>;
export interface UpdateWikiPageContentParams {
    page_id: string;
    content: string;
    format_type?: 'text' | 'markdown' | 'html';
}
export declare function updateWikiPageContent(params: UpdateWikiPageContentParams): Promise<unknown>;
export interface DeleteWikiPageParams {
    page_id: string;
}
export declare function deleteWikiPage(params: DeleteWikiPageParams): Promise<unknown>;
export interface AddWikiMembersParams {
    space_id: string;
    user_ids: string[];
    role_id?: string;
}
export declare function addWikiMembers(params: AddWikiMembersParams): Promise<unknown>;
//# sourceMappingURL=wiki.d.ts.map