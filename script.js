const body = document.body
const header = document.createElement('header');
body.append(header);
header.id = "header";
header.classList = "header";

//////////////////HEADER////////////////

const headerContainer = document.createElement('div');
header.append(headerContainer);
headerContainer.id = "header-container";
headerContainer.classList = "header-container";


const divNav = document.createElement('div');
headerContainer.append(divNav);
divNav.id = "div-nav";
divNav.classList = "div-nav";


const brand = document.createElement('div');
divNav.append(brand);
brand.id = "brand";
brand.classList = "brand";


const brandH1 = document.createElement('h1');
brand.append(brandH1);
brandH1.id = "brand-h1";
brandH1.classList = "brand-h1";
brandH1.innerText = "Bookshop";


const nav = document.createElement('nav');
divNav.append(nav);
nav.id = "nav-bar";
nav.classList = "nav-bar";


const navMenu = document.createElement('ul');
navMenu.id = "nav-menu";
navMenu.classList = "nav-menu";
nav.append(navMenu);

const navItems = ['Activities', 'BestSeller', 'Bookshop']

navItems.forEach(item => {
    const li = document.createElement("li");
    li.id = "nav-item";
    li.classList = "nav-item";
    li.append(document.createTextNode(item));
    navMenu.append(li);
})


const inputFind = document.createElement('div');
headerContainer.append(inputFind)
inputFind.id = "input-find";
inputFind.classList = "input-find";


const textInputFind = document.createElement('p');
textInputFind.innerText = 'The website of independent bookstores with local stores';
textInputFind.id = "text-find";
textInputFind.classList = "text-find";
inputFind.append(textInputFind);

// const input = document.createElement('input');
// inputFind.append(input)

// const button = document.createElement('button');
// button.innerText = 'Find';
// inputFind.append(button);

//////////////////MAIN////////////////

const main = document.createElement('main');
body.append(main);
main.id = "main";
main.classList = "main";

const mainContainer = document.createElement('div');
main.append(mainContainer);
mainContainer.id = "main-container";
mainContainer.classList = "main-container";
// mainContainer.style = "background: green";

const items = document.createElement('div');
mainContainer.append(items);
items.id = "items";
items.classList = "items";
// items.style = "background: red";

const aside = document.createElement('aside');
mainContainer.append(aside);
aside.id = "aside";
aside.classList = "aside";
// aside.style = "background: black";

const cartH2 = document.createElement('h2');
aside.append(cartH2);
cartH2.innerText = 'CART';
cartH2.id = "cart-h2";
cartH2.classList = "cart-h2";
cartH2.style = "background: #6bd3e0";


const ulCart = document.createElement('ul');
ulCart.id = "cart-ul";
ulCart.classList = "cart-ul";
aside.append(ulCart);

const hr = document.createElement('hr')
aside.append(hr)

const textRight = document.createElement('p');
aside.append(textRight);
textRight.innerHTML = `Total:<span id="total"></span>`;
textRight.id = "text-right";
textRight.classList = "text-right";
textRight.style = "background: black";

const button = document.createElement('button');
button.innerText = 'Delete All';
button.id = "button-delete-all";
button.classList = "button-delete-all";
aside.append(button);










document.addEventListener('DOMContentLoaded', () => {
    // Variables
    const DB = [
        {
            "id": 1,
            "author": "Douglas Crockford",
            "imageLink": "https://static01.helion.com.pl/global/okladki/326x466/e_2gxo.jpg",
            "title": "JavaScript: The Good Parts: The Good Parts",
            "price": 30,
            "description": "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must"
        },
        {
            "id": 2,
            "author": "David Herman",
            "imageLink": "https://www.informit.com/ShowCover.aspx?isbn=0132902265",
            "title": "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
            "price": 22,
            "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency"
        },
        {
            "id": 3,
            "author": "David Flanagan",
            "imageLink": "https://m.media-amazon.com/images/I/51mH3zO0b2L._SX258_BO1,204,203,200_QL70_ML2_.jpg",
            "title": "JavaScript: The Definitive Guide",
            "price": 40,
            "description": "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript"
        },
        {
            "id": 4,
            "author": " Eric Elliott",
            "imageLink": "https://m.media-amazon.com/images/I/512Hli3f6FL._SX258_BO1,204,203,200_QL70_ML2_.jpg",
            "title": "Programming JavaScript Applications",
            "price": 19,
            "description": "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows."
        },
        {
            "id": 5,
            "author": "Addy Osmani",
            "imageLink": "https://m.media-amazon.com/images/I/51H-31ivMTL._SX258_BO1,204,203,200_QL70_ML2_.jpg",
            "title": "Learning JavaScript Design Patterns",
            "price": 32,
            "description": "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you."
        },
        {
            "id": 6,
            "author": "Boris Cherny",
            "imageLink": "https://m.media-amazon.com/images/I/51csAp-ykgL._SX379_BO1,204,203,200_.jpg",
            "title": "Programming TypeScript",
            "price": 28,
            "description": "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system."
        },
        {
            "id": 7,
            "author": "Alex Banks, Eve Porcello",
            "imageLink": "https://m.media-amazon.com/images/I/51Kwaw5nInL._SX258_BO1,204,203,200_QL70_ML2_.jpg",
            "title": "Learning React, 2nd Edition",
            "price": 25,
            "description": "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary."
        },
        {
            "id": 8,
            "author": "Bradley Meck Alex Young and Mike Cantelon",
            "imageLink": "https://m.media-amazon.com/images/I/51twwFigyiL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
            "title": "Node.js in Action",
            "price": 38,
            "description": "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications."
        },
        {
            "id": 9,
            "author": "Kyle Simpson",
            "imageLink": "https://m.media-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg",
            "title": "You Don't Know JS Yet: Get Started",
            "price": 26,
            "description": "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!"
        },
        {
            "id": 10,
            "author": "John Resig and Bear Bibeault",
            "imageLink": "https://m.media-amazon.com/images/I/51Uo38cMKKL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
            "title": "Secrets of the JavaScript Ninja",
            "price": 33,
            "description": "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up."
        }
    ]

    let cart = [];
    const currency = '€';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#cart-ul');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#button-delete-all');

    // Funciones
    function togglePopup() {
        document.getElementById('popup-1').classList.toggle('active')
        // content.push(evento.target.getAttribute('mark'))
    }
    /**
    * Dibuja todos los productos a partir de la base de datos. No confundir con el cart
    */
    function renderizarProductos() {
        DB.forEach((item) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = item.title;

            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', item.imageLink);
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${item.price}${currency}`;
            // Boton
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn-add');
            miNodoBoton.textContent = 'Add to List';
            miNodoBoton.setAttribute('marcador', item.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);



            // const cardPopup = document.createElement('div');
            // cardPopup.classList.add('cardPopup');
            // DOMitems.appendChild(cardPopup);

            // const miNodoCardPopup = document.createElement('div');
            // miNodoCardPopup.classList.add('card-body');
            // cardPopup.appendChild(miNodoCardPopup);

            const popup = document.createElement('div');
            popup.classList.add('popup');
            popup.id = 'popup-1'
            miNodo.appendChild(popup);

            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            popup.appendChild(overlay);

            const content = document.createElement('div');
            content.classList.add('content');
            popup.appendChild(content);

            const closeBtn = document.createElement('button');
            closeBtn.classList.add('close-btn');
            closeBtn.textContent = 'X';
            // closeBtn.onclick = togglePopup();
            closeBtn.addEventListener('click', togglePopup);
            content.append(closeBtn);
            // miNodoBoton.setAttribute('marcador', item.id);

            // const h2Popup = document.createElement('h2');
            // h2Popup.classList.add('h2-popup');
            // h2Popup.id = 'h2-popup';
            // h2Popup.textContent = item.title;
            // content.append(h2Popup);

            // const miNodoTitle = document.createElement('h5');
            // miNodoTitle.classList.add('card-title');
            // miNodoTitle.textContent = item.title;

            const h2Popup = document.createElement('h2');
            h2Popup.classList.add('h2-popup');
            h2Popup.textContent = item.title;
            content.append(h2Popup);
            // console.log(item.title[0])

            const pPopup = document.createElement('p');
            pPopup.classList.add('p-popup');
            pPopup.id = 'p-opup';
            pPopup.textContent = item.description;
            content.append(pPopup);



            const showPopup = document.createElement('button');
            showPopup.classList.add('show-more-btn');
            showPopup.textContent = 'Show More';
            // showPopup.onclick = togglePopup();
            showPopup.addEventListener('click', togglePopup);
            miNodoCardBody.appendChild(showPopup);
            // showPopup.setAttribute('marcador', item.id);

            // showPopup.addEventListener('click', togglePopup);

            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

    /**
    * Evento para añadir un producto al cart de la compra
    */
    function anyadirProductoAlCarrito(evento) {
        // Anyadimos el Nodo a nuestro cart
        cart.push(evento.target.getAttribute('marcador'))
        // Actualizamos el cart
        renderizarCarrito();

    }

    /**
    * Dibuja todos los productos guardados en el cart
    */
    function renderizarCarrito() {
        // Vaciamos todo el html
        DOMcarrito.textContent = '';
        // Quitamos los duplicados
        const carritoSinDuplicados = [...new Set(cart)];
        // Generamos los Nodos a partir de cart
        carritoSinDuplicados.forEach((item) => {
            // Obtenemos el item que necesitamos de la variable base de datos
            const miItem = DB.filter((itemBaseDatos) => {
                // ¿Coincide las id? Solo puede existir un caso
                return itemBaseDatos.id === parseInt(item);
            });
            // Cuenta el número de veces que se repite el producto
            const numeroUnidadesItem = cart.reduce((total, itemId) => {
                // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                return itemId === item ? total += 1 : total;
            }, 0);
            // Creamos el nodo del item del cart
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].title} - ${miItem[0].price}${currency}`;
            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn-close');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
        // Renderizamos el precio total en el HTML
        DOMtotal.textContent = calcularTotal();
    }

    /**
    * Evento para borrar un elemento del cart
    */
    function borrarItemCarrito(evento) {
        // Obtenemos el producto ID que hay en el boton pulsado
        const id = evento.target.dataset.item;
        // Borramos todos los productos
        cart = cart.filter((carritoId) => {
            return carritoId !== id;
        });
        // volvemos a renderizar
        renderizarCarrito();
    }

    /**
     * Calcula el precio total teniendo en cuenta los productos repetidos
     */
    function calcularTotal() {
        // Recorremos el array del cart
        return cart.reduce((total, item) => {
            // De cada elemento obtenemos su precio
            const miItem = DB.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            // Los sumamos al total
            return total + miItem[0].price;
        }, 0).toFixed(2);
    }

    /**
    * Varia el cart y vuelve a dibujarlo
    */
    function vaciarCarrito() {
        // Limpiamos los productos guardados
        cart = [];
        // Renderizamos los cambios
        renderizarCarrito();
    }

    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

    // Inicio
    renderizarProductos();
    renderizarCarrito();
});

//////////////////FOOTER////////////////
const footer = document.createElement('footer');
body.append(footer);
footer.id = "footer";
footer.classList = "footer";



const brandFooter = document.createElement('div');
footer.append(brandFooter);
brandFooter.id = "brand-footer";
brandFooter.classList = "brand-footer";
// brandFooter.style = "background: blue";

const textBrandFooter = document.createElement('h2');
brandFooter.append(textBrandFooter);
textBrandFooter.id = "brand-footer-logo";
textBrandFooter.classList = "brand-footer-logo";
textBrandFooter.innerText = "BooksShop";

const copywriteContainer = document.createElement('div');
footer.append(copywriteContainer);
copywriteContainer.id = "copywrite-container";
copywriteContainer.classList = "copywrite-container";


const textCopywrite = document.createElement('h6');
textCopywrite.id = "text-copywrite";
textCopywrite.classList = "text-copywrite";
textCopywrite.innerText = '@2022 BookShop';
copywriteContainer.append(textCopywrite);

const mediaFooter = document.createElement('div');
footer.append(mediaFooter);
mediaFooter.id = "media-footer";
mediaFooter.classList = "media-footer";



const mediaFooterMenu = document.createElement('ul');
mediaFooterMenu.id = "media-footer-menu";
mediaFooterMenu.classList = "media-footer-menu";
mediaFooter.append(mediaFooterMenu);

const footerItems = ['Facebook', 'Instagram', 'Twitter']

footerItems.forEach(item => {
    const li = document.createElement("li");
    li.id = "footer-item";
    li.classList = "footer-item";
    li.append(document.createTextNode(item));
    mediaFooterMenu.append(li);
})