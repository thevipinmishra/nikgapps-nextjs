import useSWR from "swr";
import dayjs from "dayjs";
import Head from "next/head";
import relativeTime from "dayjs/plugin/relativeTime";
import { gray } from "@radix-ui/colors";
import Box from "../components/Box";
import Layout from "../components/layout";
import Typography from "../components/Typography";
import Stack from "../components/Stack";

dayjs.extend(relativeTime);
// Getting today's date for most recent data from api
const today = dayjs().format("YYYY-MM-DD");
// and appending that date into api endpoint
const dataEndpoint = `https://sourceforge.net/projects/nikgapps/files/stats/json?start_date=2019-07-22&end_date=${today}`;

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

const StatsBox = ({ title, number, ...props }) => (
  <Box
    css={{
      boxShadow:
        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
      padding: 24,
      borderRadius: 6,
      textAlign: "end",
    }}
  >
    <Typography variant="h1" as="h4" css={{ color: "$primary" }}>
      {number}
    </Typography>
    <Typography css={{ color: "$textLight", fontSize: ".88rem" }}>
      {title}
    </Typography>
  </Box>
);

const Stats = () => {
  const { data, error } = useSWR(dataEndpoint, fetcher, {
    revalidateOnFocus: false,
    refreshInterval: 9999999999,
  });

  if (!data)
    return (
      <Box css={{ textAlign: "center", marginBlock: 30 }}>
        <Typography variant="h3" as="h3">
          Getting the latest Stats...
        </Typography>
      </Box>
    );

  if (error) return <Typography>Oops, Data Not Found!</Typography>;

  return (
    <>
      <Head>
        <title>Stats | Nikgapps</title>
      </Head>
      <Box>
        <Stack gap={2}>
          <StatsBox number={data.total} title="Total downloads so far." />

          <StatsBox
            number={`${data.summaries.geo.top} (${data.summaries.geo.percent}%)`}
            title={`Most number of downloads from a geo-location.`}
          />
          <StatsBox
            number={`${data.summaries.os.top} (${data.summaries.os.percent}%)`}
            title={`Most number of downloads from a OS.`}
          />
        </Stack>

        <Box css={{ marginBlockStart: 40 }}>
          <Typography
            css={{ textAlign: "center", fontWeight: 600, marginBlockEnd: 12 }}
          >
            Top 30 Countries (By Downloads)
          </Typography>
          <table className="ui fixed unstackable striped table">
            <thead>
              <tr>
                <th>Country</th>
                <th>Downloads</th>
              </tr>
            </thead>
            <tbody>
              {data.countries.slice(0, 30).map((data, idx) => (
                <tr key={idx}>
                  <td>{data[0]}</td>
                  <td>{data[1].toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>

        <Box css={{ marginBlockStart: 40 }}>
          <Typography
            css={{ textAlign: "center", fontWeight: 600, marginBlockEnd: 12 }}
          >
            Top Operating Systems (By Downloads)
          </Typography>
          <table className="ui fixed unstackable striped table">
            <thead>
              <tr>
                <th>OS</th>
                <th>Downloads</th>
              </tr>
            </thead>
            <tbody>
              {data.oses.map((data, idx) => (
                <tr key={idx}>
                  <td>{data[0]}</td>
                  <td>{data[1].toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>

        <Box css={{ marginBlockStart: 30 }}>
          <Typography
            css={{
              textAlign: "center",
              fontSize: ".8rem",
              color: "$textLight",
            }}
          >
            Data last updated at {dayjs().to(data.stats_updated)}.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

Stats.getLayout = (page) => (
  <Layout withContent={{ title: "Downloads Stats" }}>{page}</Layout>
);

export default Stats;
