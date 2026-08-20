import { pingCodeClient } from '../client/index.js';
export async function createWikiSpace(params) {
    return pingCodeClient.post('/v1/wiki/spaces', {
        name: params.name,
        description: params.description ?? '',
        visibility: params.visibility ?? 'private',
    });
}
export async function listWikiSpaces(params = {}) {
    const query = new URLSearchParams();
    query.append('page_index', String(params.page_index ?? 0));
    query.append('page_size', String(params.page_size ?? 100));
    const queryString = query.toString() ? `?${query.toString()}` : '';
    return pingCodeClient.get(`/v1/wiki/spaces${queryString}`);
}
export async function listWikiPages(params) {
    const query = new URLSearchParams();
    query.append('space_id', params.space_id);
    query.append('page_index', String(params.page_index ?? 0));
    query.append('page_size', String(params.page_size ?? 100));
    const queryString = query.toString() ? `?${query.toString()}` : '';
    return pingCodeClient.get(`/v1/wiki/pages${queryString}`);
}
export async function getWikiPage(params) {
    const formatType = params.format_type ?? 'markdown';
    return pingCodeClient.get(`/v1/wiki/pages/${params.page_id}/content?format_type=${formatType}`);
}
export async function createWikiPage(params) {
    const body = {
        space_id: params.space_id,
        name: params.name,
    };
    if (params.parent_id)
        body.parent_id = params.parent_id;
    if (params.content) {
        body.content = params.content;
        body.format_type = params.format_type ?? 'markdown';
    }
    return pingCodeClient.post('/v1/wiki/pages', body);
}
export async function updateWikiPage(params) {
    const body = {};
    if (params.name)
        body.name = params.name;
    if (params.parent_id)
        body.parent_id = params.parent_id;
    return pingCodeClient.patch(`/v1/wiki/pages/${params.page_id}`, body);
}
export async function updateWikiPageContent(params) {
    return pingCodeClient.put(`/v1/wiki/pages/${params.page_id}/content`, {
        content: params.content,
        format_type: params.format_type ?? 'markdown',
    });
}
export async function deleteWikiPage(params) {
    return pingCodeClient.delete(`/v1/wiki/pages/${params.page_id}`);
}
export async function addWikiMembers(params) {
    const results = [];
    for (const uid of params.user_ids) {
        const body = { user_id: uid };
        if (params.role_id)
            body.role_id = params.role_id;
        const result = await pingCodeClient.post(`/v1/wiki/spaces/${params.space_id}/members`, body);
        results.push(result);
    }
    return results.length === 1 ? results[0] : results;
}
//# sourceMappingURL=wiki.js.map