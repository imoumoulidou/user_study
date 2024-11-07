function createTour(steps){
  
    let tour = new Shepherd.Tour({
      useModalOverlay: true,
      defaultStepOptions: {
        cancelIcon: {
          enabled: true
        },
        classes: 'class-1 class-2',
        scrollTo: {behavior: 'smooth', block: 'center'},
        modalOverlayOpeningPadding:'20', // padding around highlighted element
        popperOptions: { // moves tutorial box to the left
          modifiers: [{ name: 'offset', options: { offset: [0,  52] } }]
        }
      },
      exitOnEsc: false
    })
  
    startTour(tour, steps)
  }
  
  
  function startTour(tour, steps){
    for (i = 0; i < steps.length; i++) {
      btns = [];
      // no back button at the start
      if (i > 0) {
        btns.push({
          text: 'Back',
          classes: 'shepherd-button-secondary',
          action: function () {
            return tour.back();
          }
        });
      }
      // no next button on last step
      if (i != (steps.length - 1)) {
        btns.push({
          text: 'Next',
          classes: 'shepherd-button-primary '+steps[i].class+(steps[i].disabled ? ' disabled-button': ''),
          disabled: steps[i].disabled,
          action: function () {

            return tour.next();
          }
        });
      } else {
        btns.push({
          text: 'Close',
          classes: 'shepherd-button-primary',
          action: function () {
            return tour.hide();
          }
        });
      }
  
      let step = {
        id: 'step-'+i,
        attachTo: {
          element: steps[i].id,
          on: steps[i].location
        },
        text: steps[i].text,
        title: steps[i].title,
        buttons: btns,
        cancelIcon: {
          enabled: false
        }
      }
  
      tour.addStep(step);
    }
  
    tour.start();
  }

function runTour(){
    createTour([
        {
            "id": "#image",
            "location": "bottom",
            "title": "Transparency Slider",
            "text": "Interact with the slider to see different views of the data.",
            "class": "main-vis-step",
            "disabled": true
        },
        {
            "id": "#image",
            "location": "bottom",
            "title": "Transparency Slider",
            "text": "Great! Now close the window to proceed.",
            "class": "main-vis-step",
            "disabled": false
        }
    ])
}