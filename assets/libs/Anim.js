var sys = {
    __fade: function(s, cl1, cl2) {
        document.querySelector(s).classList.remove(cl1);
        document.querySelector(s).classList.add(cl2);
    },

    __getParams: function(s) {
        return {
            pos : document.querySelector(s).getBoundingClientRect(),
            width : document.querySelector(s).clientWidth,
            height: document.querySelector(s).clientHeight
        }
    },

    __rollY: function(s, dir) {
        document.styleSheets[0].insertRule(`@keyframes slideInY { from { ${dir}: -${this.__getParams(s).height}px } to { ${dir}: 0px } }`);
        document.querySelector(s).style.animation = 'slideInY .3s forwards';       
    }
};

var Anim = {    
    fadeIn: function(s) {
        document.querySelector(s).style.display = "block";
        sys.__fade(s, 'hide', 'show');
    },

    fadeOut: function(s) {
        sys.__fade(s, 'show', 'hide');
        setTimeout(() => { document.querySelector(s).style.display = "none" }, 300);
    },

    fadeInScale: function(s) {
        document.querySelector(s).style.display = "block";
        sys.__fade(s, 'show-with-scale', 'hide-with-scale');
    },

    fadeOutScale: function(s) {
        sys.__fade(s, 'hide-with-scale', 'show-with-scale');
        setTimeout(() => { document.querySelector(s).style.display = "none" }, 300);        
    },

    right: function(s) {
        document.styleSheets[0].insertRule(`@keyframes slideInX { from { left: ${sys.__getParams(s).pos.x}px } to { left: ${ sys.__getParams(s).pos.x + sys.__getParams(s).width }px } }`);
        document.querySelector(s).style.animation = 'slideInX .3s forwards';
    },

    left: function(s) {
        document.styleSheets[0].insertRule(`@keyframes slideInX { from { right: -${sys.__getParams(s).width}px } to { right: 0px } }`);
        document.querySelector(s).style.animation = 'slideInX .3s forwards';
    },

    top: function(s) {
        sys.__rollY(s, 'bottom');
    },

    bottom: function(s) {
        sys.__rollY(s, 'top');
    },
    
    slideDown: function(s) {
        // var childArray = document.querySelector(s).childNodes;
        // var heightEnd = 0;
        // for (i = 0; i < childArray.length; i++) {
        //     if(childArray[i].clientHeight !== undefined) heightEnd += childArray[i].clientHeight;
        // }
        document.querySelector(s).classList.remove('slide-up');
        document.querySelector(s).classList.add('slide-down');
    },

    slideUp: function(s) {
        document.querySelector(s).style.animation = "slideUp .3s forwards";
    },    
}

module.exports = Anim;