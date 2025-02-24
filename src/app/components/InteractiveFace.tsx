import { Image, Text } from "@react-three/drei";

type InteractiveFaceProps = {
  position: [number, number, number];
  rotation: [number, number, number];
  url?: string;
  text: string;
  link: string;
  textColor?: string;
  hovered: boolean; // ✅ Receive hover state from parent
  setHovered: (hover: boolean) => void; // ✅ Receive function to update hover state
};

const InteractiveFace = ({
  position,
  rotation,
  url,
  text,
  link,
  textColor = "#f7a000",
  hovered,
  setHovered,
}: InteractiveFaceProps) => {
  return (
    <group
      position={position}
      rotation={rotation}
      onClick={() => window.open(link, "_blank")}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={() => setHovered(false)}
    >
      {url && <Image scale={[1.8, 1.8]} url={url} position={[0, 0.4, 0.01]} />}
      <Text
        position={[0, -1.0, 0.01]}
        fontSize={0.3}
        textAlign="center"
        maxWidth={1.6}
        fontWeight="bold"
        color={hovered ? "white" : textColor} // ✅ Text color changes on hover
      >
        {text}
      </Text>
    </group>
  );
};

export default InteractiveFace;
