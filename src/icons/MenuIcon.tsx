interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const MenuIcon = ({ style }: Props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-menu-2"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#6f32be"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
      </svg>
    </>
  );
};

export default MenuIcon;
