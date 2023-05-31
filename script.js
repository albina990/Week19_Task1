/*
Воспользуемся открытым API — [JSONplaceholder](https://jsonplaceholder.typicode.com/). От этого API можно получить тестовые данные: строки, данные пользователя, набор постов. И все они будут лишены смысла — это идеально для тренировки.
    Нужно получить с сервера список постов и отобразить его на странице. 
    Создайте функции:
    - получает на вход объект поста и возвращает строку HTML-разметки;
    - добавляет полученную разметку в полученный контейнер;
    - делает GET запрос по адресу `https://jsonplaceholder.typicode.com/posts` и добавит их на страницу (для этого примените метод `forEach` и функции созданные ранее).
*/
function makePost(obj) { // функция получает на вход объект поста и возвращает строку HTML-разметки;
    let postHtml = `
    <h3>${obj.title}</h3>
    <p>${obj.body}</p>`;
    return postHtml;
}

function addPost(param) { // функция добавляет полученную разметку в созданный контейнер и возвращает этот контейнер
    let postContainer = document.createElement("div");
    postContainer.classList.add(".blog__item");
    postContainer.innerHTML = param;
    return postContainer;
}

let divBlog = document.querySelector(".blog"); // див, в который будут добавляться посты

async function getContent() { // функция делает GET запрос по адресу `https://jsonplaceholder.typicode.com/posts` и добавляет данные на страницу
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts"); 
        let data = await response.json(); 
        data.forEach((el) => {
            let post = makePost(el);
            let div = addPost(post);
            divBlog.append(div);
        })
    } catch (err) {
        console.error("Произошла ошибка!", err);
    }
}

getContent();  
