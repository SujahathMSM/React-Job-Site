import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './Layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import AddJobsPage from './pages/AddJobsPage';
import NotFoundPage from './pages/NotFoundPage';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
       <Route index element={<HomePage/>}/>
       <Route path='/jobs' element={<JobsPage/>}/>
       <Route path='/add-job' element={<AddJobsPage/>}/>
       <Route path='*' element={<NotFoundPage/>}/>
    </Route>
  )
)
const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
