interface GoToButtonProps {
  goto: (index: number) => void;
}

function GoToButton({ goto }: GoToButtonProps) {
  const handleClick = () => {
    goto(0);
  };

  return <div onClick={handleClick}></div>;
}

export default GoToButton;
