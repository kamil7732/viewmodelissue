FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "productPendriveFlashdriveIndex"});
    }
});

FlowRouter.route('/login', {
    action: function() {
        BlazeLayout.render("blankLayout", {content: "login"});
    }
});

FlowRouter.route('/product/pendrive/flashdrive/index', {
    action: function (params, queryParams) {
        BlazeLayout.render("mainLayout", {
            content: "productPendriveFlashdriveIndex",
            params: params,
            queryParams: queryParams
        });
    }
});
