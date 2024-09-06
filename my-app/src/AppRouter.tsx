import { Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import DetailInformation from './pages/DetailInformation/DetailInformation';
import Layout from './Layout';
import RegisterPage from './pages/RegisterPage/RegisterPage';


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="registration" element={<RegisterPage />} />
        <Route path="post/:id" element={<DetailInformation />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
export default AppRouter;
