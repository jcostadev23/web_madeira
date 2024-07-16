interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

const Button: React.FC<Props> = (props) => {
  const { disabled, onClick, children } = props;
  return (
    <button disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
