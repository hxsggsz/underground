import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  ssrExchange,
} from "urql";

// const isServerSide = typeof window !== "undefined";
// const ssrCache = ssrExchange({ isClient: !isServerSide });

const client = createClient({
  url: "https://api-ap-southeast-2.hygraph.com/v2/clb2nlkxd02ry01us5rix4nwv/master",
  exchanges: [dedupExchange, fetchExchange],
});

export { client };
