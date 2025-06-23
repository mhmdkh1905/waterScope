import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 shadow-sm">
      <div className="w-full py-6 text-center">
        <p className="text-sm text-blue-600 font-medium">
          &copy; {new Date().getFullYear()} WaterScope. Created by Mohammad Khateeb & Jad Taha.
        </p>
      </div>
    </footer>
  );
}