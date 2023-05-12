import {PDFDocument} from 'pdf-lib';
import {useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {toast} from 'react-toastify';

type Props = {
  side: string;
  disabled: boolean;
  page: ArrayBuffer | null;
  setPage: (file: ArrayBuffer) => void;
};

const DropField = ({side, disabled, page, setPage}: Props) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageName, setPageName] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      const filesCount = acceptedFiles.length;

      if (filesCount === 0) {
        toast.error('Please upload a PDF');
        return;
      }

      if (filesCount > 1) {
        toast.error('Only one PDF allowed');
        return;
      }

      const file = acceptedFiles[0];

      const reader = new FileReader();
      reader.onloadend = async () => {
        if (reader.result instanceof ArrayBuffer) {
          const pdfDocument = await PDFDocument.load(reader.result);
          const pagesCount = pdfDocument.getPages().length;

          setNumPages(pagesCount);
          setPageName(file.name);

          setPage(reader.result);
        }
      };
      reader.readAsArrayBuffer(file);
    },
    [setPage]
  );

  const {getRootProps, getInputProps, isDragActive, isDragReject} = useDropzone(
    {
      onDrop,
      disabled: disabled,
      accept: {
        'application/pdf': ['.pdf'],
      },
    }
  );

  const text =
    side === 'front'
      ? 'Drag and drop your front-side PDF here or click to upload.'
      : 'Drag and drop your back-side PDF here or click to upload.';

  const hint = side === 'front' ? 'START → END' : 'END → START';

  return (
    <div>
      <div
        {...getRootProps({
          'aria-label': 'drag and drop area',
          role: 'button',
          className: `transition-transform shadow mb-4 text-center bg-gray-200 p-10 rounded border-2 border-dashed cursor-pointer ${
            isDragActive && !isDragReject
              ? 'border-primary scale-105'
              : 'border-gray-500'
          } ${page ? 'bg-green-400' : ''}`,
        })}
      >
        <input {...getInputProps()} />
        <p>
          {text} <em className='font-bold'>({hint})</em>
        </p>
      </div>
      <div className='text-center'>
        <small>
          {page
            ? `${pageName} (${numPages} page${numPages > 1 ? 's' : ''})`
            : 'No file uploaded yet'}
        </small>
      </div>
    </div>
  );
};

export default DropField;
