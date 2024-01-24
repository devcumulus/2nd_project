import React, { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import MyCategory from "../../components/my/MyCategory";
import Mytitle from "../../components/my/Mytitle";
import styled from "@emotion/styled";
import MyInterestList from "../../components/my/interest/MyInterestList";



const AllWidth = styled.div`
  width: 1260px;
  margin: 0 auto;
`;

const Flex = styled.div`
  display: flex;
  > div:nth-of-type(2) {
    width: 1020px;
    margin-left: 105px;
    display: flex;
    flex-direction: column;
    gap: 3.3rem;
  }
`;

const MyInterestPage = () => {
  const [activeBtn, setActiveBtn] = useState("관심 목록");
  const [selectedItem, setSelectedItem] = useState("관심 목록");
  const myCate = [
    {
      title: "대여 리스트",
      name: "rental",
      list: ["대여중", "대여 완료"],
    },
    {
      title: "관심 상품",
      name: "interest",
      list: ["관심 목록"],
    },
    {
      title: "후기 관리",
      name: "review",
      list: ["내 작성 후기", "내 상품 후기"],
    },
    {
      title: "내 정보",
      name: "info",
      list: ["회원정보 수정", "회원탈퇴"],
    },
  ];

  useEffect(() => {
    // console.log(selectedItem);
  }, [selectedItem]);

  const handleSubItemClick = (subItem) => {
    setSelectedItem(subItem);
    setActiveBtn(subItem === "관심 목록");
  }

  return (
    <Layout>
      <AllWidth>
        <div>
          <Mytitle />
        </div>
        <Flex>
          <MyCategory myCate={myCate} selectedItem={selectedItem} setSelectedItem={setSelectedItem} onSubItemClick={handleSubItemClick}/>
          <div>
            <MyInterestList />
          </div>
        </Flex>
      </AllWidth>
    </Layout>
  );
};

export default MyInterestPage;
