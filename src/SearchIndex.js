import lunr from 'lunr';

class SearchIndex {

    #index;
    #documentDict;

    constructor(documents, fields) {
        this.index = lunr(function() {
            this.ref('id');
            fields.forEach(field => this.field(field));
            this.pipeline.remove(lunr.stopWordFilter);
            documents.forEach((doc) => this.add(doc));
        });

        this.documentDict = documents.reduce((dict, document) => {
            dict[document.id] = document;
            return dict;
        }, {});
    }

    search(query) {
        const results = this.index.search(query);
        return results.map(result => ({ 
            ...result, 
            document: this.documentDict[result.ref]
        }));
    }

}

export default SearchIndex;