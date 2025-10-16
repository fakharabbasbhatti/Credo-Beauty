import './App.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import SpecialOffer from './components/Discount/SpecialOffers'
import ReferAFriend from './components/Discount/ReferAFriend'
import LiveChat from './pages/LiveChat'
import ProfilePage from './pages/ProfilePage'
import Wishlist from './pages/Wishlist'
import Rewards from './pages/Rewards'
import AddToCart from './pages/AddToCart'
import LoginForm from './pages/LoginForm'
import SignupForm from './pages/SignupForm'
import Footer from './pages/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/specialoffer" element={<SpecialOffer />} />
        <Route path="/referfriend" element={<ReferAFriend />} />
        <Route path="/livechat" element={<LiveChat />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/addtocart" element={<AddToCart />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
