import colors from "../styles/colors";
import * as fonts from "../styles/fonts";

export interface TextAreaProps {
  onChange: (text: string) => void;
  value: string;
}

export const TextArea = (props: TextAreaProps) => {
  const { onChange, value } = props;
  return (
    <>
      <textarea
        className="text-area"
        rows={2}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      ></textarea>
      <style jsx>{`
        .text-area {
          background-color: ${colors.deemphasizeMajor};
          border: 1px solid ${colors.deemphasize};
          color: ${colors.primary};
          font-family: ${fonts.jetBrainsMono.style.fontFamily};
          font-size: 0.8rem;
          max-width: 400px;
          min-width: 400px;
          padding: 8px;
        }
        .text-area:focus {
          outline: none !important;
        }
        @media only screen and (max-width: 600px) {
          .text-area {
            max-width: 300px;
            min-width: 300px;
          }
        }
      `}</style>
    </>
  );
};
