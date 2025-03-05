import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { UpdateProfileUrl } from "../../apis_url";
import AuthContext from "../../store/auth-context";

async function updateUserProfile(profile) {
  fetch(UpdateProfileUrl, {
    method: "POST",
    body: JSON.stringify({
      idToken: profile.token,
      displayName: profile.displayName,
      photoUrl: profile.photoURL,
      returnSecureToken: false,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
export default function UpdateProfile() {
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const userCtx = useContext(AuthContext);
  async function handleSubmit(e) {
    e.preventDefault();

    if (!displayName && !photoURL) {
      return setError("Please fill in at least one field.");
    }

    try {
      setError("");
      setLoading(true);

      // Update the user's profile
      await updateUserProfile({
        displayName,
        photoURL,
        token: userCtx.token,
      });

      // Redirect to the profile page after successful update
      history.replace("/profile");
    } catch (error) {
      console.error("Failed to update profile", error);
      setError("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>Update Profile</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit} className="theme-form">
        <div>
          <label className="theme-label">Display Name:</label>
          <input
            className="theme-input"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        <div>
          <label className="theme-label">Photo URL:</label>
          <input
            className="theme-input"
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading} className="theme-button">
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
      <button
        onClick={() => history.replace("/profile")}
        className="theme-button-danger"
      >
        Cancel
      </button>
    </div>
  );
}
