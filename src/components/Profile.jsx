import React from 'react';

const Profile = ({ isEditable }) => {
  const [name, setName] = React.useState('Your Name');
  const [bio, setBio] = React.useState(
    'A short bio about yourself. This is a great place to highlight your key skills and experience.'
  );
  const [phone, setPhone] = React.useState('123-456-7890');
  const [email, setEmail] = React.useState('your.email@example.com');
  const [location, setLocation] = React.useState('Your City, Country');
  const [profileImage, setProfileImage] = React.useState('https://resume-getnextjs.vercel.app/images/hero/hero-image.png');

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
    <div className="relative bg-white p-8 rounded-lg shadow-lg mt-8">
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-gray-200 rounded-full opacity-25"></div>
      <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-48 h-48 bg-blue-200 rounded-lg transform rotate-45 opacity-25"></div>
      <div className="flex items-center">
        <div className="w-1/3 relative group">
          <img
            src={profileImage}
            alt="Profile"
            className="w-48 h-48 rounded-lg shadow-lg object-cover"
          />
          {isEditable && (
            <label
              htmlFor="profile-upload"
              className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center rounded-lg cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
              <span className="text-white text-sm">Upload Photo</span>
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
        <div className="w-2/3 pl-8">
          {isEditable ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-5xl font-bold text-gray-800 border-b-2 border-gray-300 focus:border-blue-500 outline-none w-full"
            />
          ) : (
            <h1 className="text-5xl font-bold text-gray-800">{name}</h1>
          )}
          {isEditable ? (
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="text-lg text-gray-600 mt-4 border-b-2 border-gray-300 focus:border-blue-500 outline-none w-full"
            />
          ) : (
            <p className="text-lg text-gray-600 mt-4">{bio}</p>
          )}
          <div className="mt-6 flex flex-col space-y-2 text-gray-700">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.758a11.037 11.037 0 006.162 6.162l.758-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
              {isEditable ? <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="border-b-2" /> : <span>{phone}</span>}
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              {isEditable ? <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="border-b-2" /> : <span>{email}</span>}
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
              {isEditable ? <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="border-b-2" /> : <span>{location}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
