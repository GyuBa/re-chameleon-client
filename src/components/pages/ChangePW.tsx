import React from 'react';
import {Button, Header} from '../index';
import {useStateContext} from "../../contexts/ContextProvider";
import {Link} from "react-router-dom";

export default function Payment() {
  const {currentColor} = useStateContext();

  return (
    <div className="contents">
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <Header category="" title="비밀번호 변경"/>
        <p className="m-4">* 비밀번호 변경 규칙 *</p>
        <div className="m-4">
          <input
            onChange={undefined}
            type="text"
            className="text-base form-control block w-full px-4 py-2 text-base font-normal
                  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white
                  focus:border-blue-600 focus:outline-none"
            id="pw-1"
            placeholder="현재 비밀번호"/>
        </div>
        <div className="m-4">
          <input
            onChange={undefined}
            type="text"
            className="text-base form-control block w-full px-4 py-2 text-base font-normal
                  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white
                  focus:border-blue-600 focus:outline-none"
            id="pw-2"
            placeholder="새 비밀번호"/>
        </div>
        <div className="m-4">
          <input
            onChange={undefined}
            type="text"
            className="text-base form-control block w-full px-4 py-2 text-base font-normal
                  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white
                  focus:border-blue-600 focus:outline-none"
            id="pw-3"
            placeholder="새 비밀번호 확인"/>
        </div>
        <div className="">
          <Link to="/account">
            <Button
              color="black"
              bgColor="white"
              text="취소"
              borderRadius="10px"
              width="16"
              padding="2"
              icon={undefined}
              bgHoverColor={undefined}
              size={undefined}
            />
          </Link>
          <Button
            color="white"
            bgColor={currentColor}
            text="확인"
            borderRadius="10px"
            width="16"
            padding="2"
            icon={undefined}
            bgHoverColor={undefined}
            size={undefined}
          />
        </div>
      </div>
    </div>
  );
};