export default ({ app: { $axios } }, inject) => {
  $axios.setHeader("Content-Type", "application/x-www-form-urlencoded");
  // $axios.setHeader('Authorization', '456')
  $axios.defaults.timeout = 10000;
  let baseUrl = process.env.SERVER_URL;
  console.log(baseUrl);
  $axios.defaults.baseURL = baseUrl; // "http://localhost:7788";

  inject("axiosApi", (url, method, params) => {
    console.log(params);
    return new Promise((resolve, reject) => {
      $axios({
        method: method || "POST",
        url: url,
        // data: qs.stringify(params),
        data: params,
      })
        .then((res) => {
          console.log(res);
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};
