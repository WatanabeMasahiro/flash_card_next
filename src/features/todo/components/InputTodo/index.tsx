import styles from "./InputTodo.module.scss";

export default function InputTodo(props:any) {
  const { todoText, onChange, onClick, disabled } = props;

  return (
    <div className="todoForm">
      <input
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
        disabled={disabled}
      />
      <button
        className={`textBtn ${styles.test} ${styles.testBtn}`}
        onClick={onClick}
        disabled={disabled}
      >追加</button>
    </div>
  );
}