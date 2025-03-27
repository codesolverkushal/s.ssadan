import React, { useState } from 'react';

const FeeStructure = () => {
  const [selectedClass, setSelectedClass] = useState(null);

  const feeDetails = [
    {
      class: 'LKG',
      tuitionFee: 350,
      additionalFees: {
        registrationFee: 500,
        labFee: 200,
        libraryFee: 100,
        transportationFee: 300
      },
      notes: 'Includes basic learning materials and school supplies'
    },
    {
      class: 'UKG',
      tuitionFee: 350,
      additionalFees: {
        registrationFee: 500,
        labFee: 200,
        libraryFee: 100,
        transportationFee: 300
      },
      notes: 'Includes basic learning materials and school supplies'
    },
    {
      class: 'Class 1-5',
      tuitionFee: 500,
      additionalFees: {
        registrationFee: 750,
        labFee: 300,
        libraryFee: 150,
        transportationFee: 400
      },
      notes: 'Includes textbooks, workbooks, and digital learning resources'
    },
    {
      class: 'Class 6-8',
      tuitionFee: 700,
      additionalFees: {
        registrationFee: 1000,
        labFee: 500,
        libraryFee: 200,
        transportationFee: 500
      },
      notes: 'Includes advanced learning materials and lab access'
    },
    {
      class: 'Class 9-10',
      tuitionFee: 950,
      additionalFees: {
        registrationFee: 1500,
        labFee: 750,
        libraryFee: 250,
        transportationFee: 600
      },
      notes: 'Includes comprehensive study materials and exam preparation resources'
    }
  ];

  const calculateTotalFees = (classInfo) => {
    const { tuitionFee, additionalFees } = classInfo;
    const annualTuitionFee = tuitionFee * 12;
    const totalAdditionalFees = Object.values(additionalFees).reduce((sum, fee) => sum + fee, 0);
    return annualTuitionFee + totalAdditionalFees;
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white py-4 px-6">
            <h1 className="text-2xl font-bold">School Fee Structure</h1>
            <p className="text-sm opacity-80">Academic Year 2025-26</p>
          </div>

          {/* Class Selection */}
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Select Your Class</h2>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
              {feeDetails.map((classInfo) => (
                <button
                  key={classInfo.class}
                  onClick={() => setSelectedClass(classInfo)}
                  className={`
                    px-4 py-2 rounded-lg transition-all duration-300 text-sm
                    ${selectedClass === classInfo 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}
                  `}
                >
                  {classInfo.class}
                </button>
              ))}
            </div>
          </div>

          {/* Fee Details */}
          {selectedClass && (
            <div className="bg-blue-50 p-6 m-4 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Fee Details for {selectedClass.class}
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Monthly Fees */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold text-blue-700 mb-3">Monthly Fees</h4>
                  <p className="flex justify-between">
                    <span>Tuition Fee</span>
                    <span className="font-bold">₹{selectedClass.tuitionFee}</span>
                  </p>
                </div>

                {/* Additional Fees */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold text-blue-700 mb-3">Additional Fees</h4>
                  {Object.entries(selectedClass.additionalFees).map(([feeName, feeAmount]) => (
                    <p key={feeName} className="flex justify-between">
                      <span className="capitalize">
                        {feeName.replace(/([A-Z])/g, ' $1')}
                      </span>
                      <span className="font-bold">₹{feeAmount}</span>
                    </p>
                  ))}
                </div>
              </div>

              {/* Annual Calculation */}
              <div className="mt-6 bg-blue-100 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Annual Fee Breakdown</h4>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span>Monthly Tuition</span>
                    <span>₹{selectedClass.tuitionFee}</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Annual Tuition</span>
                    <span>₹{selectedClass.tuitionFee * 12}</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Total Additional Fees</span>
                    <span>₹{Object.values(selectedClass.additionalFees).reduce((sum, fee) => sum + fee, 0)}</span>
                  </p>
                  <hr className="border-blue-300 my-2" />
                  <p className="flex justify-between font-bold text-blue-900">
                    <span>Total Annual Fees</span>
                    <span>₹{calculateTotalFees(selectedClass)}</span>
                  </p>
                </div>
              </div>

              {/* Notes */}
              <div className="mt-6 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <h4 className="text-lg font-semibold text-yellow-800 mb-2">Important Notes</h4>
                <p className="text-yellow-900">{selectedClass.notes}</p>
              </div>
            </div>
          )}

          {/* Payment Information */}
          <div className="bg-gray-100 p-6 m-4 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Information</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Tuition fees are to be paid monthly for the entire academic year
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Payment methods:
                <ul className="ml-4 list-disc">
                  <li>Online Bank Transfer</li>
                  <li>Cash Payment</li>
                  <li>Cheque</li>
                </ul>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Fees are subject to change. Please confirm with school administration.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;

// import React, { useState } from 'react';

// const FeeStructure = () => {
//   const [selectedClass, setSelectedClass] = useState(null);

//   const feeDetails = [
//     { 
//       class: 'LKG', 
//       tuitionFee: 350
//     },
//     { 
//       class: 'UKG', 
//       tuitionFee: 350
//     },
//     { 
//       class: 'Class 1-5', 
//       tuitionFee: 500
//     },
//     { 
//       class: 'Class 6-8', 
//       tuitionFee: 700
//     },
//     { 
//       class: 'Class 9-10', 
//       tuitionFee: 950
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 px-6">
//           <h1 className="text-4xl font-extrabold text-center tracking-tight">
//             Fee Structure
//           </h1>
//           <p className="text-center text-blue-100 mt-2">
//             Academic Year 2025-26
//           </p>
//         </div>

//         {/* Fee Overview */}
//         <div className="p-8">
//           <div className="grid md:grid-cols-5 gap-4">
//             {feeDetails.map((classInfo, index) => (
//               <div 
//                 key={index}
//                 className="bg-blue-50 p-6 rounded-lg text-center hover:bg-blue-100 transition-colors duration-300"
//               >
//                 <h3 className="text-xl font-bold mb-2 text-blue-800">{classInfo.class}</h3>
//                 <p className="text-2xl font-extrabold text-blue-600">
//                   ₹{classInfo.tuitionFee}
//                   <span className="text-sm block text-blue-500">Monthly Tuition</span>
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Detailed Fee Information */}
//         <div className="bg-gray-50 p-8 text-center">
//           <h2 className="text-3xl font-bold text-blue-800 mb-6">
//             Fee Payment Details
//           </h2>
//           <div className="max-w-3xl mx-auto text-gray-700 space-y-4">
//             <p>
//               The tuition fees are to be paid monthly for the entire academic year.
//             </p>
//             <p>
//               Payment can be made through various methods including:
//               - Online Bank Transfer
//               - Cash Payment
//               - Cheque
//             </p>
//             <p className="font-semibold text-blue-700">
//               Note: Fees are subject to change. Please confirm with the school administration.
//             </p>
//           </div>
//         </div>

//         {/* Annual Fee Calculation */}
//         <div className="bg-blue-100 p-8 text-center">
//           <h3 className="text-2xl font-semibold text-blue-800 mb-4">
//             Annual Fee Calculation
//           </h3>
//           <p className="text-gray-700 max-w-3xl mx-auto">
//             Annual Tuition Fee = Monthly Tuition Fee × 12 Months
//           </p>
//           <div className="grid md:grid-cols-5 gap-4 mt-6">
//             {feeDetails.map((classInfo, index) => (
//               <div 
//                 key={index}
//                 className="bg-white p-4 rounded-lg shadow-md"
//               >
//                 <h4 className="text-lg font-bold text-blue-700 mb-2">
//                   {classInfo.class}
//                 </h4>
//                 <p className="text-xl font-extrabold text-blue-600">
//                   ₹{classInfo.tuitionFee * 12}
//                   <span className="text-sm block text-blue-500">Annual Tuition</span>
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeeStructure;


// import React, { useState } from 'react';

// const FeeStructure = () => {
//   const [selectedClass, setSelectedClass] = useState(null);

//   const feeDetails = [
//     { 
//       class: 'LKG', 
//       tuitionFee: 350, 
//       additionalFees: [
//         { name: 'Registration Fee', amount: 500 },
//         { name: 'Admission Fee', amount: 1000 },
//         { name: 'Study Materials', amount: 250 }
//       ]
//     },
//     { 
//       class: 'UKG', 
//       tuitionFee: 350, 
//       additionalFees: [
//         { name: 'Registration Fee', amount: 500 },
//         { name: 'Admission Fee', amount: 1000 },
//         { name: 'Study Materials', amount: 250 }
//       ]
//     },
//     { 
//       class: 'Class 1-5', 
//       tuitionFee: 500, 
//       additionalFees: [
//         { name: 'Registration Fee', amount: 750 },
//         { name: 'Admission Fee', amount: 1500 },
//         { name: 'Study Materials', amount: 350 },
//         { name: 'Laboratory Charges', amount: 200 }
//       ]
//     },
//     { 
//       class: 'Class 6-8', 
//       tuitionFee: 700, 
//       additionalFees: [
//         { name: 'Registration Fee', amount: 1000 },
//         { name: 'Admission Fee', amount: 2000 },
//         { name: 'Study Materials', amount: 500 },
//         { name: 'Laboratory Charges', amount: 350 },
//         { name: 'Computer Lab Fee', amount: 250 }
//       ]
//     },
//     { 
//       class: 'Class 9-10', 
//       tuitionFee: 950, 
//       additionalFees: [
//         { name: 'Registration Fee', amount: 1250 },
//         { name: 'Admission Fee', amount: 2500 },
//         { name: 'Study Materials', amount: 750 },
//         { name: 'Laboratory Charges', amount: 500 },
//         { name: 'Computer Lab Fee', amount: 350 },
//         { name: 'Development Fee', amount: 250 }
//       ]
//     }
//   ];

//   const calculateTotalFees = (classDetails) => {
//     return classDetails.tuitionFee + 
//       classDetails.additionalFees.reduce((sum, fee) => sum + fee.amount, 0);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 px-6">
//           <h1 className="text-4xl font-extrabold text-center tracking-tight">
//             Fee Structure
//           </h1>
//           <p className="text-center text-blue-100 mt-2">
//             Academic Year 2025-26
//           </p>
//         </div>

//         {/* Fee Overview */}
//         <div className="p-8">
//           <div className="grid md:grid-cols-5 gap-4">
//             {feeDetails.map((classInfo, index) => (
//               <div 
//                 key={index}
//                 onClick={() => setSelectedClass(classInfo)}
//                 className={`
//                   cursor-pointer p-6 rounded-lg text-center transition-all duration-300
//                   ${selectedClass === classInfo 
//                     ? 'bg-blue-600 text-white shadow-2xl' 
//                     : 'bg-blue-50 text-blue-800 hover:bg-blue-100'}
//                 `}
//               >
//                 <h3 className="text-xl font-bold mb-2">{classInfo.class}</h3>
//                 <p className="text-2xl font-extrabold">
//                   ₹{classInfo.tuitionFee}
//                   <span className="text-sm block">Monthly Tuition</span>
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Detailed Fee Breakdown */}
//         {selectedClass && (
//           <div className="bg-gray-50 p-8">
//             <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
//               Detailed Fee Breakdown for {selectedClass.class}
//             </h2>
            
//             <div className="grid md:grid-cols-2 gap-8">
//               {/* Tuition Fees */}
//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-300 pb-2">
//                   Monthly Tuition
//                 </h3>
//                 <div className="flex justify-between items-center">
//                   <span className="text-xl text-gray-700">
//                     Monthly Tuition Fee
//                   </span>
//                   <span className="text-2xl font-bold text-blue-600">
//                     ₹{selectedClass.tuitionFee}
//                   </span>
//                 </div>
//               </div>

//               {/* Additional Fees */}
//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-2xl font-semibold text-green-700 mb-4 border-b-2 border-green-300 pb-2">
//                   Additional Fees
//                 </h3>
//                 {selectedClass.additionalFees.map((fee, index) => (
//                   <div 
//                     key={index} 
//                     className="flex justify-between items-center mb-3 pb-3 border-b border-gray-200 last:border-b-0"
//                   >
//                     <span className="text-lg text-gray-700">
//                       {fee.name}
//                     </span>
//                     <span className="text-xl font-bold text-green-600">
//                       ₹{fee.amount}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Total Fee Calculation */}
//             <div className="mt-8 bg-yellow-50 p-6 rounded-lg text-center">
//               <h3 className="text-3xl font-bold text-yellow-800 mb-4">
//                 Total Annual Fees
//               </h3>
//               <div className="flex justify-center items-center">
//                 <span className="text-4xl font-extrabold text-yellow-600">
//                   ₹{calculateTotalFees(selectedClass) * 12}
//                 </span>
//               </div>
//               <p className="mt-2 text-yellow-700">
//                 (Calculated as Monthly Fee + Additional Fees × 12 Months)
//               </p>
//             </div>
//           </div>
//         )}

//         {/* Payment Information */}
//         <div className="bg-gray-200 p-8 text-center">
//           <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//             Payment Information
//           </h3>
//           <p className="text-gray-700 max-w-3xl mx-auto">
//             Fees can be paid monthly or annually. Early payment discounts are available. 
//             Multiple payment methods accepted including online transfer, cash, and cheque. 
//             Late payment fees may apply after the due date.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeeStructure;
