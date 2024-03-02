export default function IncompleteTodos(props:any) {
  const { todos, onClickComplete, onClickDelete } = props;

  return (
    <div className="listField">
      <p>未完了のTODO</p>
      <ul>
        {todos.map((todo:string, index:number) =>  (
          <li key={todo}>
            <div>
              <p>{todo}</p>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          </li>
          ))}
      </ul>
    </div>
  );
}