// ===================
// Application
// ===================
App = Ember.Application.create();

// ===================
// Routes
// ===================

// définition des différents états de l'application
App.Router.map(function () {
    this.resource('beers',function(){
        this.route('beer',{path:'/:id'})
    });
    this.route('about')
});

// chargement des données pour l'état 'beers'
App.BeersRoute = Em.Route.extend({
    model:function(){
        return App.Beer.findAll(1);
    }
});


// chargement des données pour l'état 'beers/:id'
App.BeersBeerRoute = Em.Route.extend({
    model:function(url){
        return App.Beer.find(url.id);
    }
});

// Non vue pendant la présentation :
// Cette route est celle déclencher quand on essaie d'accéder sur '/'.
// Ici on déclenche une rediction automatique sur 'beers'
App.IndexRoute = Em.Route.extend({
    redirect:function(){
        this.transitionTo('beers');
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
    updated_at: "",
    brewery: "",
    short_desc: function () {
        return this.get('description').substring(0, 40) + "...";
    }.property('description')
});

// Définition des méthodes de chargement des données à base de promesse
// (Note : Ember.js gère très bien les promesses, il n'y a pas besoin
// de les gérer nous même, il se charge de la résoudre pour nous.)
App.Beer.reopenClass({
    findAll: function (page) {
        return $.get('/beers/' + page).then(function (json) {
            return json.map(function (jsonBeer) {
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
App.ApplicationController = Em.Controller.extend({
    init: function () {
        this.set('name', localStorage.name);
    },

    actions: {
        saveName: function (name) {
            localStorage.name = name;
        }
    }
});

App.BeersController = Em.ArrayController.extend({
    page: 1,
    loadingMoreBeer:false,
    noMoreBeer:false,

    findNextBeers:function(){
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

// ===================
// Views & Helpers
// ===================
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