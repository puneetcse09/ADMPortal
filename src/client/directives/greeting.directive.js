/**
 * Created by ravikant on 7/11/15.
 */
import angular from 'angular';

function greeting() {
    return {
        restrict: 'E',
        scope: {
            name: '='
        },
        template: '<h1>Hello, {{name}}</div>'
    }
}

export default angular.module('directives.greeting', [])
    .directive('greeting', greeting)
    .name;