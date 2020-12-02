const objectToSearch = (object) => {
    const queryParams = [];
    for (let i in object) {
        queryParams.push(encodeURIComponent(i)+ '='+ encodeURIComponent(object[i]));
    }
    return '?'+queryParams.join('&');
}

const searchToObject = (search) => {
    const query = new URLSearchParams(search)
    const object = {};
    for (let param of query.entries()) {
        object[param[0]] = +param[1];
    }
    return object
}

const query = {
    objectToSearch: objectToSearch,
    searchToObject: searchToObject
}

export default query;
