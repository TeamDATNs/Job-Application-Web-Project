import ChartLine from "../../Chart/ChartLine";
import styles from "./ChartContent.module.css";
import LabelDashboard from "../LabelDashboard/LabelDashboard";
import Overview from "../Overview/Overview";
import CharDoughnut from "../../Chart/CharDoughnut";

function ChartContent() {
  return (
    <div
      className={` grid grid-cols-10 pt-3 place-items-center ${styles.charts} gap-1`}
    >
      <LabelDashboard />
      <Overview />
      <div className="col-span-10 w-full h-[27rem] ">
        <ChartLine />
      </div>
      <div className="col-span-6 w-full h-[27rem] ">
        <div className=" py-5">
          <span className="text-xl font-bold">Rank Company</span>
        </div>
        <div className={`w-full ${styles.tableContainer}`}>
          <table className="w-full text-center ">
            <thead className="bg-[#EBEBEB] h-14">
              <tr>
                <th className="text-start pl-4">Name</th>
                <th>Cost</th>
                <th>Job</th>
                <th>Candidate</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              <tr>
                <td>Ecomdy</td>
                <td>$10.687</td>
                <td>13.354</td>
                <td>$10.687</td>
              </tr>
              <tr>
                <td>FPT</td>
                <td>$8.687</td>
                <td>9.354</td>
                <td>$9.687</td>
              </tr>
              <tr>
                <td>NASA</td>
                <td>$7.687</td>
                <td>9.354</td>
                <td>$7.687</td>
              </tr>
              <tr>
                <td>Shoppe</td>
                <td>$5.687</td>
                <td>8.354</td>
                <td>$5.687</td>
              </tr>
              <tr>
                <td>Google</td>
                <td>$4.687</td>
                <td>7.354</td>
                <td>$4.687</td>
              </tr>
              <tr>
                <td>B.A.P</td>
                <td>$3.687</td>
                <td>6.354</td>
                <td>$3.387</td>
              </tr>
              <tr>
                <td>Shoppe</td>
                <td>$5.687</td>
                <td>8.354</td>
                <td>$5.687</td>
              </tr>
              <tr>
                <td>Google</td>
                <td>$4.687</td>
                <td>7.354</td>
                <td>$4.687</td>
              </tr>
              <tr>
                <td>B.A.P</td>
                <td>$3.687</td>
                <td>6.354</td>
                <td>$3.387</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-span-4 w-full h-[27rem] ">
        <div className=" py-5">
          <span className="text-xl font-bold">Country</span>
        </div>
        <CharDoughnut />
      </div>
    </div>
  );
}

export default ChartContent;
