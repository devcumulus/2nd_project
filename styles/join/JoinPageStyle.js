import styled from "@emotion/styled";

export const JoinPageStyle = styled.div`
  width: 1300px;
  text-align: center;
  margin: 0 auto;
  /* background: skyblue; */
`;
export const JoinBox = styled.div`
  width: 980px;
  /* height: 700px; */
  border-radius: 10px;
  border: 1px solid #2c39b5;
  margin: 0 auto;
  padding: 60px 90px;
`;
export const JoinElement = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const JoinElementTxt = styled.div`
  display: flex;
  p {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  span {
    color: #ff0303;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const JoinElementInput = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
  /* background: pink; */
  img {
    width: 180px;
    height: 180px;
    border-radius: 5px;
    border: 1px solid #2c39b5;
  }
  input {
    border-radius: 5px;
    border: 1px solid #2c39b5;
  }
  /* input[type="file"] {
    width: 180px;
    height: 180px;
  } */
  input[type="text"] {
    width: ${props => (props.width ? props.width : "600px")};
    height: 36px;
    padding-left: 15px;

    color: #777;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const ImageInputBt = styled.button`
background: transparent;
border: none;
`
export const JoinAddressInput = styled.div`
  display: block;
  width: 600px;
  text-align: start;
  input {
    border-radius: 5px;
    border: 1px solid #2c39b5;
    width: 600px;
    height: 36px;
    padding-left: 15px;
    margin-top: 10px;

    color: #777;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const ConfirmBt = styled.button`
  width: 105px;
  height: 36px;
  border-radius: 5px;
  border: 1px solid #2c39b5;
  background: #fff;

  color: #777;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const BtSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  margin-top: 60px;
  margin-bottom: 90px;
`;
export const CancelBt = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 10px;
  background: #f2f2ff;
  border: none;

  color: #2c39b5;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const SaveBt = styled(CancelBt)`
  background: #2c39b5;
  color: #fff;
`;
