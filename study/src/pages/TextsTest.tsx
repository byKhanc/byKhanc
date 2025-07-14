import { Title, Subtitle, Summary, Paragraph } from "../components";
import * as D from "../data";

const

export default finction TextsTest() {
  return (
    <div>
      <Title>Texts Test</Title>
      <div>
        <Title className="text-blue-600">{D.randomTitleText()}</Title>
        <Subtitle className="text-blue-400">{D.randomSubtitleText()}</Subtitle>
        <p className="text-xl italic text-center text-gray-900 text-bold">
          D.randomName()
        </p>
        <paragraph numberOfLines={5}>{paragraph}</paragraph>
      </div>
    </div>
  );
