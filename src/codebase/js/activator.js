/*!
 * CODEBASE ACTIVATOR
 * MIT Licence
 * Unchanged since v4.0.2
 */

document.addEventListener('DOMContentLoaded', () => {
  const clickAways = Array.from(document.querySelectorAll('[data-click-away="true"]'));
  const controls = Array.from(document.querySelectorAll('[class*=-control]'));
  const panels = Array.from(document.querySelectorAll('[class*=-panel]'));
  const closes = Array.from(document.querySelectorAll('[class*=-close]'));

  // Find and decorate the click-away dismissers
  clickAways.forEach(element => {
    let elementAriaControls = element.getAttribute('aria-controls');
    let myClasses = element.getAttribute('class').split(' ');
    for (let i = 0; i < myClasses.length; i++) {
      myClasses[i] = myClasses[i].split('-');
    }
    myClasses = [].concat.apply([], myClasses);
    let elementComponentClass = '.' + myClasses[myClasses.indexOf('control') - 1] + '-wrapper';

    element.classList.add('click-away');
    document.querySelector('#' + elementAriaControls).classList.add('click-away');
    if (document.querySelector('#' + elementAriaControls).closest(elementComponentClass) != null) {
      document.querySelector('#' + elementAriaControls).closest(elementComponentClass).classList.add('click-away');
    }
  });

  // Do something
  controls.forEach(element => {
    element.addEventListener('click', function (event) {

      event.stopPropagation();

      // You only need to uncomment this if you must have a “double duty” hyperlink, 
      // e.g. the first-click opens a sub-menu, then second-click follows the link.
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      // if (event.target.nodeName.toLowerCase() === 'a') {
      //   if (!event.target.classList.contains('active')) {
      //     event.preventDefault();
      //   }
      // }

      let myClasses = this.getAttribute('class').split(' ');
      for (let i = 0; i < myClasses.length; i++) {
        myClasses[i] = myClasses[i].split('-');
      }
      myClasses = [].concat.apply([], myClasses);

      let activeControlActive = this.classList.contains('active');
      let activeAriaControls = this.getAttribute('aria-controls');
      let activePanel = document.querySelector('#' + activeAriaControls);
      let activeComponentClass = '.' + myClasses[myClasses.indexOf('control') - 1] + '-wrapper';
      let activeComponent = activePanel.closest(activeComponentClass);
      let dataControl = this.dataset.control;
      let dataClickAway = this.dataset.clickAway;
      let dataScrollLock = this.dataset.scrollLock;

      const clickAway = () => {
        let clickAwayActive = document.querySelectorAll('.click-away.active');
        
        clickAwayActive.forEach(element => {
          element.classList.remove('active');
          element.setAttribute("aria-expanded", "false"); // if it has aria-expanded
        });
        // Disable any scroll lock
        document.body.classList.remove('body-scroll-lock');
      }
      clickAway();

      const documentClickAway = () => {
        document.body.addEventListener('click', () => {
          if (dataClickAway) {
            clickAway();
          }
        });
      }
      documentClickAway();

      const deactivateToggle = () => {
        element.classList.remove('active');
        element.setAttribute('aria-expanded', 'false');
        activePanel.classList.remove('active');
        if (activeComponent !== null) {
          activeComponent.classList.remove('active');
        }
        document.body.classList.remove('body-scroll-lock');
      }

      // Deactivate siblings e.g. used in tabs, slideshows
      const deactivateSiblings = () => {
        let activeSiblings = activeComponent.querySelectorAll('.active')
        for (let i = 0; i < activeSiblings.length; i++) {
          activeSiblings[i].classList.remove('active');
          activeSiblings[i].setAttribute("aria-expanded", "false");
        }
      }

      // Deactivate click-aways on window width resize -- because e.g. sometimes used on 
      // navicon menus that you don’t want activated above a particular breakpoint width
      const deactivateResize = () => {
        let windowWidth = window.innerWidth;
        window.addEventListener('resize', function () {
          if ( window.innerWidth !== windowWidth && dataClickAway === 'true') {
            clickAway();
          }
        });
      }
      deactivateResize();

      const activateScrollLock = () => {
        if (dataScrollLock === 'true') {
          document.body.classList.toggle('body-scroll-lock');
        }
      }
      activateScrollLock();

      // The Activators
      // ~~~~~~~~~~~~~~
      // Must be EITHER a toggle OR a tab

      // Toggle has no siblings (but can have optional click-away)
      if (dataControl === 'toggle') {
        if (activeControlActive) {
          element.classList.remove('active');
          element.setAttribute('aria-expanded', 'false');
          activePanel.classList.remove('active');
          if (activeComponent !== null) {
            activeComponent.classList.remove('active');
          }
        } else {
          element.classList.add('active');
          element.setAttribute('aria-expanded', 'true');
          activePanel.classList.add('active');
          if (activeComponent !== null) {
            activeComponent.classList.add('active');
          }

          document.onkeydown = event => {
            event = event || window.event;
            if ((event.key === "Escape" || event.key === "Esc")) {
              deactivateToggle();
            }
          };

          // Stop propagation when clicking activator panel (so that `click away` is not triggered)
          panels.forEach(element => {
            element.addEventListener('click', event => {
              event.stopPropagation();
            });
          });

          // Deactivate on close (internal dismiss)
          closes.forEach(element => {
            element.addEventListener('click', () => {
              deactivateToggle();
            });            
          });

        }
      }
      
      // Tab only works if there is more than one tab (and assumes that one will start as `.active`)
      if (dataControl === 'tab') {
        if ( ! this.classList.contains('active')) {
          clickAway();
          deactivateSiblings();
          this.classList.add('active');
          this.setAttribute("aria-expanded", "true");
          activePanel.classList.add('active');
        }
      }

    });    
  });

});