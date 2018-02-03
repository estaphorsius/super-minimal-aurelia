import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';
import './css/colors/blue.css';
import { jQuery, $ } from 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import './js/jquery.slimscroll.js'
import './js/waves.js';
import './js/sidebarmenu.js';
import 'sticky-kit/dist/sticky-kit.js';
import './js/custom.min.js';
import { Aurelia, PLATFORM } from 'aurelia-framework';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging();
    aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}