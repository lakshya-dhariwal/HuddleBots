import { useLocalPeer, usePeerIds } from "@huddle01/react/hooks";
import { Role } from "@huddle01/server-sdk/auth";
import RemoteJoin from "./RemoteJoin";

type GridLayoutProps = {};

const GridLayout: React.FC<GridLayoutProps> = () => {
  return <Hosts />;
};

export const Hosts = () => {
  const { peerIds } = usePeerIds({ roles: [Role.HOST] });
  return (
    <div className="">
      {" "}
      {peerIds.map((peerId) => {
        return <RemoteJoin key={`grid-${peerId}`} peerId={peerId} />;
      })}
    </div>
  );
};
export default GridLayout;
