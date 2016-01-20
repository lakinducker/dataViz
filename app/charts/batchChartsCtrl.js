(function () {
    'use strict';

    angular
        .module('dataViz')
        .controller('BatchChartsCtrl',
        ['batch',
            'currentUser',
            BatchChartsCtrl]);


    function BatchChartsCtrl(batch, currentUser) {

        var vm = this;
        vm.batch = batch;
        console.log(vm.batch);

        currentUser.projectSelected = vm.project;
        vm.currentUser = currentUser;
        console.log(vm.currentUser);

    }
}());