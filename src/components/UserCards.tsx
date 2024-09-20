type Card = {
  id: string;
  number: number;
}[];

const userCardsData: Card = [
  {
    id: "Students",
    number: 1257,
  },
  {
    id: "Teachers",
    number: 138,
  },
  {
    id: "Parents",
    number: 1050,
  },
  {
    id: "Staff",
    number: 718,
  },
];

import Image from "next/image";

const UserCards = () => {
  return (
    <div className="flex justify-between gap-3 flex-wrap">
      {userCardsData.map((userCard) => {
        return (
          <div
            key={userCard.id}
            className="rounded-2xl odd:bg-mainPurple even:bg-mainYellow p-4 flex-1 min-w-[150px] hover:flex-[1.2] transition-all duration-200 shadow-md"
          >
            <div className="flex justify-between items-center">
              <span className="text-[12px] bg-slate-100 px-2 py-1 rounded-full text-green-600 font-semibold">
                2024/2025
              </span>
              <Image src="/more.png" alt="more image" width={20} height={20} />
            </div>
            <div className="flex justify-between items-center mt-4">
              <h2 className="text-base font-medium text-gray-500">
                {userCard.id}
              </h2>
              <h1 className="text-2xl font-semibold pe-5">{userCard.number}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserCards;
