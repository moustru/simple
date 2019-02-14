var Anim = {
    fadeIn: function(s) {
        document.querySelector(s).style.display = "block";
        document.querySelector(s).classList.remove('hide');
        document.querySelector(s).classList.add('show');
    },

    fadeOut: function(s) {
        document.querySelector(s).classList.remove('show');
        document.querySelector(s).classList.add('hide');

        setTimeout(() => { document.querySelector(s).style.display = "none" }, 300);
    }
}

module.exports = Anim;