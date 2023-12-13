import React from 'react';

const AddLiability = () => {
    return (
        <div className="flex justify-center  mt-5">
      <form className="bg-form p-16 rounded shadow-md">
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">Title</label>
            <input type="text" id="title" name="title" className="form-input mt-1 block w-full rounded-md p-3" />
          </div>

          <div className="mb-4">
            <label htmlFor="type" className="block text-gray-700">Type</label>
            <input type="text" id="type" name="type" className="form-input mt-1 block w-full p-3 rounded-md" />
          </div>

          <div className="mb-4">
            <label htmlFor="amount" className="block text-gray-700">Amount</label>
            <input type="number" id="amount" name="amount" className="form-input mt-1 block w-full p-3 rounded-md" />
          </div>

          <div className="mb-4">
            <label htmlFor="creditorName" className="block text-gray-700">Creditor Name</label>
            <input type="text" id="creditorName" name="creditorName" className="form-input mt-1 block w-full p-3 rounded-md" />
          </div>

          <div className="mb-4">
            <label htmlFor="dateOfLoan" className="block text-gray-700">Date of Loan</label>
            <input type="date" id="dateOfLoan" name="dateOfLoan" className="form-input mt-1 block w-full p-3 rounded-md" />
          </div>

          <div className="mb-4">
            <label htmlFor="dateOfCommitment" className="block text-gray-700">Date of Commitment</label>
            <input type="date" id="dateOfCommitment" name="dateOfCommitment" className="form-input mt-1 block w-full p-3 rounded-md" />
          </div>
        </div>

        <div className="mt-6">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            Submit
          </button>
        </div>
      </form>
    </div>
    );
};

export default AddLiability;