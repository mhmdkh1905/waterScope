// InsightBox.jsx
import React from "react";
import { AlertTriangle, CheckCircle } from "lucide-react";

const InsightBox = ({ type = "info", message }) => {
  const icon = type === "warning" ? <AlertTriangle className="text-yellow-500 w-5 h-5" />
                                  : <CheckCircle className="text-green-500 w-5 h-5" />;

  const colorStyle = type === "warning" ? "bg-yellow-50 border-yellow-200 text-yellow-700"
                                        : "bg-green-50 border-green-200 text-green-700";

  return (
    <div className={`flex items-start space-x-3 p-4 border rounded-lg shadow-sm ${colorStyle}`}>
      <div>{icon}</div>
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default InsightBox;
