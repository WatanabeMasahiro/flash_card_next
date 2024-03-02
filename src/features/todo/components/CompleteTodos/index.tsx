export default function CompleteTodos(props:any) {
  const { todos, onClickBack } = props;

  return (
    <div className="listField -bg-white">
      <p>完了のTODO</p>
      <ul>
        {todos.map((todo:string, index:number) =>  (
          <li key={todo}>
            <div>
              <p>{todo}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}