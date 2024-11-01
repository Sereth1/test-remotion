// src/RemotionRoot.tsx
import "./tailwind.css";
import { Composition } from "remotion";
import NameTag from "./components/NameTag";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyComp"
        component={NameTag}
        durationInFrames={150}
        fps={30}
        width={1280}
        height={720}
        defaultProps={{
          name: "Christopher Fitzgerald",
          jobTitle: "CEO, Zync.ai",
        }}
      />
    </>
  );
};
