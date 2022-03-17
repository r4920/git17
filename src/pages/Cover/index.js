import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Input } from "components/Input";

const CoverPage = () => {
  return (
    <Column className="bg-blue_600 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="2xl:mb-[15px] 2xl:mt-[41px] 3xl:mb-[18px] 3xl:mt-[49px] font-sfprodisplay items-center justify-start lg:mb-[11px] lg:mt-[32px] mb-[20px] mt-[55px] mx-[auto] self-stretch w-[100%] xl:mb-[13px] xl:mt-[36px]">
        <Row className="items-center justify-between mx-[auto] px-[0] self-stretch w-[100%]">
          <Text className="2xl:ml-[60px] 2xl:text-fs23 3xl:ml-[72px] 3xl:text-fs27 font-normal lg:ml-[47px] lg:text-fs18 ml-[81px] opacity-op5 text-fs31 text-left text-white_A700 xl:ml-[54px] xl:text-fs20">{`UX/UI`}</Text>
          <Text className="2xl:mr-[60px] 2xl:text-fs23 3xl:mr-[72px] 3xl:text-fs27 font-normal lg:mr-[47px] lg:text-fs18 mr-[81px] opacity-op5 text-fs31 text-right text-white_A700 xl:mr-[54px] xl:text-fs20">{`2021`}</Text>
        </Row>
        <Input
          className="2xl:mt-[135px] 3xl:mt-[162px] bg-transparent lg:mt-[105px] max-w-[204px] mt-[181px] mx-[auto] w-[11%] xl:mt-[120px]"
          name="telegram11"
          placeholder=""
        ></Input>
        <Text className="2xl:mt-[63px] 2xl:text-fs98 3xl:mt-[76px] 3xl:text-fs117 font-semibold lg:mt-[49px] lg:text-fs76 max-w-[1040px] mt-[85px] mx-[auto] text-center text-fs131 text-white_A700 tracking-ls1 w-[55%] xl:mt-[56px] xl:text-fs87">{`Telegram Contest`}</Text>
        <Text className="2xl:mt-[8px] 2xl:text-fs35 3xl:mt-[9px] 3xl:text-fs42 font-normal lg:mt-[6px] lg:text-fs27 max-w-[196px] mt-[11px] mx-[auto] opacity-op5 text-center text-fs47 text-white_A700 w-[11%] xl:mt-[7px] xl:text-fs31">{`@dikaleto`}</Text>
      </Column>
    </Column>
  );
};

export default CoverPage;
