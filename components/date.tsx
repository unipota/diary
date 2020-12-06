import { parseISO, format } from "date-fns";
import styled from "styled-components";

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return <Time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</Time>;
}

const Time = styled.time`
  color: blue;
`;
