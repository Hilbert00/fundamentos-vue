const pagesKey = "pages";

if (!window.localStorage.getItem(pagesKey)) {
    const response = await fetch("/pages.json");
    const json = await response.json();

    window.localStorage.setItem(pagesKey, JSON.stringify(json));
}

const pagesData = window.localStorage.getItem(pagesKey);
const pagesJSON = JSON.parse(pagesData);

export default {
    getAllPages() {
        return pagesJSON;
    },
    getSinglePage(index) {
        return pagesJSON[index];
    },
    editPage(index, pageObj) {
        pagesJSON[index] = pageObj;
        localStorage.setItem(pagesKey, JSON.stringify(pagesJSON));
    },
    addPage(pageObj) {
        pagesJSON.push(pageObj);
        localStorage.setItem(pagesKey, JSON.stringify(pagesJSON));
    },
    deletePage(index) {
        pagesJSON.splice(index, 1);
        localStorage.setItem(pagesKey, JSON.stringify(pagesJSON));
    },
};
