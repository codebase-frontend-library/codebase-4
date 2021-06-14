/*!
 * CODEBASE ACTIVATOR  (jQuery version)
 * Use only if you want to support Internet Explorer 11 and other ancient browsers
 * Use with =< jQuery 2.2.4 (do not use with jQuery 3.x and up)
 * MIT Licence
 * v.4.0.10
 */

(function ($) {
  'use strict';

  $(document).ready(function () {
    var clickAways = $('[data-click-away="true"]');
    var controls = $('[class*=-control]');
    var panels = $('[class*=-panel]');

    // Find and decorate the click-away dismissers
    clickAways.each(function () {
      var elementAriaControls = $(this).attr('aria-controls');
      var myClasses = $(this).attr('class').split(' ');
      for (var i = 0; i < myClasses.length; i++) {
        myClasses[i] = myClasses[i].split('-');
      }
      myClasses = [].concat.apply([], myClasses);
      var elementComponentClass = '.' + myClasses[myClasses.indexOf('control') - 1] + '-wrapper';

      $(this).addClass('click-away');
      $('#' + elementAriaControls).addClass('click-away');
      if ($('#' + elementAriaControls).closest(elementComponentClass) != null) {
        $('#' + elementAriaControls).closest(elementComponentClass).addClass('click-away');
      }
    });

    // Do something
    controls.each(function (element) {
      $(this).on('click', function (event) {

        event.stopPropagation();

        var myClasses = this.getAttribute('class').split(' ');
        for (var i = 0; i < myClasses.length; i++) {
          myClasses[i] = myClasses[i].split('-');
        }
        myClasses = [].concat.apply([], myClasses);

        var activeControlActive = $(this).hasClass('active');  // true or false

        var activeAriaControls = $(this).attr('aria-controls');
        var activePanel = $('#' + activeAriaControls);
        var activePanelClose = $(activePanel).find('[class*=-close]');
        var activeComponentClass = '.' + myClasses[myClasses.indexOf('control') - 1] + '-wrapper';
        var activeComponent = activePanel.closest(activeComponentClass);
        var dataControl = $(this).attr('data-control');
        var dataClickAway = $(this).attr('data-click-away');
        var dataScrollLock = $(this).attr('data-scroll-lock');

        var clickAway = function () {
          var clickAwayActive = $('.click-away.active');
          
          clickAwayActive.each(function () {
            $(this).removeClass('active');
            $(this).attr("aria-expanded", "false"); // if it has aria-expanded
          });
          // Disable any scroll lock
          $('body').removeClass('body-scroll-lock');
        }
        clickAway();

        var documentClickAway = function () {
          $('body').on('click', function () {
            if (dataClickAway) {
              clickAway();
            }
          });
        }
        documentClickAway();

        var deactivateToggle = function () {
          $('[class*=-control].active').attr('aria-expanded', 'false');
          $('[class*=-control].active').removeClass('active');
          activePanel.removeClass('active');
          if (activeComponent !== null) {
            activeComponent.removeClass('active');
          }
          $('body').removeClass('body-scroll-lock');
        }

        // Deactivate siblings
        // e.g. used in tabs, slideshows
        var deactivateSiblings = function () {
          var activeSiblings = $(activeComponent).find('.active')
          activeSiblings.removeClass('active');
          activeSiblings.attr("aria-expanded", "false");
        }

        // Deactivate click-aways on window width resize -- because e.g. sometimes used on 
        // navicon menus that you don’t want activated above a particular breakpoint width
        var deactivateResize = function () {
          var windowWidth = $(window).width();
          $(window).on('resize', function () {
            if ( $(window).width() !== windowWidth && dataClickAway === 'true') {
              clickAway();
            }
          });
        }
        deactivateResize();

        var activateScrollLock = function () {
          if (dataScrollLock === 'true') {
            $('body').toggleClass('body-scroll-lock');
          }
        }
        activateScrollLock();

        // The Activators
        // ~~~~~~~~~~~~~~
        // Must be EITHER a toggle OR a tab

        // Toggle has no siblings (but can have optional click-away)
        if (dataControl === 'toggle') {
          if (activeControlActive) {
            // deactivateToggle();
            $(this).removeClass('active');
            $(this).attr('aria-expanded', 'false');
            $(activePanel).removeClass('active');
            if ($(activeComponent) !== null) {
              $(activeComponent).removeClass('active');
            }
          } else {
            $(this).addClass('active');
            $(this).attr('aria-expanded', 'true');
            $(activePanel).addClass('active');
            if ($(activeComponent) !== null) {
              $(activeComponent).addClass('active');
            }

            $(document).keydown(function(event) {
              event = event || window.event;
              if ((event.key === "Escape" || event.key === "Esc")) {
                deactivateToggle();
              }
            });

            // Stop propagation when clicking activator panel (so that `click away` is not triggered)
            $(panels).each(function (element) {
              $(this).on('click', function(event) {
                event.stopPropagation();
              });
            });

            // Deactivate on close (internal dismiss)
            $(activePanelClose).on('click', function () {
              deactivateToggle();
            });

          }
        }
        
        // Tab only works if there is more than one tab (and assumes that one will start as `.active`)
        if (dataControl === 'tab') {
          if ( ! $(this).hasClass('active')) {
            clickAway();
            deactivateSiblings();
            $(this).addClass('active');
            $(this).attr("aria-expanded", "true");
            $(activePanel).addClass('active');
          }
        }

      });    
    });

  });

}(jQuery));