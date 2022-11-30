import {
  createClient,
  dedupExchange,
  fetchExchange,
} from "urql";

const client = createClient({
  url: "https://api-ap-southeast-2.hygraph.com/v2/clb2nlkxd02ry01us5rix4nwv/master",
  exchanges: [dedupExchange, fetchExchange],
});

export { client };
