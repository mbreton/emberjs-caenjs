App = Ember.Application.create();

App.Router.map(function () {
    this.resource("beers", function () {
        this.route("beer", {path: '/:id'});
    });
});

App.Beer = Em.Object.extend({
    name: "",
    description: "",
    created_at: "",
    updated_at: ""
});

App.Beer.reopenClass({
    findAll: function (page) {
        var page = page || 1;
        return $.get('/beers/' + page).then(function (json) {
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


App.BeersRoute = Em.Route.extend({
    model: function () {
        return this.controllerFor('beers').findAllBeers();
    }
});

App.BeersView = Em.View.extend({
    didInsertElement: function () {
        var offset = $('.beer-item:last').offset();
        var view = this;

        this.$("#list").scroll(function () {
            if ((offset.top - $("#list").height() <= $("#list").scrollTop())) {
                view.get('controller').findNextBeers();
            }
        });
    }
});

App.BeersBeerRoute = Em.Route.extend({
    model: function (url) {
        return App.Beer.find(url.id);
    }
});

App.BeersController = Em.ArrayController.extend({
    page: 0,

    findAllBeers: function () {
        return App.Beer.findAll(this.page);
    },
    findNextBeers: function () {
        this.page++;
        var self = this;
        this.findAllBeers().done(function(moreBeers){
            self.pushObjects(moreBeers);
        });
    }
});

App.ApplicationController = Em.Controller.extend({
    needs: ['beers'],

    nbBeers: function () {
        return this.get('controllers.beers.content').length;
    }.property('controllers.beers.content.@each')
});


Ember.Handlebars.registerBoundHelper('date', function (value) {
    return moment(value, 'YYYY-MM-DDTHH:mm:ss').calendar();
});