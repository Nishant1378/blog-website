import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper"> 
        <div className="settingsTitle">
            <span className="setingsUpdateTitle">Update Your Account</span>
            <span className="setingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
            </div>   
            <label>Username</label>
          <input type="text" placeholder="Safak" name="name" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
     <Sidebar/>
    </div>
  )
}

export default Settings
