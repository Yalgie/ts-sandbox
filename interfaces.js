// Without Interface
var showTodo = function (todo) {
    console.log(todo.title, todo.text);
};
showTodo({
    title: "Todo Title",
    text: "Todo Text"
});
var showTodo2 = function (todo) {
    console.log(todo.title, todo.text);
};
showTodo2({
    title: "Todo Title 2",
    text: "Todo Text 2"
});
