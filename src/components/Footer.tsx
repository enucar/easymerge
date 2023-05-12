import Container from './Container';

type Props = {
  className?: string;
};

const defaultProps: Props = {
  className: '',
};

const Footer = ({className}: Props) => {
  return (
    <div className={`text-center px-4 ${className}`}>
      <Container>
        <small className='block mb-4'>
          Enjoy using EasyMerge? Consider supporting us! Your kind donations
          help maintain this service and keep it free for everyone.
        </small>
        <a
          href='https://www.buymeacoffee.com/enucar'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src='https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'
            alt='Buy Me A Coffee'
            style={{
              height: 37.5,
              width: 135.625,
            }}
            className='mx-auto'
          />
        </a>
      </Container>
    </div>
  );
};

Footer.defaultProps = defaultProps;

export default Footer;
