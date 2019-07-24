// Without Interface
var showTodo = function(todo: {title: string, text: string}) {
    console.log(todo.title, todo.text);
}

showTodo({
    title: "Todo Title",
    text: "Todo Text"
});

// With Interface
interface Todo {
    title: string;
    text: string;
}

var showTodo2 = function(todo: Todo) {
    console.log(todo.title, todo.text);
}

showTodo2({
    title: "Todo Title 2",
    text: "Todo Text 2",
});