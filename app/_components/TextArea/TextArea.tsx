"use client";

import styles from "./TextArea.module.css";

interface Props {
  onChange: (text: string) => void;
  value: string;
}

export default function TextArea({ onChange, value }: Props) {
  return (
    <textarea
      className={styles.textarea}
      rows={2}
      onChange={(e) => onChange(e.target.value)}
      value={value}
    ></textarea>
  );
}
