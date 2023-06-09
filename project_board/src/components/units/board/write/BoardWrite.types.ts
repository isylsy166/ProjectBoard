import { ChangeEvent, MouseEventHandler } from "react";
import { Address } from "react-daum-postcode/lib/loadPostcode";
import { IBoardAddress, IQuery } from "../../../../commons/types/types";

export interface IBoardWriteProps {
  isEdit: boolean;

  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBoardWriteUIProps {
  isEdit: boolean;
  isActive: boolean;

  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;

  onClickEdit: () => void;
  onClickSubmit: () => void;
  success: () => void;
  visible: () => void;
  onClickSearchAddress: () => void;
  onCompleteAddressSearch: (data: any) => void;
  handleOk: () => void;
  handleCancel: () => void;
  isModalOpen: boolean;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  addressError: string;
  address: string;
  zonecode: string;
  addressDetail: string;

  data?: Pick<IQuery, "fetchBoard">;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
}
