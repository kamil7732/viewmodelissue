Meteor.publish('product', function () {
    return Products.find({});
});