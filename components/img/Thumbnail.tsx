interface Props {
  dim: string;
  softenColors?: boolean;
  src: string;
}

export const Thumbnail = ({ dim, softenColors, src } : Props) => {
  return (
    <div style={{ height: dim, width: dim }}>
      <img 
        src={src} 
        style={{
          borderRadius: "8px",
          height: dim,
          width: dim,
          ...softenColors ? {
            filter: "grayscale(60%)",
          } : {},
        }}
      />
    </div>
  );
}
