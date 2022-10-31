import lunr from 'lunr';

export function documentsToDict(documents) {
    const documentDict = documents.reduce((dict, document) => {
        dict[document.id] = document;
        return dict;
    }, {});
    return documentDict;
}

export function createIndex(documents, fields) {
    const index = lunr(function() {
        this.ref('id');
        fields.forEach(field => this.field(field));
        documents.forEach((doc) => this.add(doc));
    });
    return index;
}