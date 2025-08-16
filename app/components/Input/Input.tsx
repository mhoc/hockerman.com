"use client";

export function Input({ onChange, value }: { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; value: string }) {
  return (
    <input
      type="text"
      id="first_name"
      className="bg-cobalt-700 border border-cobalt-500 text-cobalt-200 text-sm rounded-lg block w-full p-2.5 focus:ring-0 focus:ring-offset-0 outline-none"
      placeholder="OpenAI API Key"
      required
      value={value}
      onChange={onChange}
    />
  )
}
