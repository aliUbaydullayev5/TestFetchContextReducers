import styled from 'styled-components';



const Block = styled.div`
  width: 80%;
  min-height: 400px;
  margin: 60px auto;
  border: 3px solid teal;
  border-radius: 15px;
  >table{
    width: 100%;
    border-radius: 15px;
    >tr{
      border-radius: 15px;
      >td{
        border-radius: 15px;

        padding: 6px 2px;
        font-size: 20px;
      } 
    }
  }
`;

export {Block};