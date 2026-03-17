(function(window){
    function defineEjs(){
        var E = {};
        E.test = function(){
            alert("You Have Successfuly Installed E.js")
        };
        E.gclass = function(classname){
            c = document.getElementsByClassName(classname);
            return c;
        }
        E.gid = function(id){
            id = document.getElementById(id);
            return id;
        }
        E.$ = function(selector){
            var self = {}
            self.selector = selector;
            self.element = document.querySelector(self.selector);

            self.html = function(){
                return self.element;
            }
            self.attr = function(name, value){
                if(!value) return self.element.getAttribute(name);
                self.element.setAttribute(name, value);
                return self;
            }
            self.on = function(type, callback){
                self.element["on" + type] = callback;
                return self;
            }
        return self;
        };

    return E;
    }
    if(typeof(E) === "undefined"){
        window.E = defineEjs();
    }
})(window);
// Man this is a really cool and totally not useless javascript framework