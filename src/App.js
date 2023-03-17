import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListOfCompany from './components/ListofCompany';
import Company from './components/Company';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Navbarr from "./components/Navbarr";
import Login from './components/Auth/Signup';
import SignUp from './components/Auth/Login';
import { useAuthContext } from "./hooks/useAuthContext";
import Themes from '../src/components/Themes';
import ChatRoom from './components/chatApp/ChatRoom';
import ChatHome from './components/chatApp/ChatHome';
import Mentoring from './components/Mentoring';
import Screening from './components/Screening';
import Resources from './components/Resources';
import OneResource from './components/OneResource';
import { companyData } from './components/companyData';
import Home from './components/Thread/Home';
import Replies from './components/Thread/Replies';
import Main from './components/Main';
import Consulting from './components/Consulting';
import WriteBlog from './components/WriteBlog';


function App() {

  const {user} = useAuthContext();
  console.log(user);
  return (
    <Router>

   
    {/* <div className="App">
      <ListOfCompany />
    </div> */}
    <Navbarr />
     <Routes>
        <Route path='/' exact element={!user ? <Login /> : <Main /> } />
        <Route path='/login'  element={!user ? <Login /> : <Main /> } />
        <Route path='/signup'  element={!user ? <SignUp /> : <Main /> } />
        <Route path='/logout'  element = { !user ? <Login /> : <Main /> } />
        <Route path='/company' element={!user ? <Login /> : <ListOfCompany companyData={companyData} /> } />
        <Route path='/company/:id' element={  <Company />  } />
        <Route path='/themes' element={ !user ? <Login /> : <Themes />  } />
        <Route  path="/:roomId"  element={  <ChatRoom />  } />
        <Route path='/chatHome'  element={  <ChatHome />  } />
        <Route path='/investors'  element={ !user ? <Login /> :  <Mentoring />  } />
        <Route path='/consulting'  element={ !user ? <Login /> :  <Consulting />  } />
        <Route path='/screening'  element={ !user ? <Login /> : <Screening />  } />
        <Route path='/resources'  element={ !user ? <Login /> :  <Resources />  } />
        <Route path='/resPage/:id'  element={  <OneResource />  } />
        <Route path='/thread'  element={ !user ? <Login /> : <Home />  } />
        <Route path='/:id/replies' element={<Replies />} />
        <Route path='/writeblog' element={<WriteBlog />} />
      </Routes>

    </Router>
  );
}

export default App;
