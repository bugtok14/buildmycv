import React, { useState } from "react";
import initialProfileImage from "../assets/profile.jpg";

const Profile = ({ isEditable }) => {
  const [profileImage, setProfileImage] = useState(initialProfileImage);
  const [contact, setContact] = useState({
    phone: "+63-123-456-7890",
    email: "bugtok@mailer.com",
    address: "Any City, Philippines",
  });

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <div className="flex justify-center relative">
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-full w-32 h-32 object-cover border-4 border-white"
        />
        {isEditable && (
          <label
            htmlFor="profile-image-upload"
            className="absolute bottom-0 right-10 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path
                fillRule="evenodd"
                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                clipRule="evenodd"
              />
            </svg>
            <input
              id="profile-image-upload"
              type="file"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        )}
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold text-white uppercase tracking-wider">
          Contact
        </h2>
        <div className="w-16 border-b-2 border-white my-2"></div>
        <ul className="mt-4 space-y-2 text-white">
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.758a11.037 11.037 0 006.162 6.162l.758-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            {isEditable ? (
              <input
                type="text"
                name="phone"
                value={contact.phone}
                onChange={handleContactChange}
                className="bg-transparent border-b w-full"
              />
            ) : (
              <span>{contact.phone}</span>
            )}
          </li>
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            {isEditable ? (
              <input
                type="text"
                name="email"
                value={contact.email}
                onChange={handleContactChange}
                className="bg-transparent border-b w-full"
              />
            ) : (
              <span>{contact.email}</span>
            )}
          </li>
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {isEditable ? (
              <input
                type="text"
                name="address"
                value={contact.address}
                onChange={handleContactChange}
                className="bg-transparent border-b w-full"
              />
            ) : (
              <span>{contact.address}</span>
            )}
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Profile;
