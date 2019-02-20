var sys = {
    __fade: function(s, cl1, cl2) {
        document.querySelector(s).classList.remove(cl1);
        document.querySelector(s).classList.add(cl2);
    },

    __getParams: function(s) {
        return {
            pos: document.querySelector(s).getBoundingClientRect(),
            width: document.querySelector(s).clientWidth,
            height: document.querySelector(s).clientHeight
        }
    },

    __rollY: function(s, dir) {
        document.styleSheets[0].insertRule(`@keyframes slideInY { from { ${dir}: -${this.__getParams(s).height}px } to { ${dir}: 0px } }`);
        document.querySelector(s).style.animation = 'slideInY .3s forwards';       
    },

    // __slide: function(s, h) {
    //     document.styleSheets[0].insertRule(`@keyframes slide { from { height: ${sys.__getParams(s).height}px } to { height: ${h} } }`);
    //     document.querySelector(s).style.animation = 'slide .3s forwards';
    //     return {
    //         begH: sys.__getParams(s).height,
    //         endH: h
    //     }
    // }
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
    
    slideDown: function(s, h) {
        document.styleSheets[0].insertRule(`@keyframes slide { from { height: ${sys.__getParams(s).height}px } to { height: ${h} } }`);
        document.querySelector(s).style.animation = 'slide .3s forwards';
    },

    slideUp: function(s, h) {
        document.styleSheets[0].insertRule(`@keyframes slide { from { height: ${sys.__getParams(s).height}px } to { height: ${h} } }`);
        document.querySelector(s).style.animation = 'slide .3s forwards';
    },
    
    toggleSlide: function(s, h) {
        var coefB = h - sys.__getParams(s).height;
        var coefD, coefU;

        if(coefB > 0) {
            coefD = h - sys.__getParams(s).height;
            document.styleSheets[0].insertRule(`@keyframes slide { from { height: ${sys.__getParams(s).height}px } to { height: ${h}px } }`);
            document.querySelector(s).style.animation = 'slide .3s forwards';
        } else if(coefB < 0 || coefB == 0) {
            document.styleSheets[0].insertRule(`@keyframes slide { from { height: ${sys.__getParams(s).height}px } to { height: ${h - coefU}px } }`);
            document.querySelector(s).style.animation = 'slide .3s forwards';
        }

        console.log(coefB, coefD);
    }
}

module.exports = Anim;