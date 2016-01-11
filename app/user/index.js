var User = function(name){
    this.name = name;
    console.log('I am', this.name);
    return this;
};

module.exports.user_constructor = User;
