
Template.pendriveFlashdriveListModalAdd.viewmodel({
    share: 'sharedIdShare',

    getInitialObject: function () {
    var objectID = this.sharedId();

    if (objectID) {

        return Products.findOne({_id: objectID}, {
            transform: null  // Pass null to disable transformation
        });
    } else {
        return {
            //_id: null,
            name: '',

            active: false
            }
        }
    },
    autorun: function () {
        var obj = this.getInitialObject();
        this.load(obj);
    },

    name: '',

    active: false,


    add: function () {
        var object = new ProductFlashdrive();
        var objectID = this.parent().sharedId();
        if (objectID) {
            var tempObject = Products.findOne({_id: objectID});
            if (tempObject !== undefined) {
                object = tempObject;
            }
        }

        object.set({
            name : this.name(),
            active : this.active()
        });


        object.save();


        $("#createSupplierModal").modal("hide");
        swal({
            title: "good job!",
            text: "but we have an exception on js console...",
            type: "success"
        });
    }
});

