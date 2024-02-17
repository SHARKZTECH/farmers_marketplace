import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

const Edit = ({ auth, user, errors }) => {
  // Initialize useForm hook
  const { data, setData, put,processing } = useForm({
    name: user.name,
    email: user.email,
    role: user.role,
  });


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    put(route('users.update', user.id), data);  
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Edit User</h2>}
    >
      <Head title="Edit User" />
      <div className="max-w-md mx-auto mt-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
            />
          </div>

          {/* Email field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              readOnly
            />
          </div>

          {/* Role field */}
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              id="role"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              value={data.role}
              onChange={(e) => setData('role', e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="farmer">Farmer</option>
            </select>
          </div>

          {/* Error messages */}
          {errors && (
            <div className="text-red-500">
              {Object.keys(errors).map((key) => (
                <p key={key}>{errors[key]}</p>
              ))}
            </div>
          )}

          {/* Submit button */}
          <div>
            <button
              type="submit"
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${processing ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={processing}
            >
              {processing ? 'Submitting...' : 'Update User'}
            </button>
          </div>
        </form>
      </div>
    </AuthenticatedLayout>
  );
};

export default Edit;
