import {ToastContainer} from 'react-toastify';
import Content from './components/Content';
import Header from './components/Header';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className='text-text pb-16'>
      <Header className='mb-4' />
      <Content className='mb-8' />
      <Footer />
      <ToastContainer
        position='bottom-center'
        autoClose={4000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  );
}

export default App;
