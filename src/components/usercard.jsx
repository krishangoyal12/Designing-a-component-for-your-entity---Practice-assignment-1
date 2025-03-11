import './usercard.css';

const UserCard = () => {
  // Dummy static data
  const profilePhoto = "https://www.w3schools.com/w3images/avatar2.png";
  const name = 'John Doe';
  const email = 'johndoe@example.com';
  const phoneNumber = '+1234567890';
  const address = '123 Main Street, Anytown, USA';

  return (
    <div className="card-container">
      <div className="user-card">
        <div className="profile-pic">
          <img src={profilePhoto} alt="Profile" />
        </div>
        <div className="user-details">
          <h2>{name}</h2>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phoneNumber}</p>
          <p><strong>Address:</strong> {address}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
