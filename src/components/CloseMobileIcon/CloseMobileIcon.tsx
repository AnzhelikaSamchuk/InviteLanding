interface IProps {
  color?: string;
}

const CloseMobileIcon = (props: IProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 5L19 19" stroke={props.color ?? '#303443'} strokeWidth="2" strokeLinecap="round" />
      <path d="M5 19L19 5.00002" stroke={props.color ?? '#303443'} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export default CloseMobileIcon;
