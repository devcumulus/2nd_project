import React, { useEffect, useState } from "react";
import {
  Amounts,
  BtWrap,
  BtnColor,
  BtnColorSub,
  Detail,
  Goods,
  GoodsWrap,
  ListSrc,
  PictureS,
  Price,
  ProductS,
  Rla,
  TransactionS,
} from "../../styles/productsStyle";
import RadioButton from "./RadiButton";
import Api_prod, { AddressSearch } from "../../components/prodapi/Api_prod";

const initState = [
  ["스마트워치", "태블릿", "갤럭시", "아이폰"],
  ["노트북", "PC", "마우스", "키보드"],
  ["빔프로젝터", "셋톱박스", "카메라", "캠코더", "DSLR"],
  ["스피커", "이어폰", "헤드폰", "마이크"],
  ["플레이스테이션", "닌텐도", "Wii", "XBOX", "기타"],
];
const Products = () => {
  //리스트 아이탬 state
  const [listItems, setListItems] = useState(initState);
  const [selectCate, setSelectCate] = useState(0);
  const [goods, setGoods] = useState([]);
  const [changebtn, setChangeBtn] = useState([0, 1, 2, 3, 4]);

  const [startDate, setStartDate] = useState(new Date());
  //이미지 파일이 담을 state
  const [image, setImage] = useState(null);

  useEffect(() => {
    // console.log(1);
    // goods 라는 배열에 내용을 넣는다.
    // goods 배열은 초기 데이터(listIems) 배열에서 [인덱스] 를 활용해서
    // 업데이트 했다.
    // selectCate 의 값이 바뀌면 goods 업데이트 됩니다.
    setGoods(listItems[selectCate]);
  }, [selectCate]);

  //버튼 클릭시 함수 호출
  const handleButtonClick = num => {
    // const newIem = `아이템 ${listItems.length + 1}`;
    // const newList = [...listItems, newIem];
    // 상태 업데이트
    setSelectCate(num);
    // 주메뉴가 눌려지면 항상 서브메뉴들은 초기화 한다.
    setChangeBtn(null);
  };

  const handleChangeBtn = item => {
    setChangeBtn(item);
  };
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = event => {
    setSelectedValue(event.target.value);
  };

  const radioData = [
    { id: 1, name: "group1", value: "50%" },
    { id: 2, name: "group1", value: "60%" },
    { id: 3, name: "group1", value: "70%" },
    { id: 4, name: "group1", value: "80%" },
    { id: 4, name: "group1", value: "90%" },
    { id: 4, name: "group1", value: "100%" },
  ];
  return (
    <GoodsWrap>
      <Goods>
        <p>기본정보</p>
      </Goods>
      <div>
        <form>
          <PictureS>
            <label htmlFor="picture">
              <p className="pic">사진</p> <p>*</p>
            </label>

            <input type="file" accept="jpg,svg" name="picture" id="picture" />
            {image && (
              <img src={image} alt="Preview" style={{ maxWidth: "100%" }} />
            )}
          </PictureS>

          <ProductS>
            <label htmlFor="product" className="ladelprt">
              <p className="prd">상품명</p> <p>*</p>
            </label>
            <input type="text" id="product" placeholder="상품을 입력해주세요" />
          </ProductS>

          <ListSrc>
            <ladel className="ladelct">
              <p className="ct">카테고리</p> <p>*</p>
            </ladel>

            <BtWrap>
              <ul>
                <li>
                  <BtnColor
                    type="button"
                    clickbtn={selectCate === 0}
                    onClick={() => {
                      handleButtonClick(0);
                      // handleChangeBtn(0);
                    }}
                  >
                    스마트기기
                  </BtnColor>
                </li>
                <li>
                  <BtnColor
                    type="button"
                    clickbtn={selectCate === 1}
                    onClick={() => {
                      handleButtonClick(1);
                      // handleChangeBtn(1);
                    }}
                  >
                    pc/노트북
                  </BtnColor>
                </li>
                <li>
                  <BtnColor
                    type="button"
                    clickbtn={selectCate === 2}
                    onClick={() => {
                      handleButtonClick(2);
                      // handleChangeBtn(2);
                    }}
                  >
                    영상카메라
                  </BtnColor>
                </li>
                <li>
                  <BtnColor
                    type="button"
                    clickbtn={selectCate === 3}
                    onClick={() => {
                      handleButtonClick(3);
                      // handleChangeBtn(3);
                    }}
                  >
                    음향
                  </BtnColor>
                </li>
                <li>
                  <BtnColor
                    type="button"
                    clickbtn={selectCate === 4}
                    onClick={() => {
                      handleButtonClick(4);
                      // handleChangeBtn(4);
                    }}
                  >
                    게임 기기
                  </BtnColor>
                </li>
              </ul>
            </BtWrap>
            <BtWrap>
              <ul>
                {goods.map((item, index) => (
                  <li key={index}>
                    <BtnColorSub
                      type="button"
                      clickbtn={changebtn === item}
                      onClick={() => {
                        handleChangeBtn(item);
                      }}
                    >
                      {item}
                    </BtnColorSub>
                  </li>
                ))}
              </ul>
            </BtWrap>
          </ListSrc>

          <Price>
            <label htmlFor="price" className="LadelPre">
              <p className="pre">대여가격</p>
              <p>*</p>
            </label>
            <input
              type="text"
              placeholder="₩ 대여 가격"
              name="price"
              id="price"
            ></input>
          </Price>

          <Detail>
            <label htmlFor="detail" className="LadelDta">
              <p className="dta">상품내용</p> <p>*</p>
            </label>
            <input
              type="text"
              name="detail"
              id="detail"
              placeholder="구매시기,브랜드/모델명,제품의 상태(사용감,하자유무를)등 입력 해주세요"
            ></input>
          </Detail>

          <Amounts>
            <label htmlFor="amounts" className="Ladelamu">
              <p className="amu">보증금</p> <p>*</p>
            </label>
            {/* 라디오 버튼은 여러개 중에 오로지 1개만 선택이 가능 함. 같은지 다른지 파악하는 것은 name 속성의 단어가 같은지를 비교 */}

            <input
              type="text"
              name="amounts"
              id="amounts"
              placeholder="금액을 입력해주세요"
            />
            <div className="Sud">
              {radioData.map(radio => (
                <RadioButton
                  key={radio.id}
                  name={radio.name}
                  value={radio.value}
                  checked={selectedValue === radio.value}
                  onChange={handleRadioChange}
                  className="small"
                />
              ))}
              <p> 보증금 : {selectedValue}</p>
            </div>
          </Amounts>
          {/* <input type="radio" name="amount" value={50}></input>
          <p>50%</p>
          <input type="radio" name="amount" value={60}></input>
          <p>60%</p>
          <input type="radio" name="amount" value={70}></input>
          <p>70%</p>
          <input type="radio" name="amount" value={80}></input>
          <p>80%</p>
          <input type="radio" name="amount" value={90}></input>
          <p>90%</p>
          <input type="radio" name="amount" value={100}></input>
          <p>100%</p> */}

          <Rla>
            <ladel htmlFor="rla" className="LadelRa">
              <p className="ra">제품구매일</p> <p>*</p>
            </ladel>
            <input
              type="date"
              name="rla"
              id="rla"
              placeholder="제품 구매년도를 입력해주세요.   예) 2017년 12월 / 2015년 6월 19일"
            />
            {/* <DatePicker
                dateFormat="yyyy/MM/dd"
                selected={startDate}
                onChange={date => setStartDate(date)}
              /> */}
          </Rla>
          <AddressSearch />
          <TransactionS>
            <ladel htmlFor="transaction" className="Ladeltst">
              <p className="tst">거래가능주소</p> <p>*</p>
            </ladel>
            {/* <input type="button" value="우편 검색" id="btn" /> */}
            <input
              type="text"
              name="transaction"
              id="transaction"
              placeholder="거래 가능 주소를 입력해주세요.   예) 대구광역시 달서구 월성동"
            />
          </TransactionS>
        </form>
      </div>
    </GoodsWrap>
  );
};

export default Products;
