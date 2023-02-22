export function Display(props: any) {
    return (
      <span className="number">{props.number || ""}</span>
    );
  }