import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { LoginScene } from './components/LoginScene'
import { useLogin } from './hooks/useLogin'
import { DashboardScene } from './components/DashboardScene';
import { PublicLayout } from './layout/PublicLayout';
import { PrivateLayout } from './layout/PrivateLayout';
import { ResultScene } from './components/ResultScene';

function App() {
  const { isLogin, login, logout } = useLogin();
  return (
    <>
      <Routes>
        <Route element={<PublicLayout isLogin={isLogin}></PublicLayout>}>
          <Route path='/' element={<LoginScene login={login} isLogin={isLogin} ></LoginScene>}  ></Route>
        </Route>
        <Route element={<PrivateLayout isLogin={isLogin} ></PrivateLayout>}>
          <Route path='/dashboard' element={<DashboardScene logout={logout} isLogin={isLogin}></DashboardScene>}  ></Route>
          <Route path='/result' element={<ResultScene></ResultScene>}></Route>
        </Route>
      </Routes >
    </>
  )
}

export default App
