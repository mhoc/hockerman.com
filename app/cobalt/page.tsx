import { ColorSample } from "./ColorSample";
import { GradientSample } from "./GradientSample";

export default function Cobalt() {
  return (
    <div className="w-full h-full p-16 overflow-y-auto">
      <div className="flex flex-col gap-8 max-w-2xl">
        <span className="text-sm text-cobalt-300">
          Cobalt is the name of the custom color palette this site uses. Technically cobalt the metal 
          is more blue, not purple, but I wanted a metal-like name similar to {"Tailwind's"} Slate, 
          Zinc, and Stone.
        </span>
        <div className="flex flex-col gap-2 bg-white w-full p-8">
          <ColorSample
            bgClassName="bg-cobalt-950"
            textClassName="text-cobalt-950"
            analogueBgClassName="bg-slate-950"
            analogueTextColor="text-white"
          />
          <ColorSample
            bgClassName="bg-cobalt-900"
            textClassName="text-cobalt-900"
            analogueBgClassName="bg-slate-900"
            analogueTextColor="text-white"
          />
          <ColorSample
            bgClassName="bg-cobalt-800"
            textClassName="text-cobalt-800"
            analogueBgClassName="bg-slate-800"
            analogueTextColor="text-white"
          />
          <ColorSample
            bgClassName="bg-cobalt-700"
            textClassName="text-cobalt-700"
            analogueBgClassName="bg-slate-700"
            analogueTextColor="text-white"
          />
          <ColorSample
            bgClassName="bg-cobalt-600"
            textClassName="text-cobalt-600"
            analogueBgClassName="bg-slate-600"
            analogueTextColor="text-white"
          />
          <ColorSample
            bgClassName="bg-cobalt-500"
            textClassName="text-cobalt-500"
            analogueBgClassName="bg-slate-500"
            analogueTextColor="text-white"
          />
          <ColorSample
            bgClassName="bg-cobalt-400"
            textClassName="text-cobalt-400"
            analogueBgClassName="bg-slate-400"
            analogueTextColor="text-black"
          />
          <ColorSample
            bgClassName="bg-cobalt-300"
            textClassName="text-cobalt-300"
            analogueBgClassName="bg-slate-300"
            analogueTextColor="text-black"
          />
          <ColorSample
            bgClassName="bg-cobalt-200"
            textClassName="text-cobalt-200"
            analogueBgClassName="bg-slate-200"
            analogueTextColor="text-black"
          />
          <ColorSample
            bgClassName="bg-cobalt-100"
            textClassName="text-cobalt-100"
            analogueBgClassName="bg-slate-100"
            analogueTextColor="text-black"
          />
          <ColorSample
            bgClassName="bg-cobalt-50"
            textClassName="text-cobalt-50"
            analogueBgClassName="bg-slate-50"
            analogueTextColor="text-black"
          />
        </div>
        <div className="flex flex-col gap-2 bg-black w-full p-8">
          <ColorSample
            bgClassName="bg-cobalt-950"
            textClassName="text-cobalt-950"
            analogueBgClassName="bg-slate-950"
            analogueTextColor="text-white"
          />
          <ColorSample
            bgClassName="bg-cobalt-900"
            textClassName="text-cobalt-900"
            analogueBgClassName="bg-slate-900"
            analogueTextColor="text-white"
          />
          <ColorSample
            bgClassName="bg-cobalt-800"
            textClassName="text-cobalt-800"
            analogueBgClassName="bg-slate-800"
            analogueTextColor="text-white"
          />
          <ColorSample
            bgClassName="bg-cobalt-700"
            textClassName="text-cobalt-700"
            analogueBgClassName="bg-slate-700"
            analogueTextColor="text-white"
          />
          <ColorSample
            bgClassName="bg-cobalt-600"
            textClassName="text-cobalt-600"
            analogueBgClassName="bg-slate-600"
            analogueTextColor="text-white"
          />
          <ColorSample
            bgClassName="bg-cobalt-500"
            textClassName="text-cobalt-500"
            analogueBgClassName="bg-slate-500"
            analogueTextColor="text-white"
          />
          <ColorSample
            bgClassName="bg-cobalt-400"
            textClassName="text-cobalt-400"
            analogueBgClassName="bg-slate-400"
            analogueTextColor="text-black"
          />
          <ColorSample
            bgClassName="bg-cobalt-300"
            textClassName="text-cobalt-300"
            analogueBgClassName="bg-slate-300"
            analogueTextColor="text-black"
          />
          <ColorSample
            bgClassName="bg-cobalt-200"
            textClassName="text-cobalt-200"
            analogueBgClassName="bg-slate-200"
            analogueTextColor="text-black"
          />
          <ColorSample
            bgClassName="bg-cobalt-100"
            textClassName="text-cobalt-100"
            analogueBgClassName="bg-slate-100"
            analogueTextColor="text-black"
          />
          <ColorSample
            bgClassName="bg-cobalt-50"
            textClassName="text-cobalt-50"
            analogueBgClassName="bg-slate-50"
            analogueTextColor="text-black"
          />
        </div>
        <div>
          <GradientSample className="bg-slate-gradient-full" label="slate" />
          <GradientSample className="bg-cobalt-gradient-full" label="cobalt" />
          <GradientSample className="bg-stone-gradient-full" label="stone" />
        </div>
        <span className="text-sm text-cobalt-300">
          Cobalt has accent colors which are complementary to the muted purple of its base palette and can be used to call
          attention to UI elements.
        </span>
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-col items-center justify-center bg-cobalt-accent-high w-32 h-10 rounded-lg">
            <span className="text-xs text-black text-center">cobalt-accent-high</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-cobalt-accent-med w-32 h-10 rounded-lg">
            <span className="text-xs text-black text-center">cobalt-accent-med</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-cobalt-accent-low w-32 h-10 rounded-lg">
            <span className="text-xs text-black text-center">cobalt-accent-low</span>
          </div>
        </div>
        <span className="text-sm text-cobalt-300">
          These accent colors can be useful for <span className="text-cobalt-accent-high">highlighting text</span> in the
          middle of a paragraph, such as{" "}
          <span className="text-cobalt-accent-med underline decoration-dotted">for hyperlinks</span> or other kinds of
          important content.
        </span>
      </div>
    </div>
  );
}
