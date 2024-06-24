import { ChangeEvent, FC } from "react";
export interface IProps {
  content: string;
  priority: number;
  limit: string;
  changeLimit({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  changePriority({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  changeContent({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  submit(): void;
}
const Add: FC<IProps> = ({
  content,
  priority,
  limit,
  changeLimit,
  changePriority,
  changeContent,
  submit,
}) => {
  return (
    <div className="flex items-center gap-2 p-1 border-b-4 border-black border-double">
      <label htmlFor="todo-priority">Priority:</label>
      <input
        className="flex-1 border rounded"
        type="number"
        id="todo-priority"
        value={priority}
        onInput={changePriority}
        placeholder="priority"
      />
      <input
        className="flex-1 border rounded"
        type="text"
        value={content}
        onInput={changeContent}
        placeholder="todo"
      />
      <input
        className="border rounded border-gray-500"
        type="date"
        id="todo-content"
        value={limit}
        onInput={changeLimit}
      />
      <button
        onClick={submit}
        className={[
          "border",
          "border-gray-400",
          "rounded",
          "p-1",
          "px-5",
          "select-none",
        ].join(" ")}
        //   onClick={() => this.add()}
      >
        추가
      </button>
    </div>
  );
};

export default Add;
