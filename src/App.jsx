import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Header from "./pages/Header";
import LoginSignUpPage from "./pages/LoginSignUpPage";
import AIDemo from "./pages/AIDemo";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Footer from "./components/Footer";
import TemplateGallery from "./pages/TemplateGallery";
import ScrollTop from "./components/ScrollTop";
import Admin from "./pages/admin/Admin";
import Users from "./pages/admin/Users";
import Resumes from "./pages/admin/Resumes";
import ProtectedRoute from "./pages/ProtectedRoute";
import { connect } from "react-redux";
import VerifiedUsers from "./pages/admin/VerifiedUsers";
import UnverifiedUsers from "./pages/admin/UnverifiedUsers";
import SubscribedUsers from "./pages/admin/SubscribedUsers";
import Dashboard from "./pages/Dashboard";
import ResumeTemplatesGallery from "./pages/ResumeTemplatesGallery";
import CreateResume from "./pages/CreateResume";
import AI from "./pages/AI";

function App({userInfo}) {
  const user = userInfo !== null && userInfo !== undefined ? userInfo : null;
  return (
    <div className="App">
      <div style={{ marginBottom: '30px' }}>
        <Header />
      </div>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginSignUpPage />} />
        <Route path="/register" element={<LoginSignUpPage />} />
        <Route path="/ai-demo" element={<AIDemo />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/templates" element={<ResumeTemplatesGallery />} />
        <Route path="/create" element={<CreateResume />} />
        

        {/* Protected Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user !== null && user !== undefined ? user?.user : null}>
              <Dashboard />
            </ProtectedRoute>
          }
        ></Route>
        
        {/* Protected AI Routes */}
        <Route
          path="/ai"
          element={
            <ProtectedRoute user={user !== null && user !== undefined ? user?.user : null}>
              <AI />
            </ProtectedRoute>
          }
        ></Route>

        {/* Protected Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute user={user !== null && user !== undefined ? user?.user : null}>
              <Admin />
            </ProtectedRoute>
          }
        >
          {/* Users sub-routes */}
          <Route path="users">
            <Route path="all" element={<Users />} />
            <Route path="verified" element={<VerifiedUsers />} />
            <Route path="unverified" element={<UnverifiedUsers />} />
            <Route path="subscribed" element={<SubscribedUsers />} />
            <Route path="*" element={<LandingPage />} />
          </Route>

          {/* Resumes */}
          <Route path="resumes" element={<Resumes />} />
          <Route path="*" element={<LandingPage />} />
        </Route>
        <Route path="*" element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
  userInfo: state.auth.userInfo,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
