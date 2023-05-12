type Props = {
  children?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const defaultProps: Props = {
  loading: false,
  disabled: false,
};

const Button = ({children, loading, disabled, onClick}: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={loading || disabled}
      className='disabled:opacity-40 p-2 shadow rounded bg-accent hover:bg-opacity-95 disabled:hover:bg-opacity-100 active:bg-accent-600 disabled:active:bg-accent-500 transition-colors text-text text-center font-semibold w-full border-accent-600'
    >
      {loading ? (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          className='mx-auto'
        >
          <path d='M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z'>
            <animateTransform
              attributeName='transform'
              type='rotate'
              dur='0.75s'
              values='0 12 12;360 12 12'
              repeatCount='indefinite'
            />
          </path>
        </svg>
      ) : (
        children
      )}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
