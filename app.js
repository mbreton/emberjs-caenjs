// ===================
// Application
// ===================

App = Ember.Application.create({
    LOG_VERSION: true,
    LOG_TRANSITIONS: true
});

// ===================
// Routes
// ===================

App.Router.map(function () {
    this.resource('beers', function () {
        this.route('beer', {path: '/:id'})
    });
});

App.BeersRoute = Em.Route.extend({
    model: function () {
        return App.Beer.findAll();
    }
});

App.BeersBeerRoute = Em.Route.extend({
    model: function (url) {
        return App.Beer.find(url.id);
    }
});

// ===================
// Models
// ===================

App.Beer = Em.Object.extend({
    name: "",
    imageUrl: "",
    description: "",
    created_at: "",
    updated_at: ""
});

App.Beer.reopenClass({
    findAll: function (page) {
        return $.get('/beers/'+page).then(function (json) {
            return _.map(json, function (jsonBeer) {
                return App.Beer.create(jsonBeer);
            });
        });
    },
    find: function (id) {
        return $.get('/beer/' + id).then(function (json) {
            return App.Beer.create(json);
        });
    }
});

// ===================
// Controllers
// ===================

App.BeersController = Em.ArrayController.extend({
    page: 1,
    loadingMoreBeer:false,
    noMoreBeer:false,

    findNextBeers: function () {
        if (this.noMoreBeer || this.loadingMoreBeer) return;
        this.loadingMoreBeer = true;
        this.page++;
        var self = this;
        App.Beer.findAll(this.page).done(function(moreBeers){
            self.noMoreBeer = moreBeers.length == 0;
            self.pushObjects(moreBeers);
            self.loadingMoreBeer = false;
        });
    }
});

App.ApplicationController = Em.Controller.extend({
    needs: ['beers'],

    nbBeers: Em.computed.oneWay('controllers.beers.model.length')
});

// ===================
// Views & Helpers
// ===================

Ember.Handlebars.registerBoundHelper('date', function (value) {
    return moment(value, 'YYYY-MM-DDTHH:mm:ss').calendar();
});

App.BeersView = Em.View.extend({
   didInsertElement:function(){
       var view = this;
       var $list = this.$("#list");

       $list.scroll(function () {
           var offset = $('.beer-item:last').offset();
           if (offset.top - $list.height() <= 150) {
               view.get('controller').findNextBeers();
           }
       });
   }
});