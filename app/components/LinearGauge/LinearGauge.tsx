export function LinearGauge({ value }: { value: number }) {
  return (
    <span className="text-md text-emerald-600">
      {Array.from({ length: 10 })
        .map((_, index) => {
          const threshold = index / 10;
          if (value >= threshold + 0.1) {
            return "█"; // Full block for filled sections
          } else if (value > threshold) {
            // Partial blocks based on how much is filled
            const partialFill = Math.floor((value - threshold) * 10);
            switch (partialFill) {
              case 1:
                return "▏";
              case 2:
                return "▎";
              case 3:
                return "▍";
              case 4:
                return "▌";
              case 5:
                return "▋";
              case 6:
                return "▊";
              case 7:
                return "▉";
              default:
                return "░";
            }
          } else {
            return "░"; // Empty block for unfilled sections
          }
        })
        .join("")}
    </span>
  );
}
