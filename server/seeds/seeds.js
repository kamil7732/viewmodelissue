if(Meteor.users.find().count() === 0){
    var id = Accounts.createUser({
        username : "Administrator",
        email: "admin@admin.com",
        password: "admin123",
        profile: { name: "Big Admin" },
        roles : []
    });

    Roles.addUsersToRoles(id, ["Administrator"]);
    console.log("Added Admin user...L:admin@admin.com P:admin123");
}
