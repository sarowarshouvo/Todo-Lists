const todos=['Practising JS','Making Lunch'];
let task=prompt("What would u like to do? ");
while(task !=='quit' && task !=='q'){
    if(task==='list'){
        console.log("*******"); 
        for(let i=0;i<todos.length;i++){
            console.log(`${i} : ${todos[i]}`);
        }    
        console.log("*******");
    }else if(task==='new'){
       const newTodo=prompt("Make new todo");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    }else if(task==='delete'){
        const remove=parseInt(prompt("Enter an index to delete: "));
        if (!Number.isNaN(remove)) {
            const removedtodo=todos.splice(remove,1);
            console.log(`Ok deleted ${removedtodo[0]}`);
        }else {
            console.log("Unknown Index");
        }
    }
    task=prompt("What would u like to do?");
}
console.log("U Quit the app!");