(function () {
    'use strict';

    angular
        .module('dataViz')
        .controller('ProjectChartsCtrl',
        ['project',
            'currentUser',
            ProjectChartsCtrl]);


    function ProjectChartsCtrl(project, currentUser) {

        var vm = this;
        vm.project = project;
        console.log(vm.project);

        currentUser.projectSelected = vm.project;
        vm.currentUser = currentUser;
        console.log(vm.currentUser);

    }
}());