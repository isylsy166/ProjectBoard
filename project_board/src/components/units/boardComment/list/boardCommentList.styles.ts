import { DeleteOutlined, EditOutlined } from "@ant-design/icons/lib/icons";
import styled from "@emotion/styled";
import { Modal } from "antd";
import "antd/dist/reset.css";

export const Wrapper = styled.div`
  width: 680px;
  //여백
  margin-bottom: 10px;
  border-top: 3px solid #ff5c77;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-top: 15px;
  margin-bottom: 15px;
`;

export const Avatar = styled.img`
  width: 35px;
  margin-right: 10px;
`;

export const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 10px;
`;

export const DateString = styled.div`
  font-size: 12px;
  color: gray;
`;

export const ContentsWrapper = styled.div`
  font-size: 20px;
  padding-bottom: 10px;
`;

export const Contents = styled.div`
  font-size: 18px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

export const EditIcon = styled(EditOutlined)`
  margin-right: 12px;
  color: gray;
`;

export const DeleteIcon = styled(DeleteOutlined)`
  margin-right: 10px;
  color: gray;
`;

export const CommentModal = styled(Modal)``;

export const InputPW = styled.input``;
