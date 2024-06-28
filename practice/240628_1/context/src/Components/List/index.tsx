interface IProps<T> {}

const List = <T,>(): JSX.Element => {
  return (
    <ul>
      <li>
        <ul className="flex justify-between">
          <li>No.</li>
          <li>Title</li>
          <li>User</li>
          <li>CreatedAt</li>
        </ul>
      </li>
      <li>
        <ul className="flex justify-between">
          <li>1.</li>
          <li>점심 메뉴 추천받음</li>
          <li>방지완</li>
          <li>24-06-28</li>
        </ul>
      </li>
    </ul>
  );
};

export default List;
