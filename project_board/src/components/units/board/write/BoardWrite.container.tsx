import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, ChangeEvent, MouseEvent } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { IBoardWriteProps, IUpdateBoardInput } from "./BoardWrite.types";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/types";
import { Modal } from "antd";
import { Address } from "react-daum-postcode/lib/loadPostcode";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();

  // input
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  // Error
  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [isActive, setIsActive] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [zonecode, setZonecode] = useState("");

  // GraphQl
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  // input writer
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }

    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // input password
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }

    if (event.target.value && writer && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // input title
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }

    if (event.target.value && password && writer && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  // input contents
  function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }

    if (event.target.value && password && title && writer) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  // address

  // SearchAddress
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onClickSearchAddress = () => {
    setIsModalOpen(true);
  };

  const onCompleteAddressSearch = (data: any) => {
    console.log(data);
    setAddress(data.address);
    setZonecode(data.zonecode);
    setIsModalOpen(false);
  };

  // 등록하기 버튼
  const onClickSubmit = async () => {
    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!title) {
      setTitleError("제목을 입력해주세요.");
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요.");
    }
    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              // 객체에서 키와 value가 같으면 생략할 수 있다 shorthand-property
              writer,
              password,
              title,
              contents,
            },
          },
        });
        console.log("게시판 ID: " + result.data.createBoard._id);
        router.push(`/boards/${result.data.createBoard._id}`);

        Modal.success({
          content: "게시글 등록",
        });
      } catch (error) {
        alert(error.message);
      }
    }
  };

  // 수정하기
  const onClickEdit = async () => {
    if (title && !contents) {
      alert("수정한 내용이 없습니다");
      return;
    }

    if (!password) {
      alert("비밀번호를 입력하세요");
      return;
    }

    const updateBoardInput: IUpdateBoardInput = {};

    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;

    const result = await updateBoard({
      variables: {
        boardId: String(router.query.BoardDetail),
        password: password,
        updateBoardInput: updateBoardInput,
      },
    });

    router.push(`/boards/${result.data?.updateBoard._id}`);
  };

  return (
    <BoardWriteUI
      //
      writerError={writerError}
      contentsError={contentsError}
      titleError={titleError}
      passwordError={passwordError}
      //
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      //
      handleOk={handleOk}
      handleCancel={handleCancel}
      onClickSearchAddress={onClickSearchAddress}
      onCompleteAddressSearch={onCompleteAddressSearch}
      isModalOpen={isModalOpen}
      data={props.data}
      address={address}
      zonecode={zonecode}
      // 받아온거
      isEdit={props.isEdit}
    />
  );
}
