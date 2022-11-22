// live
const protocol = "https";
const host = "fe-lead-commen-api.rejoicehub.com/FE_API/lead_api/v1";

// https://fe-lead-commen-api.rejoicehub.com/FE_API/lead_api/v1/admin-login

// meet
// const protocol = "http";
// const host = "192.168.29.159:3030/api/v1";
// parth
// const protocol = "http";
// const host = "192.168.29.93:9090/api/v1/tweetfox";

const port = "";
const trailUrl = "";

const hostUrl = `${protocol}://${host}${port ? ":" + port : ""}/`;
const endpoint = `${protocol}://${host}${port ? ":" + port : ""}${trailUrl}`;

export default {
  protocol: protocol,
  host: host,
  port: port,
  apiUrl: trailUrl,
  endpoint: endpoint,
  hostUrl: hostUrl,
};
