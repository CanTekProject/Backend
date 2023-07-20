//import Header from "./Header";
//import Footer from "./Footer";
import "../../assets/scss/partials/_userprofile.scss"; // Import the SCSS file
import styled from "styled-components";

const HeaderH1 = styled.div`
  padding: 35px;
  text-align: center;
  font-size: 50px;
  color: white;
`;

const FormInput = styled.input`
  color: black;
`;
const Profile = () => {
  return (
    <>
      {/* <Header></Header> */}
      <div className="container">
        <HeaderH1>Edit Profile</HeaderH1>

        <div className="form-container" id="form-container">
          <form action="" method="post">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <FormInput
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <FormInput
                type="email"
                name="email"
                id="email"
                placeholder="Username@gmail.com"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="passwrd">Password</label>
              <FormInput
                type="password"
                name="passwrd"
                id="passwrd"
                placeholder="Password"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="about">About Me</label>
              <textarea
                name="about"
                id="about"
                cols={20}
                rows={5}
                placeholder="Tell us about yourself"
                className="form-control"
              ></textarea>
            </div>

            <div className="button-group">
              <button type="submit" className="btn1">
                Save Changes
              </button>
              <button type="submit" className="btn1">
                Delete Account
              </button>
            </div>
          </form>
        </div>

        <div className="profile-pic-container">
          <label htmlFor="profile-pic">Profile Picture</label>
          <input type="file" className="form-control-file" />
        </div>

        {/* <div className="social-links-container">
          <div className="form-group">
            <input
              type="text"
              name="link1"
              id="link1"
              placeholder="Link to social profile"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="link2"
              id="link2"
              placeholder="Link to social profile"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="link3"
              id="link3"
              placeholder="Link to social profile"
              className="form-control"
            />
          </div>
        </div> */}
      </div>
      {/* <Footer></Footer> */}
    </>
  );
};

export default Profile;
