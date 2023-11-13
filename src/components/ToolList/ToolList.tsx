import styled from "styled-components";

const ToolList = () => {
  return (
    <StyledToolList className="py-12">
      <p className="text-default uppercase">Tool list</p>
      <div className="flex justify-between tool-list__container">
        <p className="text-[35px] font-bold w-[500px] tool-list__text-1">
          Use our assortment of travel plan tools
        </p>
        <p className="w-[400px] tool-list__text-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          pulvinar lorem justo, Lorem ipsum dolor sit amet, consectetur
        </p>
      </div>
      <div className="flex gap-8 mt-12 tool-list__plans">
        <div className="border border-line text-center p-8 rounded-xl tool-list__plan">
          <img
            className="mx-auto"
            width="280px"
            height="280px"
            src="/assets/img/Time.png"
            alt="time"
          />
          <p className="font-bold mt-6">Plan Trip Dates</p>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="default-button">Learn more</button>
        </div>
        <div className="border border-line text-center p-8 rounded-xl tool-list__plan">
          <img
            className="mx-auto"
            width="280px"
            height="280px"
            src="/assets/img/money2.png"
            alt="time"
          />
          <p className="font-bold mt-6">Plan Trip Dates</p>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="default-button">Learn more</button>
        </div>
        <div className="border border-line text-center p-8 rounded-xl tool-list__plan">
          <img
            className="mx-auto"
            width="280px"
            height="280px"
            src="/assets/img/Money.png"
            alt="time"
          />
          <p className="font-bold mt-6">Plan Trip Dates</p>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="default-button">Learn more</button>
        </div>
      </div>
    </StyledToolList>
  );
};

const StyledToolList = styled.div`
  @media (max-width: 1125px) {
    .tool-list__plans {
      flex-wrap: wrap;
    }
    .tool-list__plan {
      width: 100%;
    }
  }
  @media (max-width: 1025px) {
    .tool-list__container {
      flex-direction: column;
    }
    .tool-list__text-1 {
      font-size: 28px;
      margin-bottom: 10px;
    }

    .tool-list__text-1,
    .tool-list__text-2 {
      width: 100%;
    }
  }
`;

export default ToolList;
