const axios = require('axios');

var Misc = {
    generateKey: function(len) {
        var symbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var key = '';
    
        for(i = 0; i < len; i++) {
            key += symbols[Math.floor(Math.random() * (symbols.length - 1))];
        }
    
        return key;
    },

    send: function(f, url, data) {
        const $inputs = document.querySelectorAll(` ${f} form input `);
        const $selects = document.querySelectorAll(` ${f} form select `);
        const $textareas = document.querySelectorAll(` ${f} form textarea `);
        var $error = document.querySelector('.form-error');
        var isValid = true;

        document.querySelector(` ${f} form `).addEventListener('submit', (e) => {
            e.preventDefault();
                
            for(var i = 0; i < $inputs.length; i++) { __checkValid($inputs, i, f) }

            if($selects.length > 0) 
                for(var j = 0; j < $selects.length; j++) { __checkValid($selects, j, f) }
                
            if($textareas.length > 0)
                for(var k = 0; k < $textareas.length; k++) { __checkValid($textareas, k, f) }

            if(isValid) {
                axios.post(url, data)
                    .then(res => {})

                    .catch(e => { 
                        console.log(e);
                        switch(document.location.pathname) {
                            case '/':
                                __authError();
                                break;
                            case '/reg':
                                __regError();
                                break;
                        }
                    })
            }
        })

        function __checkValid(i, n, f) {
            if(i[n].value == "" || i[n].value == "0") {
                i[n].classList.add('input--invalid');
                isValid = false;

                setTimeout(() => { 
                    [...document.querySelectorAll(` ${f} form .input--invalid `)]
                        .forEach((a) => { a.classList.remove('input--invalid') }) 
                }, 2000)
            }                
        }
        
        function __authError() {
            $error.style.display = 'block';
            $error.innerHTML = ` Неправильный логин/пароль `;
            setTimeout(() => {
                $error.style.display = 'none';
                $error.innerHTML = "";
            }, 5000)            
        }

        function __regError() {
            $error.style.display = 'block';
            $error.innerHTML = ` Пользователь с таким e-mail уже зарегистрирован в нашем сервисе `;
            setTimeout(() => {
                $error.style.display = 'none';
                $error.innerHTML = "";
            }, 5000)             
        }
    }
}

module.exports = Misc;