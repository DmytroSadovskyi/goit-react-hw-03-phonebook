import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  margin-bottom: 20px;
  padding: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 5px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const FormInput = styled.input`
  height: 25px;
  width: 88%;
  padding-left: 30px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 5px;
`;

export const FormButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px;

  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  background-color: greenyellow;
`;
