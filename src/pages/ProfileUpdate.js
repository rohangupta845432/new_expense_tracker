import EmailVerifecationForm from "../component/Auth/EmailVerifecationForm";
import Logout from "../component/Auth/Logout";
import Navbar from "../component/UI/Navbar";

const ProfileUpdatePage = () => {
  return (
    <>
      <Navbar />
      <div>
        <h4>YOur Profile Page</h4>
        <EmailVerifecationForm />
        <Logout />
      </div>
    </>
  );
};

export default ProfileUpdatePage;
