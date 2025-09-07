import React from 'react';
import profile from '../assets/profile.jpg';

const Profile = ({ isEditable }) => {
  const [name, setName] = React.useState('Jane Doe');
  const [bio, setBio] = React.useState(
    'I am a dedicated software tester with a strong commitment to continuous learning and professional growth, striving to excel in my field and ensure the highest quality in every project.'
  );
  const [phone, setPhone] = React.useState('+63-9123456768');
  const [email, setEmail] = React.useState('bugtok@mailer.com');
  const [location, setLocation] = React.useState('Your City, Philippines');
  const [profileImage, setProfileImage] = React.useState(profile);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative bg-white p-8 rounded-2xl shadow-xl mt-8 border border-gray-100">
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-blue-100 rounded-full opacity-25"></div>
      <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-48 h-48 bg-purple-100 rounded-lg transform rotate-45 opacity-25"></div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 relative group mb-6 md:mb-0">
          <div className="relative">
            <img
              src={profileImage}
              alt="Profile"
              className="w-48 h-48 rounded-2xl shadow-lg object-cover mx-auto md:mx-0 border-4 border-white"
            />
            {isEditable && (
              <label
                htmlFor="profile-upload"
                className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center rounded-2xl cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <svg
                  className="w-10 h-10 text-white mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span className="text-white text-sm font-medium">Change Photo</span>
                <input
                  id="profile-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            )}
          </div>
        </div>
        <div className="w-full md:w-2/3 md:pl-8 text-center md:text-left">
          {isEditable ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-4xl md:text-5xl font-bold text-gray-800 bg-transparent border-b-2 border-dashed border-gray-300 focus:border-blue-500 focus:outline-none w-full text-center md:text-left pb-2 mb-4"
              placeholder="Your Name"
            />
          ) : (
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{name}</h1>
          )}
          {isEditable ? (
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="text-lg text-gray-600 mt-4 bg-transparent border-b-2 border-dashed border-gray-300 focus:border-blue-500 focus:outline-none w-full resize-none text-center md:text-left pb-2"
              rows="3"
              placeholder="Your professional bio"
            />
          ) : (
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">{bio}</p>
          )}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div className="flex items-center justify-center md:justify-start">
              <div className="bg-blue-100 p-3 rounded-full mr-3">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.758a11.037 11.037 0 006.162 6.162l.758-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
              </div>
              {isEditable ? (
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-transparent border-b border-dashed border-gray-300 focus:border-blue-500 focus:outline-none w-full max-w-xs"
                />
              ) : (
                <span>{phone}</span>
              )}
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <div className="bg-blue-100 p-3 rounded-full mr-3">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              {isEditable ? (
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-b border-dashed border-gray-300 focus:border-blue-500 focus:outline-none w-full max-w-xs"
                />
              ) : (
                <span>{email}</span>
              )}
            </div>
            <div className="flex items-center justify-center md:justify-start md:col-span-2">
              <div className="bg-blue-100 p-3 rounded-full mr-3">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              {isEditable ? (
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-transparent border-b border-dashed border-gray-300 focus:border-blue-500 focus:outline-none w-full max-w-xs"
                />
              ) : (
                <span>{location}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;