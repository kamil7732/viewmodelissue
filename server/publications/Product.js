Meteor.publish('product-by-id', function (id) {
    return Products.find({_id: id});
});
//-------------------------------------------------------
Meteor.publish('product-all-ids-fields1', function (ids) {
    return Products.find({_id: {$in: ids}},{fields: {name:1}});
});

Meteor.publish('product-flashdrive', function () {
    return Products.find({_type: 'product-flashdrive'},{sort: {name:1}});
});

Meteor.publish('product-flashdrive-id-name-brand', function () {
    return Products.find({_type: 'product-flashdrive'},{sort: {name:1}, fields: {_id: 1, name: 1,brand:1, _type: 1}});
});

Meteor.publish('product-flashdrive-by-id', function (id) {
    return Products.find({_type: 'product-flashdrive', _id: id});
});

Meteor.publish('product-flashdrive-with-skip', function (skip, limit) {
    Counts.publish(this, 'total_product_pendrive_flashdrive', Products.find({_type: 'product-flashdrive'}));
    if(skip < 0){
        skip = 0;
    }
    if(limit > 10){
        limit = 10;
    }
    return Products.find({_type: 'product-flashdrive'},{sort: {name:1}, limit: limit, skip: skip});
});
