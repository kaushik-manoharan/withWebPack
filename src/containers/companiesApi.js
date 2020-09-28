/** @format */

let loading = false;
function companiesAPI(res, setRes, frm, setFrm) {
  let reqOptions = {
    method: "POST",
    headers: {
      accessToken: "37b1358d-1864-4d8f-8390-848ce2f4faaa",
      "X-Request-Source": "KaushikManoharan_API_call",
      sessionToken: "99ebc12a-5bde-4156-9661-83dc581da212",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: frm,
    }),
  };
  loading = true;
  fetch("https://tracxn.com/api/2.2/companies", reqOptions)
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error(res);
    })
    .then((data) => {
      if (res.data.length <= data.total_count) {
        setFrm(frm + 20);
        if (res.data.length) {
          setRes({
            data: res.data.concat(data.result),
            count: data.total_count,
          });
        } else {
          setRes({ data: data.result, count: data.total_count });
        }
      }
      loading = false;
    })
    .catch((e) => {
      loading = false;
      console.log(e);
    });
}
export { companiesAPI };
