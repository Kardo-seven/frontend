import styled from 'styled-components';

interface AlertProps {
    urlimage: string
  }
  export const StyledEvent = styled.div<AlertProps>`
  background-image: linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${(props) => props.urlimage});
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
`;