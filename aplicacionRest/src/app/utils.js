export const getIdFromUrl = (url) => {
    const url_splited = url.split('/');
    const w = url_splited.length;
    return url_splited[w - 2];
}

export const getPaginationLinks = (elementsAmount, elementsPerPage, firstElement = 1) => {
    const pagesAmount = elementsAmount / elementsPerPage;
    const linksData = []
    for (let i = 0; i < pagesAmount; i++) {
        linksData.push(firstElement + i);
    }
    return linksData;
};