// pages/index.js

export default function MembershipRenewal() {
  // Example user data
  const users = [
    {
      id: 1,
      membershipTier: "Gold Member",
      renewalDate: "April 30, 2024",
      renewalCost: "$99",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center  mt-7 ">
      <div className="rounded-lg p-8 mb-6 w-full ">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Membership Tier
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Renewal Date
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Renewal Cost
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {user.membershipTier}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.renewalDate}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.renewalCost}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <a
            href="https://stripe.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn mt-2 btn-primary btn-lg md:w-100">
              Renew Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
