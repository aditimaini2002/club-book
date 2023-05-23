// import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Home';
import {Routes ,Route} from 'react-router-dom';
import Registration from './components/SignUp2';
import LoginPage from './components/SignIn2';
import Home2 from './components/Home2';

import AboutUs from './components/about/about';
import ContactUs from './components/contact/ContactUs.jsx';
import CustodyProfile from './components/Socities/Custody';
import BhangraProfile from './components/Socities/Bhangra';
import LitsProfile from './components/Socities/Lits';
import ReviewPage from './components/review/Reviews.js';
import GiddaProfile from './components/Socities/Gidda';
import TasveerProfile from './components/Socities/Tasveer';
import IeiProfile from './components/Socities/Iei';
import IeeeProfile from './components/Socities/Ieee';
import BnbProfile from './components/Socities/Bnb';
import Gallery from './components/Cgallery/Gallery';

function App() {
  // const profilePhoto = 'url/to/profile/photo.jpg';
  // const backgroundPhoto = 'url/to/background/photo.jpg';
  // const posts = [
  //   { id: 1, title: 'Post 1', content: 'Lorem ipsum dolor sit amet.' },
  //   { id: 2, title: 'Post 2', content: 'Consectetur adipiscing elit.' },
  //   { id: 3, title: 'Post 3', content: 'Sed do eiusmod tempor incididunt.' },
  // ];
  return (
    // <div className="App">
    //   <Navbar/>

    // </div>
    
    
    <div>
      <Routes>

        <Route path='/home' element={<Home2/>}/>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/SignUp' element={<Registration/>}/>
        {/* <Route path='/SignIn' element={<Registration/>}/> */}
        {/* <Route path='/custody' value="custody" element={<Profile/>}/> */}
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/custody' element={<CustodyProfile/>}/>
        <Route path='/bhangra' element={<BhangraProfile/>}/>
        <Route path='/bhangra' element={<BhangraProfile/>}/>
        <Route path='/gidda' element={<GiddaProfile/>}/>
        <Route path='/lits' element={<LitsProfile/>}/>
        <Route path='/tasveer' element={<TasveerProfile/>}/>
        <Route path='/iei' element={<IeiProfile/>}/>
        <Route path='/ieee' element={<IeeeProfile/>}/>
        <Route path='/b&b' element={<BnbProfile/>}/>
        <Route path='/reviews' element={<ReviewPage/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
      </Routes>
      {/* <SocialMediaProfile
        profilePhoto={profilePhoto}
        backgroundPhoto={backgroundPhoto}
        posts={posts}
      /> */}
    </div>
  );
}

export default App;
