"use client";
import { useState, useEffect } from 'react';

// Mock profile data (replace with actual API call)
const mockProfileData = {
  username: "John Doe",
  email: "johndoe@example.com",
  profileImageUrl: "https://cdn.discordapp.com/attachments/1031899904953552906/1292168848350384148/avataaars.png?ex=6702c184&is=67017004&hm=e24e78123d6c34fc4192ca4541e7202ac84defe489adf395cdff0c51a2508d8d&",
  totalReports: 5,
  reports: [
    {
      id: 1,
      name: "Main Street",
      address: "123 Main St, Anytown",
      date: new Date(),
    },
    {
      id: 2,
      name: "Library Avenue",
      address: "456 Library Ave, Anytown",
      date: new Date(),
    },
  ],
  preferences: {
    wheelchairAccessible: true,
    hearingLoop: true,
  },
};

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // Toggle for edit mode
  const [formData, setFormData] = useState({}); // State for form data

  // Simulate fetching profile data
  useEffect(() => {
    setProfileData(mockProfileData);
    setFormData(mockProfileData); // Initialize form data
  }, []);

  // Handle changes in form inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle profile updates
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the profile data (this is where you'd make an API call to save the changes)
    setProfileData(formData);
    setIsEditing(false); // Exit edit mode
  };

  // Handle cancel edit
  const handleCancel = () => {
    setIsEditing(false);
    setFormData(profileData); // Reset form data to original values
  };

  if (!profileData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <div className="profile-header flex items-center p-4 bg-white shadow rounded">
        <img
          src={profileData.profileImageUrl}
          alt="Profile"
          className="rounded-full w-24 h-24"
        />
        <div className="ml-4">
          {isEditing ? (
            // Editable username
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="text-2xl font-bold border-b focus:outline-none"
            />
          ) : (
            <h2 className="text-2xl font-bold">{profileData.username}</h2>
          )}
          {isEditing ? (
            // Editable email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="text-sm text-gray-500 border-b focus:outline-none"
            />
          ) : (
            <p className="text-sm text-gray-500">{profileData.email}</p>
          )}
        </div>
      </div>

      {/* Contribution Summary */}
      <div className="contributions p-4 mt-6 bg-white shadow rounded">
        <h3 className="text-xl font-semibold">Contributions</h3>
        <p className="text-sm text-gray-600">
          You've reported {profileData.totalReports} locations.
        </p>

        {/* Reported Locations List */}
        <div className="reported-locations mt-4">
          {profileData.reports.map((report) => (
            <div key={report.id} className="border p-2 rounded mb-2">
              <h4 className="font-semibold">{report.name}</h4>
              <p className="text-sm text-gray-500">{report.address}</p>
              <p className="text-xs text-gray-400">
                Reported on: {new Date(report.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Accessibility Preferences */}
      <div className="preferences p-4 mt-6 bg-white shadow rounded">
        <h3 className="text-xl font-semibold">Accessibility Preferences</h3>
        {isEditing ? (
          <div className="mt-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="wheelchairAccessible"
                checked={formData.preferences.wheelchairAccessible}
                onChange={(e) => {
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    preferences: {
                      ...prevFormData.preferences,
                      wheelchairAccessible: e.target.checked,
                    },
                  }));
                }}
              />
              <span>Wheelchair Accessible</span>
            </label>
            <label className="flex items-center space-x-2 mt-2">
              <input
                type="checkbox"
                name="hearingLoop"
                checked={formData.preferences.hearingLoop}
                onChange={(e) => {
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    preferences: {
                      ...prevFormData.preferences,
                      hearingLoop: e.target.checked,
                    },
                  }));
                }}
              />
              <span>Hearing Loop</span>
            </label>
          </div>
        ) : (
          <div className="mt-2">
            <p className="text-sm text-gray-600">
              Preferred features:
              {profileData.preferences.wheelchairAccessible
                ? " Wheelchair Accessible"
                : ""}
              {profileData.preferences.hearingLoop ? ", Hearing Loops" : ""}
            </p>
          </div>
        )}
      </div>

      {/* Edit / Save / Cancel Buttons */}
      <div className="p-4 mt-6">
        {isEditing ? (
          <>
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-4 py-2 rounded mr-4"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-600 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
