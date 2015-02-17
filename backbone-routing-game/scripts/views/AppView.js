var AppView = Backbone.View.extend({

	el: '#app',
	initialize: function() {

		console.log(ProjectsCollection);
		this.projects = new ProjectsCollection();

		this.playView = new playView({
			projects: this.projects
		});
		// this.leaderboardView = new leaderboardView({
		// 	projects: this.projects
		// });
		// this.settingsView = new settingsView({
		// 	projects: this.projects
		// });
		
		var self = this;

		var Router = Backbone.Router.extend({
			routes: {
				'play': 'play'
				// 'leaderboard'
			},

			play: function() {
				console.log('play')
				self.hideAllPages();
				self.homeView.$el.show();
			},

		});

		var appRouter = new Router();

		Backbone.history.start();

	},

	hideAllPages: function() {
		$('.page-view').hide();
	}

});

