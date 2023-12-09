import {
  useRoom,
  useLocalPeer,
  usePeerIds,
  useHuddle01,
  useDataMessage,
  useRemoteAudio,
  useRemotePeer,
} from "@huddle01/react/hooks";
import { useState, useEffect } from "react";
import { useParams } from "wouter";
import { navigate } from "wouter/use-location";
import RemoteJoin from "../components/RemoteJoin";
import { Role } from "@huddle01/server-sdk/auth";
import GridLayout from "../components/GridLayout";

function Room() {
  const params = useParams();

  const { state } = useRoom({
    onLeave: () => {
      navigate(`/`);
    },
  });

  // const { changePeerRole } = useAcl();
  const [requestedPeerId, setRequestedPeerId] = useState("");

  const { updateMetadata, metadata, peerId, role } = useLocalPeer<{
    displayName: string;
    avatarUrl: string;
    isHandRaised: boolean;
  }>();
  const { peerIds } = usePeerIds();

  const { huddleClient } = useHuddle01();

  useEffect(() => {
    if (state === "idle") {
      navigate(`/`);
      return;
    } else {
      console.log("length", peerIds.length);
      updateMetadata({
        displayName: "Lakshya",
        avatarUrl: "https://api.dicebear.com/6.x/notionists/svg?seed=2e",
        isHandRaised: metadata?.isHandRaised || false,
      });
    }
  }, []);

  useDataMessage({
    onMessage(payload, from, label) {
      if (label === "chat" && from !== peerId) {
        const messagePayload = JSON.parse(payload);
        const newChatMessage = {
          name: messagePayload.name,
          text: messagePayload.message,
          is_user: false,
        };
      }
    },
  });

  return (
    <div>
      Room : {params.id}
      <h1>
        <GridLayout />
      </h1>
    </div>
  );
}

export default Room;
