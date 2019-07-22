import styled from 'styled-components';

const DivDownload = styled.div`
  display: flex;
  justify-content: center;
  p {
    margin: 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0.3em 0.5em;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(23, 162, 184);
  background: rgb(23, 162, 184);
  :hover {
    background-color: #138496;
    border-color: #117a8b;
  }
  color: #ffffff;
  > svg {
    fill: #eeeeee;
  }
  > p {
    flex: 1;
    margin-left: 15px;
  }
`;

const DownloadButton = ({baseUrl}) => (
  <DivDownload>
    <Form
      method="get"
      action={`${baseUrl}/static/file/resume-JacksonFletcher.pdf`}
    >
      <Button type="submit">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          height="25px"
          width="25px"
          viewBox="0 0 41.712 41.712"
        >
          <path
            d="M39.474,29.086c0-0.619,0.492-1.111,1.111-1.111s1.127,0.492,1.127,1.111v10.92
c0,0.619-0.508,1.127-1.127,1.127H1.111C0.492,41.133,0,40.625,0,40.006v-10.92c0-0.619,0.492-1.111,1.111-1.111
s1.127,0.492,1.127,1.111v9.809h37.236V29.086z"
          />
          <path
            d="M31.593,22.633c0.444-0.444,0.444-1.143,0-1.587c-0.429-0.444-1.143-0.444-1.571,0l-8.047,8.032V2.539
c0-0.619-0.492-1.127-1.111-1.127s-1.127,0.508-1.127,1.127v26.539l-8.031-8.032c-0.444-0.444-1.159-0.444-1.587,0
c-0.444,0.444-0.444,1.143,0,1.587l9.952,9.952c0.429,0.429,1.143,0.429,1.587,0L31.593,22.633z"
          />
        </svg>
        <p>download as pdf</p>
      </Button>
    </Form>
    <p />
  </DivDownload>
);

export default DownloadButton;
