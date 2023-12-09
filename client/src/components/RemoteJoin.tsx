import React, { useEffect, useState } from "react";

// Assets
import {
  useDataMessage,
  useRemoteAudio,
  useRemotePeer,
} from "@huddle01/react/hooks";
import AudioElem from "./common/AudioElem";
import { AGENTS } from "../constants";

type GridCardProps = {
  peerId: string;
};

const GridCard: React.FC<GridCardProps> = ({ peerId }) => {
  const [reaction, setReaction] = useState("");

  const { metadata, role } = useRemotePeer<{
    displayName: string;
    avatarUrl: string;
    isHandRaised: boolean;
  }>({ peerId });

  const { stream, isAudioOn } = useRemoteAudio({
    peerId,
    onPlayable: () => {
      console.debug("ON PLAYABLE");
    },
  });

  return (
    <div className="relative flex items-center justify-center flex-col">
      {stream && <AudioElem peerId={peerId} />}
      <img
        src={AGENTS[0].image}
        alt="default-avatar"
        width={100}
        height={100}
        className="maskAvatar"
      />

      <div className="mt-1 text-center">
        <div className="text-custom-5 text-base font-medium">Snoopstein</div>
      </div>
    </div>
  );
};
export default React.memo(GridCard);
