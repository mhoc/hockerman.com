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
          border: "1px solid #455a64",
          borderRadius: "12px",
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
