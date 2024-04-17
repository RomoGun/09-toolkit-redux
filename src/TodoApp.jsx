import { useGetTodosQuery } from "./Store/apis"


export const TodoApp = () => {

  const {data: todos = [], isLoading} = useGetTodosQuery();
  console.log(todos);
  

  return (
    <>
        <h1>Todos - RTK Query</h1>
        <hr />
        <h4>IsLoading: { isLoading ? 'Ture' : 'False' }</h4>

        <pre></pre>

        <ul>
          { todos.map( todo => (
            <li> key={ todo.id }
               <Strong>{ todo.completed ? 'DONE':'Pending' }</Strong>
              { todo.title }
            </li>
          ))}
        </ul>

        <button>
            Next
        </button>

    </>
  )
}
