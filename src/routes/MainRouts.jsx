import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainlayout from '../layout/Mainlayout';
import HomePage from '../pages/Home/HomePage';
import AuthPage from '../pages/auth/AuthPage';
import ProductList from '../components/ProductList';
import AddProductPage from '../pages/addPage/AddProductPage';
import EditProductPage from '../pages/editPage/EditProductPage';
import DetailsPage from '../pages/details/DetailsPage';
import CartPage from '../pages/cartPage/CartPage';
import WishPage from '../pages/wishPage/WishPage';
import AllBrands from '../pages/allBrandPage/AllBrands';
import SuccesPage from '../pages/seccess/SuccesPage';
import RolexPage from '../pages/navbar/watchPages/RolexPage';
import DeBethunePage from '../pages/navbar/watchPages/DeBethunePage';
import CartierPage from '../pages/navbar/watchPages/CartierPage';
import PatekPage from '../pages/navbar/watchPages/PatekPage';
import OmegaPage from '../pages/navbar/watchPages/OmegaPage';
import TudorPage from '../pages/navbar/watchPages/TudorPage';
import JacobPage from '../pages/navbar/watchPages/JacobPage';
import RichardPage from '../pages/navbar/watchPages/RichardPage';
import VacheronPage from '../pages/navbar/watchPages/VacheronPage';
import PaymentForm from '../components/checkout/PaymentForm';
import ProfilePage from '../pages/profile/ProfilePage';

function MainRouts() {
  return (
    <Routes>
      <Route element={<Mainlayout />}>
        <Route path="/allbrand" element={<AllBrands />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/watches" element={<ProductList />} />
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/edit/:id" element={<EditProductPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wish" element={<WishPage />} />
        <Route path="/rolex" element={<RolexPage />} />
        <Route path="/debethune" element={<DeBethunePage />} />
        <Route path="/cartier" element={<CartierPage />} />
        <Route path="/patek" element={<PatekPage />} />
        <Route path="/omega" element={<OmegaPage />} />
        <Route path="/tudor" element={<TudorPage />} />
        <Route path="/jacob" element={<JacobPage />} />
        <Route path="/richard" element={<RichardPage />} />
        <Route path="/vacheron" element={<VacheronPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="/success" element={<SuccesPage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/order" element={<PaymentForm />} />
    </Routes>
  );
}

export default MainRouts;
