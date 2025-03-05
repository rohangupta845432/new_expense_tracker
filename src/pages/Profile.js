import Welcome from "../component/Profile/Welcome";
import Card from "../component/UI/Card";
import Container from "../component/UI/Container";
import Navbar from "../component/UI/Navbar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Card>
          <div>
            <h4>Your Profile</h4>
            <Welcome />
          </div>
        </Card>
      </Container>
    </>
  );
};

export default Profile;
