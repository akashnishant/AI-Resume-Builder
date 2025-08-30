import React from "react";
import "./Dashboard.css";
import { connect } from "react-redux";
import { map } from "framer-motion/client";

function Dashboard({loading, error, userInfo}) {
  return (
    <div className="min-h-screen bg-gray-50 dashboard-container">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">My Dashboard</h1>
        <p className="text-gray-600 text-sm">
          Manage your account, resumes, subscriptions, and transactions.
        </p>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Account Details */}
        <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            Account Details
          </h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li><span className="font-medium">Name:</span> {userInfo?.user?.name}</li>
            <li><span className="font-medium">Email:</span> {userInfo?.user?.email}</li>
            <li><span className="font-medium">Member Since:</span> {new Date(userInfo?.user?.registrationDate)?.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
            })}
            </li>
          </ul>
        </div>

        {/* Resumes */}
        <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">My Resumes</h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>Resume v1 – <span className="text-blue-600">Preview</span></li>
            <li>Resume v2 – <span className="text-blue-600">Preview</span></li>
            <li>Resume v3 – <span className="text-blue-600">Preview</span></li>
          </ul>
          <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
            Create New Resume
          </button>
        </div>

        {/* Subscriptions */}
        <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            Subscription
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            Current Plan: <span className="font-medium">Pro (₹499/mo)</span>
          </p>
          <button className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition">
            Manage Subscription
          </button>
        </div>

        {/* Transactions */}
        <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition md:col-span-2 lg:col-span-3">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            Recent Transactions
          </h2>
          <table className="w-full text-sm text-left text-gray-600">
            <thead>
              <tr className="border-b">
                <th className="py-2">Date</th>
                <th className="py-2">Description</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Aug 10, 2025</td>
                <td>Pro Subscription</td>
                <td>₹499</td>
                <td className="text-green-600 font-medium">Paid</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Jul 10, 2025</td>
                <td>Pro Subscription</td>
                <td>₹499</td>
                <td className="text-green-600 font-medium">Paid</td>
              </tr>
              <tr>
                <td className="py-2">Jun 10, 2025</td>
                <td>Pro Subscription</td>
                <td>₹499</td>
                <td className="text-green-600 font-medium">Paid</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
  userInfo: state.auth.userInfo,
});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
