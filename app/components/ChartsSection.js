import Image from "next/image";
import room from "../../public/Room1/piaroom.png";
import chart from "../../public/Room1/chart.png";
import line from "../../public/Room1/line.png";
export default function ChartsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white rounded-lg shadow-md m-4 border-[#1f5453] border-2 p-2">
      <div className="text-center">
        <h2 className="mb-4 text-lg pr-10">Room Type</h2>
        <Image
          src={room}
          alt="Room Type Chart"
          width={200}
          height={200}
          className=" mx-2"
        />
      </div>
      <div className="text-center">
        <h2 className="mb-4 text-lg pr-5">Expected vs. Actual</h2>
        <Image
          src={chart}
          alt="Expected vs Actual Chart"
          width={200}
          height={200}
          className="mx-4"
        />
      </div>
      <div className="text-center">
        <h2 className="mb-4 text-lg">Month on Month Comparison</h2>
        <Image
          src={line}
          alt="Month on Month Comparison"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
