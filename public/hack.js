
import { uiModules } from 'ui/modules';

// import { FilterBarQueryFilterProvider } from 'ui/filter_bar/query_filter';
// import { getInjected } from "ui/chrome";


//console.log(FilterBarQueryFilterProvider);

let app = uiModules.get('hack/fixedFilter', ['kibana']);

//const isEnabledPlugin = getInjected('fixedFilter.enabled');


var fixmeTop; //$('filter-bar').offset().top;       // get initial position of the element

$(window).scroll(function() {                  // assign scroll event listener

  if (!$('filter-bar').length)
    return;

  fixmeTop = 70; //$('filter-bar').offset().top;

  var currentScroll = $(window).scrollTop(); // get current position

  if (currentScroll >= fixmeTop /*&& isEnabledPlugin*/) {           // apply position: fixed if you
    $('filter-bar').css({                      // scroll to that element or below it
      position: 'fixed',
      top: '0'
    });
  } else {                                   // apply position: static
    $('filter-bar').css({                      // if you scroll above it
      position: 'static'
    });
  }

});






// var Sticky = require('sticky-js');
//
// window.setTimeout(function() {
//   var sticky = new Sticky(".filter-bar");
//
//   console.log("filter-bar ", $(".filter-bar"));
//   console.log("sticky ", sticky);
// }, 10000)
