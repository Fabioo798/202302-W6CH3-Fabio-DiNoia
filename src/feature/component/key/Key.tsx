export function Key(props: any) {
    const { value, onClick } = props;
  
    return (
      <li>
        <button className="key" onClick={() => onClick(value)}>
          {value}
        </button>
      </li>
    );
  }
  