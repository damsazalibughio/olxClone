import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Mall from './pages/Mall';
import Motors from './pages/Motors';
import PageNotFound from './pages/PageNotFound';
import Property from './pages/Property';
import {useEffect, useContext} from 'react';
// import {db} from './firebaseConfig';
// import {collection, getDocs} from 'firebase/firestore';
import { GlobalContext } from './store/GlobalState'
import Admin from './pages/Admin';
import Dashboard from './adminpages/Dashboard';
import ProductsView from './adminpages/ProductsView'



function App() {
  const {getCategories} =useContext(GlobalContext)
  const {getLocation} =useContext(GlobalContext)
  const {getProductDetails} =useContext(GlobalContext)


 
  // const [users, setUsers] = useState([])
  useEffect(() => {
    
     
     
    getCategories()
    getLocation()
    getProductDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    
   
      // const getUsers = async () =>{
      //     const userCollectionRef = collection(db, 'users')
      //     const data = await getDocs(userCollectionRef)
      //    setUsers(
      //         data.docs.map((doc) => (
      //             {...doc.data(), id: doc.id}
      //         ))
      //     )
      // }
      // getUsers()

   
  }, [])
  return (
    <div className="app-container">

      <Router>
    

        <Routes>
          <Route path='/' element={<App/>} />
          <Route index element={<Home/>} />
          <Route path='/motors' element={<Motors/>} />
          <Route path='/mall' element={<Mall/>} />
          <Route path='/property' element={<Property/>} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/admin/dashboard' element={<Dashboard/>} />
          <Route path='/admin/productsview' element={<ProductsView/>} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>

       
      </Router> 
      
      
    </div>
  );
}

export default App;
