import styled from "styled-components";

const CommentsSection = () => {
  return (
    <StyledComments className="py-12">
      <p className="text-default uppercase">TESTIMONIALS</p>
      <div className="flex justify-between comments-container">
        <p className="text-[35px] font-bold w-[500px] comments__text-1">
          Let’s see what fans of Travelulu have to say
        </p>
        <p className="w-[400px] tool-list__text-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          pulvinar lorem justo, Lorem ipsum dolor sit amet, consectetur
        </p>
      </div>
      <div className="flex gap-8 mt-20 comments-section">
        <div className="border border-line text-center p-8 rounded-xl relative comments-block">
          <img className="mx-auto" src="/assets/img/Avatar1.svg" alt="time" />
          <div className="mt-12 border-b border-b-line pb-4 comments-text">
            <p className="font-bold">Joe Blo</p>
            <p className="font-bold">Visited: France</p>
          </div>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="border border-line text-center p-8 rounded-xl relative comments-block">
          <img className="mx-auto" src="/assets/img/Avatar2.svg" alt="time" />
          <div className="mt-12 border-b border-b-line pb-4 comments-text">
            <p className="font-bold">Jane Blo</p>
            <p className="font-bold">Visited: France</p>
          </div>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="border border-line text-center p-8 rounded-xl relative comments-block">
          <img className="mx-auto" src="/assets/img/Avatar3.svg" alt="time" />
          <div className="mt-12 border-b border-b-line pb-4 comments-text">
            <p className="font-bold">Joe Blo</p>
            <p className="font-bold">Visited: France</p>
          </div>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </StyledComments>
  );
};

const StyledComments = styled.div`
  .comments-section img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    background-color: #e4daff;
    padding: 20px;
    border-radius: 100%;
    position: absolute;
    top: -40px;
    left: 35%;
  }
  @media (max-width: 1125px) {
    .comments-section {
      flex-wrap: wrap;
      gap: 60px;
    }
    .comments-block {
      width: 100%;
    }
    .comments-section img {
      width: 80px;
      height: 80px;
      left: 30px;
    }
    .comments-text {
      margin: 20px 0;
    }
  }
  @media (max-width: 1025px) {
    .comments-container {
      flex-direction: column;
    }
    .comments__text-1 {
      font-size: 28px;
      margin-bottom: 10px;
    }

    .comments__text-1,
    .tool-list__text-2 {
      width: 100%;
    }
  }
`;

export default CommentsSection;
