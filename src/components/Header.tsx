import Container from './Container';
import Logo from './Logo';

type Props = {
  className?: string;
};

const defaultProps: Props = {
  className: '',
};

const Header = ({className}: Props) => {
  return (
    <header className={`py-8 px-4 ${className}`}>
      <Container>
        <div className='text-center'>
          <Logo className='max-w-[200px] mx-auto mb-12' />
          <p className='max-w-xl mx-auto'>
            Welcome to EasyMerge, your one-stop solution for merging scanned
            documents. If you're dealing with a{' '}
            <strong>non-duplex scanner</strong>, our easy-to-use tool lets you
            upload front and back PDFs, seamlessly combining them into a single
            document. Simplify your scanning process with EasyMerge - merging
            made easy.
          </p>
        </div>
      </Container>
    </header>
  );
};

Header.defaultProps = defaultProps;

export default Header;
