Template.productPendriveFlashdriveIndex.onCreated(function () {
    var self = this;
    self.autorun(function () {

        self.subscribe('product');


    });
});


Template.pendriveFlashdriveListLoop.helpers({
    products: function () {
        var objects = Products.find();
        return objects;
    }
});

Template.pendriveFlashdriveListLoop.viewmodel({
    openButton: function(){
        var object = new Product();
        object.set({
            name : "aaaaa"
        });
        object.save();
        console.log('clicked');
    }

});

//COMMENT ME OUT TO GET RID OFF PROBLEM
//-------------------------------------
Template.pendriveFlashdriveListLoopSingle.viewmodel({


});
//-------------------------------------
