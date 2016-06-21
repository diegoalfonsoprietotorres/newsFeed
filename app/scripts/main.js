
  angular.module('newsFeedApp', [])
    .service('FeedService', function ($http) {
      return {
        getNews: function () {
          return $http.get('files/news_mock.json');
        }
      };
    })
    .controller('NewsController', function ($scope, FeedService) {
      var vm = this;

      vm.reload = function () {
        initController();
      };

      vm.selectNew = function (newSelected) {
        if (vm.isNewSelected && angular.isDefined(vm.newSelected) && newSelected.id === vm.newSelected.id) {
          vm.headerNewTitle.removeClass('animated bounceInDown');
          vm.headerNewTitle.addClass('animated bounceOutLeft');
          vm.isNewSelected = false;
          //vm.newSelected = undefined;
        } else {
          vm.isNewSelected = true;
          vm.newSelected = newSelected;
          vm.headerNewTitle.removeClass('animated bounceOutLeft');
          vm.headerNewTitle.addClass('animated bounceInDown');
        }
      };

      function initController() {
        vm.headerNewTitle = angular.element('#header-new-title');
        vm.isNewSelected = false;
        vm.ready = false;
        vm.newSelected = undefined;
        FeedService.getNews()
          .then(function (response) {
            vm.news = response.data;
            vm.ready = true;
          });
      }

      initController();
    });

