import styled from 'styled-components';

const Time = styled.time`
  color: rgb(128, 128, 128);
  font-size: 0.875rem;
`;

function formatDate(date) {
  const nonBreakingSpace = '\xa0';
  return date
    .toDateString()
    .slice(4)
    .replace(/ /g, nonBreakingSpace);
}

const Datetime = ({date}) => {
  const t = new Date(date);
  return <Time>{formatDate(t)}</Time>;
};

export default Datetime;
