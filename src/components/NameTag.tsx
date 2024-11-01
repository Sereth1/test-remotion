import React from "react";
import {
  spring,
  useCurrentFrame,
  useVideoConfig,
  AbsoluteFill,
} from "remotion";

const NameTag = ({ jobTitle = "CEO, Zync.ai" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const text1TranslateY = spring({
    frame,
    fps,
    from: -100,
    to: 0,
    config: { damping: 10 },
  });

  const text1Opacity = spring({
    frame,
    fps,
    from: 0,
    to: 1,
  });

  const nameScale = spring({
    frame: frame - 20,
    fps,
    from: 0,
    to: 1.5,
    config: { damping: 10 },
  });

  const text2Opacity = spring({
    frame: frame - 20,
    fps,
    from: 0,
    to: 1,
  });

  const jobTitleScale = spring({
    frame: frame - 40,
    fps,
    from: 0,
    to: 1.5,
    config: { damping: 10 },
  });

  const text3Opacity = spring({
    frame: frame - 40,
    fps,
    from: 0,
    to: 1,
  });

  const exitStart = 60;

  const text1ExitY = spring({
    frame: frame - exitStart,
    fps,
    from: 0,
    to: -500,
    config: { damping: 10 },
  });

  const nameExitX = spring({
    frame: frame - exitStart,
    fps,
    from: 0,
    to: 2000,
    config: { damping: 10 },
  });

  const jobTitleExitY = spring({
    frame: frame - exitStart,
    fps,
    from: 0,
    to: 400,
    config: { damping: 10 },
  });

  return (
    <AbsoluteFill className="flex justify-center items-start font-sans">
      <div className="pl-10">
        <div
          id="intro-text"
          className="text-red-300 font-bold text-[80px]"
          style={{
            opacity: text1Opacity,
            transform: `translateY(${
              frame < exitStart ? text1TranslateY : text1ExitY
            }px)`,
          }}
        >
          This is
        </div>

        <div
          id="name-text"
          className="text-[40px] pl-10 font-bold pb-5 text-blue-600 leading-[0.9]"
          style={{
            opacity: text2Opacity,
            transform: `translateX(${
              frame < exitStart ? 0 : nameExitX
            }px) scale(${nameScale})`,
          }}
        >
          <span>Christopher</span>
          <br />
          <span>Fitzgerald</span>
        </div>

        <div
          id="jobtitle-text"
          className="text-[20px] pl-10 font-bold text-yellow-500"
          style={{
            opacity: text3Opacity,
            transform: `translateY(${
              frame < exitStart ? 0 : jobTitleExitY
            }px) scale(${jobTitleScale})`,
          }}
        >
          {jobTitle}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default NameTag;
