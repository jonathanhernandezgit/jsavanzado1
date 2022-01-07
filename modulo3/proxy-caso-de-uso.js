
const target = {
    render (val, tag) {
        let htmlTag = document.getElementsByTagName(tag)[0];

        if(!htmlTag){
            htmlTag = document.createElement(tag);
            document.body.appendChild(htmlTag);
        }

        htmlTag.textContent = val;
    }
};

const handler = {
    set (target, prop, value) {
        target[prop] = value;

        target.render(value, prop == 'titulo'? 'h1' : 'p');
    }
}

const miProxy = new Proxy(target, handler);