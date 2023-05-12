type Props = {
  className?: string;
};

const defaultProps: Props = {
  className: '',
};

const Logo = ({className}: Props) => {
  return (
    <img
      src='logo.png'
      alt='EasyMerge - Simplify Scanning'
      aria-label='EasyMerge - Simplify Scanning'
      className={className}
    />
  );
};

Logo.defaultProps = defaultProps;

export default Logo;
