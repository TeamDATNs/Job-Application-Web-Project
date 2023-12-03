import { useState, useEffect, useMemo, useCallback } from "react";

import Header from "./Header";
import axiosPrivate from "../../../api/axios";
import TableCollapsible from "../../TableCustom/TableCollapsible";
import { ToastCustom } from "../../ToastCustom/ToastCustom";
import LoadingComponent from "../../LoadingComponent/LoadingComponent";
import { transformJob } from "../transformJob";
import swal from "sweetalert";
import HeaderJobCustom from "./HeaderJobCustom";

function Jobs() {
  const [myJobs, setMyJobs] = useState([]);
  const [statusJobs, setStatusJobs] = useState("OpenAndClose");
  const [refresh, setRefresh] = useState(false);
  const [query, setQuery] = useState("");
  const access_token = JSON.parse(localStorage.getItem("Token"))?.access_token;
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [totalItems, setTotalItems] = useState(0);

  const memoizedJobs = useMemo(() => {
    const transformedData = myJobs?.map((d) => transformJob(d));

    const filteredData =
      statusJobs === "Close"
        ? transformedData?.filter((job) => job.status === "Close")
        : transformedData;
    return filteredData;
  }, [myJobs, statusJobs]);

  useEffect(() => {
    async function getHiring() {
      const userID = JSON.parse(localStorage.getItem("Profile"))?.user?.id;
      console.log(userID);
      await axiosPrivate
        .get(`api/hiring/company/${userID}?page=${page}&size=${pageSize}`)
        .then((res) => {
          const data = res.data.content;
          setMyJobs(data);
          console.log(data);
          setRefresh(true);
        })
        .catch((err) => {
          setRefresh(false);
          console.log(err);
        });
    }
    getHiring();
  }, [statusJobs, refresh, pageSize, page]);

  const handleDeleteJob = async (id) => {
    const accessToken = JSON.parse(localStorage.getItem("Token")).access_token;
    await swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosPrivate
          .delete(`/api/hiring/${id}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((res) => {
            console.log(res);
            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            });
            setRefresh(true);
          })
          .catch((error) => {
            ToastCustom.error("Delete Error!, You can delete again", {
              autoClose: 2500,
            });
            console.log(error);
          });
      } else {
        swal("Cancelled");
      }
    });
  };

  return (
    <>
      <Header Title={"Jobs"} />
      <HeaderJobCustom
        setStatusJobs={setStatusJobs}
        statusJobs={statusJobs}
        query={query}
        setQuery={setQuery}
        setPage={setPage}
        setPageSize={setPageSize}
        pageSize={pageSize}
      />
      <div className="pt-3  ">
        {memoizedJobs?.length === 0 ? (
          Array.from({ length: 5 }, (_, i) => {
            return <LoadingComponent key={i} />;
          })
        ) : (
          <TableCollapsible
            rows={memoizedJobs}
            handleDeleteJob={handleDeleteJob}
          />
        )}
      </div>
    </>
  );
}

export default Jobs;
