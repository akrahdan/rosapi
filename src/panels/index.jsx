import {
  AddInfoPanelTagsInputStyle,
  PanelContent,
  PanelWrapper,
  ViewportWrapper,
} from "../components/styled";

import ROSLIB from "roslib";
import Amphion from "../rosnav";
import { useState } from "react";

import Viewport from './viewer';

export const Wrapper = () => {
  const [frameList, setFrameList] = useState();
  const [globalOptions, setGlobalOptions ] = useState([])
  const ros = new ROSLIB.Ros({});

  const updateFrameList = (frameList) => {
    // setFrameList(frameList | []);
  };
  const viewer = new Amphion.TfViewer(ros, {
    onFramesListUpdate: updateFrameList,
  });

 
  return (
    <PanelContent>
      <ViewportWrapper>
        <Viewport viewer={viewer} globalOptions={globalOptions} />
      </ViewportWrapper>
    </PanelContent>
  );
};

export default Wrapper;
