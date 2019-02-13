var Anim = {
    classList: {
        show: true,
        hide: false,
        none: false,
        el: {
            show: false,
            hide: false,
            default: true
        }
    },
    
    fadeOnce: function(h, s) {
        this.classList.show = !this.classList.show;
        this.classList.hide = !this.classList.hide;
        setTimeout(() => {
            this.classList.none = !this.classList.none; 
            document.querySelector(h).style.display = "none";
            document.querySelector(s).style.display = "block";
        }, 200);
    },

    fadeOut: function(h, s) {
        this.classList.show = false;
        this.classList.hide = true;

    },

    fadeToggle: function() {
        this.classList.show = !this.classList.show;
        this.classList.hide = !this.classList.hide;            
    },

    showEl: function() { this.__defaultEl() },

    hideEl: function() {
        this.__defaultEl();
        this.classList.el.hide = !this.classList.el.hide;
        setTimeout(() => { this.classList.el.hide = !this.classList.el.hide }, 300)            
    },
    
    __defaultEl: function() {
        this.classList.el.default = !this.classList.el.default;
        this.classList.el.show = !this.classList.el.show;            
    }
}

module.exports = Anim;