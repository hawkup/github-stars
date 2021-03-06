'use strict';

describe('Route: Dashboard', function () {
  var $rootScope;
  var $state;
  var $injector;
  var $q;
  var userService;
  var githubService;
  var sandbox;
  var user;
  var starred;

  beforeEach(module('ui.router'));
  beforeEach(module('satellizer'));
  beforeEach(module('app'));
  beforeEach(module('app.templates'));

  beforeEach(inject(function (_$rootScope_, _$state_, _$injector_, _$q_, _userService_, _githubService_) {
    $rootScope = _$rootScope_;
    $state = _$state_;
    $injector = _$injector_;
    $q = _$q_;
    userService = _userService_;
    githubService = _githubService_;
    sandbox = sinon.sandbox.create();

    sandbox.stub(userService, 'checkLoggedIn', function () {
      var deferred = $q.defer();
      deferred.resolve(true);
      return deferred.promise;
    });

    user = {"login":"hawkup","id":2748846,"avatar_url":"https://avatars.githubusercontent.com/u/2748846?v=3","gravatar_id":"","url":"https://api.github.com/users/hawkup","html_url":"https://github.com/hawkup","followers_url":"https://api.github.com/users/hawkup/followers","following_url":"https://api.github.com/users/hawkup/following{/other_user}","gists_url":"https://api.github.com/users/hawkup/gists{/gist_id}","starred_url":"https://api.github.com/users/hawkup/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/hawkup/subscriptions","organizations_url":"https://api.github.com/users/hawkup/orgs","repos_url":"https://api.github.com/users/hawkup/repos","events_url":"https://api.github.com/users/hawkup/events{/privacy}","received_events_url":"https://api.github.com/users/hawkup/received_events","type":"User","site_admin":false,"name":null,"company":null,"blog":null,"location":null,"email":null,"hireable":null,"bio":null,"public_repos":23,"public_gists":51,"followers":7,"following":0,"created_at":"2012-11-08T06:52:46Z","updated_at":"2016-04-01T22:24:06Z"};
    sandbox.stub(userService, 'getUser', function () {
      var deferred = $q.defer();
      deferred.resolve(user);
      return deferred.promise;
    });

    starred = [{"id":24195339,"name":"angular","full_name":"angular/angular","owner":{"login":"angular","id":139426,"avatar_url":"https://avatars.githubusercontent.com/u/139426?v=3","gravatar_id":"","url":"https://api.github.com/users/angular","html_url":"https://github.com/angular","followers_url":"https://api.github.com/users/angular/followers","following_url":"https://api.github.com/users/angular/following{/other_user}","gists_url":"https://api.github.com/users/angular/gists{/gist_id}","starred_url":"https://api.github.com/users/angular/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/angular/subscriptions","organizations_url":"https://api.github.com/users/angular/orgs","repos_url":"https://api.github.com/users/angular/repos","events_url":"https://api.github.com/users/angular/events{/privacy}","received_events_url":"https://api.github.com/users/angular/received_events","type":"Organization","site_admin":false},"private":false,"html_url":"https://github.com/angular/angular","description":"","fork":false,"url":"https://api.github.com/repos/angular/angular","forks_url":"https://api.github.com/repos/angular/angular/forks","keys_url":"https://api.github.com/repos/angular/angular/keys{/key_id}","collaborators_url":"https://api.github.com/repos/angular/angular/collaborators{/collaborator}","teams_url":"https://api.github.com/repos/angular/angular/teams","hooks_url":"https://api.github.com/repos/angular/angular/hooks","issue_events_url":"https://api.github.com/repos/angular/angular/issues/events{/number}","events_url":"https://api.github.com/repos/angular/angular/events","assignees_url":"https://api.github.com/repos/angular/angular/assignees{/user}","branches_url":"https://api.github.com/repos/angular/angular/branches{/branch}","tags_url":"https://api.github.com/repos/angular/angular/tags","blobs_url":"https://api.github.com/repos/angular/angular/git/blobs{/sha}","git_tags_url":"https://api.github.com/repos/angular/angular/git/tags{/sha}","git_refs_url":"https://api.github.com/repos/angular/angular/git/refs{/sha}","trees_url":"https://api.github.com/repos/angular/angular/git/trees{/sha}","statuses_url":"https://api.github.com/repos/angular/angular/statuses/{sha}","languages_url":"https://api.github.com/repos/angular/angular/languages","stargazers_url":"https://api.github.com/repos/angular/angular/stargazers","contributors_url":"https://api.github.com/repos/angular/angular/contributors","subscribers_url":"https://api.github.com/repos/angular/angular/subscribers","subscription_url":"https://api.github.com/repos/angular/angular/subscription","commits_url":"https://api.github.com/repos/angular/angular/commits{/sha}","git_commits_url":"https://api.github.com/repos/angular/angular/git/commits{/sha}","comments_url":"https://api.github.com/repos/angular/angular/comments{/number}","issue_comment_url":"https://api.github.com/repos/angular/angular/issues/comments{/number}","contents_url":"https://api.github.com/repos/angular/angular/contents/{+path}","compare_url":"https://api.github.com/repos/angular/angular/compare/{base}...{head}","merges_url":"https://api.github.com/repos/angular/angular/merges","archive_url":"https://api.github.com/repos/angular/angular/{archive_format}{/ref}","downloads_url":"https://api.github.com/repos/angular/angular/downloads","issues_url":"https://api.github.com/repos/angular/angular/issues{/number}","pulls_url":"https://api.github.com/repos/angular/angular/pulls{/number}","milestones_url":"https://api.github.com/repos/angular/angular/milestones{/number}","notifications_url":"https://api.github.com/repos/angular/angular/notifications{?since,all,participating}","labels_url":"https://api.github.com/repos/angular/angular/labels{/name}","releases_url":"https://api.github.com/repos/angular/angular/releases{/id}","deployments_url":"https://api.github.com/repos/angular/angular/deployments","created_at":"2014-09-18T16:12:01Z","updated_at":"2016-04-14T14:21:40Z","pushed_at":"2016-04-14T12:50:11Z","git_url":"git://github.com/angular/angular.git","ssh_url":"git@github.com:angular/angular.git","clone_url":"https://github.com/angular/angular.git","svn_url":"https://github.com/angular/angular","homepage":"https://angular.io","size":344547,"stargazers_count":10757,"watchers_count":10757,"language":"TypeScript","has_issues":true,"has_downloads":true,"has_wiki":true,"has_pages":false,"forks_count":2812,"mirror_url":null,"open_issues_count":1460,"forks":2812,"open_issues":1460,"watchers":10757,"default_branch":"master"}];
    sandbox.stub(githubService, 'getStarred', function () {
      var deferred = $q.defer();
      deferred.resolve(starred);
      return deferred.promise;
    });
  }));

  afterEach(function () {
    sandbox.restore();
  });

  describe('dashboard index', function () {
    it('should resolve userData', function () {
      $state.go('root.dashboard');
      $rootScope.$digest();
      expect($injector.invoke($state.current.resolve.userData).$$state.value).to.deep.equal(user);
    });

    it('should resolve starredData', function () {
      $state.go('root.dashboard');
      $rootScope.$digest();
      expect($injector.invoke($state.current.resolve.starredData, this, { userData: user }).$$state.value).to.deep.equal(starred);
    });
  });
});
