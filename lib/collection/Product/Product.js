Products = new Mongo.Collection('product');
//Basic product class with all information that is needed by all items
Product = Astro.Class({
    name: 'Product',
    collection: Products,
    typeField: '_type',
    fields: {
        name: 'string', // Name of product aka sku
        categoryId: 'string', // CategoryID
        description_pl: 'string', //description in polish, for seo, websites etc
        description_en: 'string', // description in english for seo, websites etc
        weight: 'number', //weight in grams
        length: 'number', //length in milimeters
        width: 'number', //width in milimeters
        height: 'number', //height in minimeters
        brand: 'string', //brand for knowing if it's for pendrive etc
        active: 'boolean', //is active
        name_url_pl: 'string', //name url in polish for website usage
        name_url_en: 'string', //name url in english for website usage
        meta_title_pl: 'string', //meta title in polish
        meta_title_en: 'string', //meta title in english
        meta_description_pl : 'string', //meta description in polish
        meta_description_en : 'string' //meta description in english
    },
    methods: {

    },
    behaviors: ['timestamp'] // Add "timestamp" behavior that adds "createdAt" and "updatedAt" fields.
});


Products.allow({
    update: function () {
        return isAdmin();
    },
    insert: function () {
        return isAdmin();
    },
    remove: function () {
        return isAdmin();
    }
});