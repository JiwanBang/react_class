import { ChangeEvent, FC, useCallback, useState } from "react";
import AddComp from "../../Components/Todo/Add";

export interface IProps {
  addItem(content: string, priority: number, limit: string): void;
}

const Add: FC<IProps> = ({ addItem }) => {
  const [content, setContent] = useState<string>("");
  const [priority, setPriority] = useState<number>(0);
  const [limit, setLimit] = useState<string>("");

  const changeContent = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
      setContent(value);
    },
    []
  );

  const changeLimit = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      setLimit(value);
    },
    [limit]
  );

  const submit = useCallback(() => {
    addItem(content, priority, limit);
    setContent("");
    setPriority(0);
    setLimit("");
  }, [content, priority, limit]);

  const changePriority = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      const temp = +value;
      if (!isNaN(temp)) setPriority(temp);
      // e 무리수 << 숫자
      // typeof NaN == number
    },
    []
  );
  return (
    <AddComp
      content={content}
      priority={priority}
      limit={limit}
      changeLimit={changeLimit}
      changeContent={changeContent}
      changePriority={changePriority}
      submit={submit}
    />
  );
};

export default Add;
