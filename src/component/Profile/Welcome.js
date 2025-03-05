import { useContext, useEffect, useState } from "react";
import { GetProfileUrl } from "../../apis_url";
import AuthContext from "../../store/auth-context";
import UpdateProfile from "./UpdateProfile";
import Modal from "../UI/Modal";
import EmailVerifecationForm from "../Auth/EmailVerifecationForm";
import AvtivatePremium from "./AvtivatePremium";
import Card from "../UI/Card";
import ExpenstContext from "../../store/expense-context";
const Welcome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { expenses } = useContext(ExpenstContext);
  const userCtx = useContext(AuthContext);
  const [userData, setUserdata] = useState({
    displayName: "",
    photoUrl: "",
    email: "",
    emailVerified: false,
  });
  useEffect(() => {
    if (!userCtx.token) return; // Prevent fetch if token is missing

    fetch(GetProfileUrl, {
      method: "POST",
      body: JSON.stringify({
        idToken: userCtx.token,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserdata((state) => ({
          ...state,
          displayName: data.users[0].displayName || "",
          photoUrl: data.users[0].photoUrl || "",
          email: data.users[0].email || "",
          emailVerified: data.users[0].emailVerified,
        }));
      })
      .catch((error) => console.error("Fetch error:", error));
  }, [userCtx.token]);

  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div>
        <img src={userData.photoUrl} alt="User Profile" />
        <div>
          <h3>Name : {userData.displayName}</h3>
          <h4>Email - Id : {userData.email}</h4>
        </div>
        <div className="d-flex m-5">
          <button onClick={() => setIsOpen(true)} className="theme-button">
            Update Your Profile
          </button>
          {!userData.emailVerified && <EmailVerifecationForm />}
          <AvtivatePremium />
        </div>
        <div className="d-flex m-5">
          <Card>
            <h5>User since</h5>
            <h4>{userData.createdAt}</h4>
          </Card>
          <Card>
            <h5>User since</h5>
            <h4></h4>
          </Card>
          <Card>
            <h5>Total Expense</h5>
            <h4>
              {expenses.length
                ? expenses.reduce(
                    (total, expense) => total + Number(expense.amount),
                    0
                  )
                : 0}
            </h4>
          </Card>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <UpdateProfile />
      </Modal>
    </div>
  );
};

export default Welcome;
