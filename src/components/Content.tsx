import {useCallback, useState} from 'react';
import Button from './Button';
import Container from './Container';
import DropField from './DropField';
import {toast} from 'react-toastify';
import merge from '../utils/merge';
import {saveAs} from 'file-saver';

type Props = {
  className?: string;
};

const defaultProps: Props = {
  className: '',
};

const Content = ({className}: Props) => {
  const [loading, setLoading] = useState<boolean>(false);

  const [frontPage, setFrontPage] = useState<ArrayBuffer | null>(null);
  const [backPage, setBackPage] = useState<ArrayBuffer | null>(null);

  const onDownload = useCallback(
    async (e: React.MouseEvent<HTMLElement>) => {
      setLoading(true);

      try {
        if (frontPage != null && backPage != null) {
          const mergedPdfBytes = await merge(frontPage, backPage);

          const blob = new Blob([mergedPdfBytes], {type: 'application/pdf'});
          saveAs(blob, 'merged.pdf');

          toast.success('PDFs merged successfully!');

          setFrontPage(null);
          setBackPage(null);
        } else {
          toast.error('Upload both sides to proceed');
        }
      } catch (e: any) {
        toast.error(e.message);
      } finally {
        setLoading(false);
      }
    },
    [frontPage, backPage]
  );

  const handleFrontUpload = useCallback((page: ArrayBuffer) => {
    setFrontPage(page);
  }, []);

  const handleBackUpload = useCallback((page: ArrayBuffer) => {
    setBackPage(page);
  }, []);

  return (
    <main className={`px-4 ${className}`}>
      <Container>
        <div className='md:flex md:justify-between md:space-x-12 md:space-y-0 space-y-12 mb-12'>
          <div className='flex-1'>
            <h2 className='text-center text-2xl font-bold mb-4'>Front-Side</h2>
            <DropField
              side='front'
              disabled={loading}
              page={frontPage}
              setPage={handleFrontUpload}
            />
          </div>
          <div className='flex-1'>
            <h2 className='text-center text-2xl font-bold mb-4'>Back-Side</h2>
            <DropField
              side='back'
              disabled={loading}
              page={backPage}
              setPage={handleBackUpload}
            />
          </div>
        </div>
        <Button
          onClick={onDownload}
          loading={loading}
          disabled={!frontPage || !backPage}
        >
          Merge & Download
        </Button>
      </Container>
    </main>
  );
};

Content.defaultProps = defaultProps;

export default Content;
