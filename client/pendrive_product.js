Template.productPendriveFlashdriveIndex.onCreated(function () {
    var self = this;
    self.autorun(function () {
        var page = parseInt(FlowRouter.getQueryParam("page"));
        if(page < 0 || page === NaN){
            page = 0;
        }
        var limit = 10;
        var offset = page*limit;
        self.subscribe('product-flashdrive-with-skip', offset, limit);
        var productsCursor = Products.find({}).fetch();
        var productsIds = productsCursor.map(function (p) {
            return p._id
        });

    });
});

Template.productPendriveFlashdriveIndex.rendered = function () {

    // Add slimscroll to element
    $('.full-height-scroll').slimscroll({
        height: '100%'
    })

};


Template.pendriveFlashdriveListLoop.viewmodel({
    share: 'sharedIdShare',
    editMode: false,
    changeEditMode: function (edit) {
        if (edit === this.editMode()) return;
        if (!edit) this.sharedId(null);
        this.editMode(edit);
    },
    openNewProduct: function () {
        this.changeEditMode(false);
        this.sharedId(null);
        this.openProductModal();
    },
    openModal: function () {
        $("#createSupplierModal").modal("show");
    },
    openButton: function () {
        this.changeEditMode(false);
        this.openModal();
    }
});

Template.pendriveFlashdriveListLoop.helpers({
    products: function () {
        var objects = Products.find();
        return objects;
    }
});
Template.pendriveFlashdriveListLoopSingle.viewmodel({

    edit: function () {
        this.parent().sharedId(this._id());
        this.parent().changeEditMode(true);
        this.parent().openModal();
    },
    delete: function () {
        this.parent().changeEditMode(false);
        var object = Products.findOne({_id: this._id()});
        swal({
                title: "Czy na pewno chcesz?",
                text: "Masz zamiar skasować pendrive!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Taaa chcę (głupi pomysł)",
                closeOnConfirm: false
            },
            function () {
                object.remove();
                swal("Skasowane!", "Mam nadzieję, że duma Cię rozpiera :P", "success");
            });
    },
    editPhotos: function () {
        this.parent().sharedId(this._id());
        this.parent().openPhotoModal();
    }


});

Template.pendriveFlashdriveListLoopSingle.helpers({
    parent: function () {
        var parentCategory = Categories.findOne({_id: this.categoryId});

        if (parentCategory !== undefined) {
            return parentCategory.name;
        }
        else {
            return '';
        }
    }
});
