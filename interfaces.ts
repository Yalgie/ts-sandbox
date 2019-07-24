var showTodo = function(todo: {title: string, text: string}) {
    console.log(todo.title, todo.text);
}

showTodo({
    title: "Todo Title",
    text: "Todo Text"
});