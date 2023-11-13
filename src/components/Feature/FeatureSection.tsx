import styled from "styled-components";

const FeatureSection = () => {
  return (
    <StyledFeature className="flex container">
      <div className="flex py-8 px-14 feature-block">
        <img
          className="self-start mr-2"
          src="/assets/img/AirplaneTilt.svg"
          alt="plane"
        />
        <div>
          <p className="text-[26px] font-bold text-dark">23,973</p>
          <p className="text-[#6E7191]">
            Travel to over 23 thousand locations around the world.
          </p>
        </div>
      </div>
      <div className="flex py-8 px-14 feature-block border-x border-line">
        <img
          className="self-start mr-2"
          src="/assets/img/GlobeHemisphereEast.svg"
          alt="plane"
        />
        <div>
          <p className="text-[26px] font-bold text-dark">82,000</p>
          <p className="text-[#6E7191]">
            Read tens of thousands of reviews of destinations.
          </p>
        </div>
      </div>
      <div className="flex py-8 px-14 feature-block">
        <img
          className="self-start mr-2"
          src="/assets/img/Bicycle.svg"
          alt="bike"
        />
        <div>
          <p className="text-[26px] font-bold text-dark">4,000,000</p>
          <p className="text-[#6E7191]">
            Visited by millions of travellers every single day.
          </p>
        </div>
      </div>
    </StyledFeature>
  );
};

const StyledFeature = styled.div`
  @media (max-width: 1120px) {
    margin-top: 80px;
    flex-wrap: wrap;
    .feature-block {
      width: 100%;
      border: 1px solid #d9dbe9;
      padding: 40px 20px;
    }
  }
`;

export default FeatureSection;
