import React, { useState } from "react";

const PatientModal = ({ isOpen, onClose, handleSubmit }) => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        age: '',
        gender: '',
        contact_number: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleFormData = (e) => {
        e.preventDefault();
        console.log(formData);
        handleSubmit(formData);
        setFormData({
            first_name: '',
            last_name: '',
            age: '',
            gender: '',
            contact_number: '',
        });
    }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white text-gray-800 p-5 rounded min-h-[400px] relative">
        <h2 className="text-2xl font-bold mb-4">Patient Modal</h2>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          Close
        </button>
        <div className="px-4">
          <form action="" className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <label htmlFor="first_name" className="min-w-[140px]">First Name :</label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="border py-1 px-2 "
              />
            </div>
            <div className="flex items-center gap-4">
              <label htmlFor="last_name" className="min-w-[140px]">Last Name :</label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="border py-1 px-2"
              />
            </div>
            <div className="flex items-center gap-4">
              <label htmlFor="age" className="min-w-[140px]">Age :</label>
              <input
                type="number"
                name="age"
                id="age"
                value={formData.age}
                onChange={handleChange}
                className="border py-1 px-2"
              />
            </div>
            <div className="flex items-center gap-4">
              <label htmlFor="gender" className="min-w-[140px]">Gender :</label>
              <select name="gender" id="gender" required
               value={formData.gender} onChange={handleChange} className="border py-1 px-2">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              <label htmlFor="contact_number" className="min-w-[140px]">Contact Number :</label>
              <input
                type="text"
                name="contact_number"
                id="contact_number"
                value={formData.contact_number}
                onChange={handleChange}
                className="border py-1 px-2"
              />
            </div>
            <button type="submit" onClick={handleFormData} className="mt-4 bg-black text-white py-2 px-4 rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PatientModal;
