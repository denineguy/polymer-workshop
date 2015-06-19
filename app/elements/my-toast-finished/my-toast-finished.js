(function() {

  Polymer ({
    is: 'my-toast-finished',

    properties: {
      /**
       * The duration in milliseconds to show the toast.
       */
      duration: {
        type: Number,
        value: 3000
      },

      /**
       * The text that is displayed in the toast.
       */
      text: {
        type: String,
        value: ''
      },

      currentToast: {
        type: Boolean,
        reflectToAttribute: true,
        value: false,
        observer: 'toastActive'
      }
    },

    show: function(text) {
      this.text = text;
      this.currentToast = true;
    },

    hide: function() {
      this.currentToast = false;
      this.setAttribute('aria-hidden', true);
    },

    toastActive: function() {
      this.debounce('removeToast', this.hide, this.duration)
      // this.debounce('removeToast', function() {
      //   this.currentToast = false;
      // }, this.duration)  //name, function, time
    }
  })

}());
